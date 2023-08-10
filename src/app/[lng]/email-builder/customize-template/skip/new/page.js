'use client'

import { StrictMode, useRef } from 'react'

import { EmailEditor } from '@/components/partials/email-editor'

export default function NewEditorPage() {
  const emailEditorRef = useRef(null)
  const onLoad = () => {}

  return (
    <StrictMode>
      <EmailEditor ref={emailEditorRef} onLoad={onLoad} editorId="1" />
    </StrictMode>
  )
}
