const strictIdPattern = /^[a-zA-Z0-9_-]{6}$/
const permissiveIdPattern = /^[a-zA-Z0-9_-]+$/

export const getAgoraId = (urlOrId: string): string => {
  if (typeof urlOrId === 'string' && urlOrId.includes('/')) {
    try {
      const urlObject = new URL(urlOrId)
      if (
        urlObject.hostname === 'agoracitizen.network' &&
        urlObject.pathname.includes('/conversation/')
      ) {
        const parts = urlObject.pathname.split('/')
        return parts.pop() || urlOrId
      }
    } catch (e) {
      return urlOrId
    }
  }
  return urlOrId
}

export const validateAgoraIdOrUrl = (value: string | null | undefined): string | true => {
  if (!value) return 'Conversation ID is required.'

  // Case 1: Value is a URL-like string (contains . or /)
  if (value.includes('.') || value.includes('/')) {
    let isValidUrl = false
    if (value.startsWith('https://')) {
      try {
        const urlObject = new URL(value)
        const idFromUrl = getAgoraId(value)
        isValidUrl =
          urlObject.hostname === 'agoracitizen.network' &&
          urlObject.pathname.startsWith('/feed/conversation/') &&
          permissiveIdPattern.test(idFromUrl) && // use permissive pattern for URL part
          idFromUrl !== value
      } catch (e) {
        isValidUrl = false
      }
    }
    return isValidUrl ? true : 'The URL provided is not a valid Agora Conversation URL.'
  }

  // Case 2: Value is a standalone ID
  const isStrictId = strictIdPattern.test(value)
  return isStrictId ? true : 'Please provide a valid 6-character Agora ID or the full URL.'
}
