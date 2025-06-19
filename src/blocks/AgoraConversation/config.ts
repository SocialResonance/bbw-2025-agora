import type { Block } from 'payload'

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
      },
    },
  ],
  labels: {
    singular: 'Agora Conversation',
    plural: 'Agora Conversations',
  },
}
