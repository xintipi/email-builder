'use client'

import { forwardRef, useEffect, useRef, useState, useImperativeHandle, useCallback } from 'react'

import { loadScript } from '@/lib/utils'

let lastEditorId = 0

export const EmailEditor = forwardRef((props, ref) => {
  const { onLoad, onReady, scriptUrl, minHeight = 500, style = {} } = props

  const editorId = useRef(props.editorId || `editor-${++lastEditorId}`)
  const isLoadedRef = useRef(false)

  const [editor, setEditor] = useState(null)

  const loadEditor = useCallback(() => {
    if (isLoadedRef.current) return
    isLoadedRef.current = true

    const options = props.options || {}

    if (props.projectId) options.projectId = props.projectId
    if (props.tools) options.tools = props.tools
    if (props.appearance) options.appearance = props.appearance
    if (props.locale) options.locale = props.locale

    setEditor(
      // eslint-disable-next-line no-undef
      unlayer.createEditor({
        ...options,
        id: editorId.current,
        displayMode: options.displayMode || 'email',
      })
    )
  }, [
    editorId.current,
    props.appearance,
    props.locale,
    props.options,
    props.projectId,
    props.tools,
  ])

  const addEventListener = useCallback(
    (type, callback) => {
      editor?.addEventListener(type, callback)
    },
    [editor]
  )

  const removeEventListener = useCallback(
    (type, callback) => {
      editor?.removeEventListener(type, callback)
    },
    [editor]
  )

  const registerCallback = useCallback(
    (type, callback) => {
      editor?.registerCallback(type, callback)
    },
    [editor]
  )

  const loadDesign = useCallback(
    (design) => {
      editor?.loadDesign(design)
    },
    [editor]
  )

  const saveDesign = useCallback(
    (callback) => {
      editor?.saveDesign(callback)
    },
    [editor]
  )

  const exportHtml = useCallback(
    (callback, options) => {
      editor?.exportHtml(callback, options)
    },
    [editor]
  )

  const exportImage = useCallback(
    (callback) => {
      editor?.exportImage(callback)
    },
    [editor]
  )

  const setMergeTags = useCallback(
    (mergeTags) => {
      editor?.setMergeTags(mergeTags)
    },
    [editor]
  )

  const loadBlank = useCallback(
    (options) => {
      editor?.loadBlank(options)
    },
    [editor]
  )

  useEffect(() => {
    loadScript(loadEditor, scriptUrl)
  }, [loadEditor, scriptUrl])

  useEffect(() => {
    if (!editor) return

    // All properties starting with on[Name] are registered as event listeners.
    for (const [key, value] of Object.entries(props)) {
      if (/^on/.test(key) && key !== 'onLoad' && key !== 'onReady') {
        addEventListener(key, value)
      }
    }

    // @deprecated
    onLoad && onLoad()

    if (onReady) editor.addEventListener('editor:ready', onReady)
  }, [editor, addEventListener, onLoad, onReady, props])

  useImperativeHandle(
    ref,
    () => ({
      saveDesign,
      exportHtml,
      setMergeTags,
      editor,
      loadDesign,
      registerCallback,
      addEventListener,
      loadBlank,
      exportImage,
      removeEventListener,
    }),
    [
      saveDesign,
      exportHtml,
      setMergeTags,
      editor,
      loadDesign,
      registerCallback,
      addEventListener,
      loadBlank,
      exportImage,
      removeEventListener,
    ]
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
