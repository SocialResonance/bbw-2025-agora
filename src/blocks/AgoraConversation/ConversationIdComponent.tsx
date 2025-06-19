'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { TextInput, useField, FieldLabel, FieldError } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'
import { validateAgoraIdOrUrl } from '@/utilities/agora'

type Props = TextFieldClientProps

export const ConversationIdComponent: React.FC<Props> = ({ path, field }) => {
  const { value, setValue } = useField<string>({ path: path || field.name })
  const [error, setError] = useState<string | undefined>()

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      setValue(inputValue)
      const validationResult = validateAgoraIdOrUrl(inputValue)
      if (typeof validationResult === 'string') {
        setError(validationResult)
      } else {
        setError(undefined)
      }
    },
    [setValue],
  )

  useEffect(() => {
    // Set initial error state
    const validationResult = validateAgoraIdOrUrl(value)
    if (typeof validationResult === 'string') {
      setError(validationResult)
    } else {
      setError(undefined)
    }
  }, [value])

  return (
    <div>
      <FieldLabel htmlFor={`field-${path}`} label={field.label} />
      <TextInput path={path || field.name} value={value || ''} onChange={handleInputChange} />
      {error && (
        <div
          style={{
            color: 'rgb(250, 60, 75)',
            marginTop: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          {error}
        </div>
      )}
    </div>
  )
}

export default ConversationIdComponent
