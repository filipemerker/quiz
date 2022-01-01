export interface StorageItem {
  key: string
  value: any
}

export class StorageItem {
  key: string
  value: any

  constructor(data: StorageItem) {
    this.key = data.key
    this.value = data.value
  }
}

export class LocalStorageClient {
  localStorageSupported: boolean

  constructor() {
    this.localStorageSupported =
      typeof window['localStorage'] != 'undefined' &&
      window['localStorage'] != null
  }

  // add value to storage
  add(key: string, item: any) {
    if (this.localStorageSupported) {
      localStorage.setItem(key, JSON.stringify(item))
    }
  }

  // get all values from storage (all items)
  getAllItems(): Array<StorageItem> {
    const list = new Array<StorageItem>()

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const value = localStorage.getItem(key as string)

      list.push(
        new StorageItem({
          key: key as string,
          value: value,
        })
      )
    }

    return list
  }

  // get only all values from localStorage
  getAllValues(): Array<any> {
    const list = new Array<any>()

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string
      const value = localStorage.getItem(key)

      list.push(value)
    }

    return list
  }

  // get one item by key from storage
  get(key: string): string | null {
    if (this.localStorageSupported) {
      const item = localStorage.getItem(key) as string
      return item
    } else {
      return null
    }
  }

  // remove value from storage
  remove(key: string) {
    if (this.localStorageSupported) {
      localStorage.removeItem(key)
    }
  }

  // clear storage (remove all items from it)
  clear() {
    if (this.localStorageSupported) {
      localStorage.clear()
    }
  }
}
