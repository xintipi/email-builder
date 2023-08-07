'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { useTranslation } from '@/app/i18n/client'
import Button from '@/components/shared/button'
import Input from '@/components/shared/input'
import yup from '@/lib/yup/customize-rules'

export default function EventForm({ lng }) {
  const { t } = useTranslation(lng, 'customize-template')
  const router = useRouter()

  const schema = yup.object().shape({
    event_id: yup
      .string()
      .label(t('event_id'))
      .required()
      .matches(/^[0-9]+$/, t('validation.event_id_not_number')),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { event_id: '' },
    resolver: yupResolver(schema),
  })

  const onSubmitEventId = (data) => {
    if (data && data.event_id) {
      router.push(`/email-builder/customize-template/${data.event_id}`)
    }
  }

  return (
    <Form className="form-group max-w-[281px]" onFinish={handleSubmit(onSubmitEventId)}>
      <Input
        name="event_id"
        label={t('event_id')}
        control={control}
        help={errors.event_id?.message}
        validateStatus={errors.event_id ? 'error' : ''}
      />

      <div className="btn-actions flex w-full items-center justify-between">
        <Link href="/email-builder/customize-template/skip">
          <Button>{t('skip')}</Button>
        </Link>

        <Button type="cloud-burst" htmlType="submit">
          {t('continue')}
        </Button>
      </div>
    </Form>
  )
}
