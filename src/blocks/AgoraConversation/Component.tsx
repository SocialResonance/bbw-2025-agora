import React from 'react'

import type { AgoraConversationBlock as AgoraConversationBlockProps } from '@/payload-types'
type Props = AgoraConversationBlockProps & {
  className?: string
}
export const AgoraConversationBlock: React.FC<Props> = ({ conversationId, className }) => {
  if (!conversationId) {
    return null
  }

  const src = `https://agoracitizen.network/feed/conversation/${conversationId}`

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
