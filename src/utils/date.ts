export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function isRecent(iso: string, hours = 24): boolean {
  const posted = new Date(iso).getTime()
  return Date.now() - posted < hours * 60 * 60 * 1000
}

export function preview(text: string, words = 20): string {
  const parts = text.trim().split(/\s+/)
  if (parts.length <= words) return text
  return parts.slice(0, words).join(' ') + '…'
}
