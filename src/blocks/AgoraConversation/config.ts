import type { Block } from 'payload'
import { getAgoraId, validateAgoraIdOrUrl } from '@/utilities/agora'

export const AgoraConversation: Block = {
  slug: 'agoraConversation',
  interfaceName: 'AgoraConversationBlock',
  fields: [
    {
      name: 'conversationId',
      label: 'Conversation ID or URL',
      type: 'text',
      required: true,
      admin: {
        description:
          'Enter the conversation ID or paste the full URL (e.g., https://agoracitizen.network/feed/conversation/1O9_pQ).',
        components: {
          Field: {
            path: '@/blocks/AgoraConversation/ConversationIdComponent',
          },
        },
      },
      hooks: {
        beforeChange: [
          ({ value }) => {
            if (typeof value === 'string') {
              return getAgoraId(value)
            }
            return value
          },
        ],
      },
      validate: validateAgoraIdOrUrl,
    },
  ],
  labels: {
    singular: 'Agora Conversation',
    plural: 'Agora Conversations',
  },
}
