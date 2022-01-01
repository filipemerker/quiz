import { LocalStorageClient } from './client'

export class LocalStorageProvider extends LocalStorageClient {
  create(item: any) {
    const id = crypto.randomUUID()
    const data = { id, ...item }

    this.add(id, data)

    return data
  }
  get(id: string) {
    return JSON.parse(super.get(id) as string)
  }
}
