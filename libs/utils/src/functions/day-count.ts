export function dayCount(_date: string): string {
  const date = new Date(_date)
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = Number(date) - Number(start) + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000
  const oneDay = 1000 * 60 * 60 * 24
  return `${Math.floor(diff / oneDay)}.${date.getFullYear()}`
}
