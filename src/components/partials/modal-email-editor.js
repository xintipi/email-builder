'use client'

import { useEffect, useMemo, useRef } from 'react'

import { EmailEditor } from '@/components/partials/email-editor'
import sample from '@/mock/sample'

export default function ModalEmailEditor({ protocol, domain }) {
  const emailEditorRef = useRef(null)

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }

  const onDesignLoad = (data) => {
    console.log(data, 'onDesignLoad')
  }

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.addEventListener('design:loaded', onDesignLoad)
    emailEditorRef.current.editor.loadDesign(sample)
  }

  const onReady = () => {
    console.log('onReady')
  }

  const customJSArray = useMemo(() => {
    return [
      protocol + '://' + domain + '/email-editor/cry/custom.js',
      protocol + '://' + domain + '/email-editor/smile/custom.js',
      protocol + '://' + domain + '/email-editor/footer/custom.js',
      protocol + '://' + domain + '/email-editor/table/custom.js',
      protocol + '://' + domain + '/email-editor/upload/custom.js',
      'https://cdn.jsdelivr.net/gh/maxt41/unlayer-tools@d874675d04fcf4942f7eef264119af8afc362f1d/LinkCaptureTool.js',
      'https://cdn.jsdelivr.net/gh/maxt41/unlayer-tools@d874675d04fcf4942f7eef264119af8afc362f1d/UnsubscribeTool.js',
    ]
  }, [protocol, domain])

  return (
    <EmailEditor
      minHeight={500}
      projectId={1}
      ref={emailEditorRef}
      onLoad={onLoad}
      options={{
        customJS: customJSArray,
      }}
    />
  )
}
