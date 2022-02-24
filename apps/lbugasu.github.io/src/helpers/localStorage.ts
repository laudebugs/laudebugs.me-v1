export function getLocalStorageItem<T>(key: string): T | null {
  try {
    return JSON.parse(localStorage.getItem(key)) as T
  } catch (error) {
    return null
  }
}

export function setLocalStorageItem<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    return false
  }
}
