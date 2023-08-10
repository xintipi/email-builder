'use client'

import { usePathname } from 'next/navigation'
import PropTypes from 'prop-types'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  useMemo,
} from 'react'

import { loadStyle, loadScript } from '@/lib/utils'
import { useSpin } from '@/stores/spin.store'

let lastEditorId = 0

const EmailEditor = forwardRef((props, ref) => {
  const { onLoad, scriptUrl, styleUrl, minHeight = '100vh', style = {} } = props

  const isLoadedRef = useRef(false)
  const editorId = useRef(props.editorId || `editor-${++lastEditorId}`)

  const [editor, setEditor] = useState(null)

  const pathName = usePathname()

  const { setSpinning } = useSpin()

  const defaultUrlBack = useMemo(() => {
    const pathArray = pathName.split('/')

    if (pathName.includes('/new')) {
      pathArray.pop()
    }

    if (pathName.includes('/edit/')) {
      pathArray.splice(-2, 2)
    }

    return pathArray.join('/')
  }, [pathName])

  const defaultRoot = '/builderjs/dist/'
  const defaultMethod = 'POST'
  const defaultTags = [
    { type: 'label', tag: 'CURRENT_DATE', text: 'Date' },
    { type: 'label', tag: 'CURRENT_MONTH', text: 'Month' },
    { type: 'label', tag: 'CURRENT_YEAR', text: 'Year' },
  ]
  const defaultDisableFeatures = [
    'change_template',
    'mode_design',
    'save_close',
    'footer_exit',
    'show_app',
    'mode_tablet',
    'help',
  ]

  const loadEditor = useCallback(() => {
    setSpinning(true)

    if (isLoadedRef.current) return
    isLoadedRef.current = true

    const options = {}

    options.root = defaultRoot
    options.saveMethod = defaultMethod
    options.tags = defaultTags
    options.urlBack = defaultUrlBack
    options.disableFeatures = defaultDisableFeatures

    if (props.root) options.root = props.root
    if (props.url) options.url = props.url
    if (props.urlBack) options.urlBack = props.urlBack
    if (props.saveMethod) options.saveMethod = props.saveMethod
    if (props.tags) options.tags = [...defaultTags, ...props.tags]

    // eslint-disable-next-line no-undef
    const builder = new Editor({
      ...options,
      export: {
        url: 'export.php',
      },
      // language: 'en',
      // disableWidgets: ['TwoColumnsWidget', 'ThreeColumnsWidget'],
    })

    builder.init()

    setEditor(builder)
  }, [props.root, props.url, props.urlBack, props.saveMethod, props.tags])

  const loadDesign = useCallback(
    (design) => {
      editor.load(design)
    },
    [editor]
  )

  const saveDesign = useCallback(
    (callback) => {
      editor.save(callback)
    },
    [editor]
  )

  useEffect(() => {
    if (!editor) return

    onLoad && onLoad()

    setSpinning(false)
  }, [editor])

  useEffect(() => {
    loadStyle(styleUrl)
    loadScript(loadEditor, scriptUrl)
  }, [loadEditor, scriptUrl, styleUrl])

  useImperativeHandle(
    ref,
    () => ({
      editor,
      loadDesign,
      saveDesign,
    }),
    [editor, loadDesign, saveDesign]
  )

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        minHeight: minHeight,
      }}>
      <div id={editorId.current} style={{ ...style, flex: 1 }} />
    </div>
  )
})

EmailEditor.propTypes = {
  editorId: PropTypes.string,
  onLoad: PropTypes.func,
  scriptUrl: PropTypes.string,
  styleUrl: PropTypes.string,
  root: PropTypes.string,
  saveMethod: PropTypes.oneOf(['POST', 'GET', 'PUT', 'PATH', 'DELETE']),
  tags: PropTypes.array,
  url: PropTypes.string,
  urlBack: PropTypes.string,
  disableFeatures: PropTypes.oneOf([
    'change_template',
    'design_menu',
    'mode_design',
    'save_close',
    'footer_exit',
    'show_app',
    'mode_tablet',
    'footer',
    'help',
  ]),
}

export { EmailEditor }
