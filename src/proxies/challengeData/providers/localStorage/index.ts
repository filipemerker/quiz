import { v4 as uuidv4 } from 'uuid'
import { LocalStorageClient } from './client'

export class LocalStorageProvider extends LocalStorageClient {
  create(item: any) {
    const id = uuidv4()
    const data = { id, ...item }

    this.add(id, data)

    return data
  }
  get(id: string) {
    return JSON.parse(super.get(id) as string)
  }
}
