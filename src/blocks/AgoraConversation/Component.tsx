import React from 'react'

import type { AgoraConversationBlock as AgoraConversationBlockProps } from '@/payload-types'
type Props = AgoraConversationBlockProps & {
  className?: string
}
export const AgoraConversationBlock: React.FC<Props> = ({ conversationId, className }) => {
  if (!conversationId) {
    return null
  }

  const getIdFromUrl = (url: string) => {
    try {
      if (url.includes('/')) {
        const parts = url.split('/').filter(Boolean)
        return parts[parts.length - 1]
      }
      return url
    } catch (e) {
      console.error('Error parsing conversation ID from URL:', e)
      return url
    }
  }

  const id = getIdFromUrl(conversationId)
  const src = `https://agoracitizen.network/feed/conversation/${id}`

  return (
    <div className={className}>
      <iframe
        src={src}
        style={{
          border: 'none',
          width: '100%',
          height: '800px',
        }}
        title="Agora Conversation"
        allowFullScreen
      />
    </div>
  )
}
