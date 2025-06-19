import type { Block } from 'payload'

export const AgoraConversation: Block = {
  slug: 'agoraConversation',
  interfaceName: 'AgoraConversationBlock',
  fields: [
    {
      name: 'conversationId',
      label: 'Conversation ID',
      type: 'text',
      required: true,
      admin: {
        description:
          'The ID of the Agora conversation to embed. For example, for "https://agoracitizen.network/feed/conversation/1O9_pQ", the ID is "1O9_pQ".',
      },
    },
  ],
  labels: {
    singular: 'Agora Conversation',
    plural: 'Agora Conversations',
  },
}
