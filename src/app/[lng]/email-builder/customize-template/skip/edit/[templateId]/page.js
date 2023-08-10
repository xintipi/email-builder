'use client'

import { useRef } from 'react'

import { EmailEditor } from '@/components/partials/email-editor'
import { useGlobalStore } from '@/stores/global.store'

export default function EditEditorPage() {
  const emailEditorRef = useRef(null)
  const { selectedTemplate } = useGlobalStore()

  const onLoad = () => {
    if (selectedTemplate) {
      emailEditorRef.current.loadDesign(selectedTemplate.template)
    }
  }

  return <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
}
