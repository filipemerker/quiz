import { LocalStorageProvider } from './providers/localStorage'

interface GameData {
  id: string
  gameType: string
  experience: number
}

export const gameDataAPI = {
  provider: new LocalStorageProvider(),

  getGameData(id: string) {
    return this.provider.get(id)
  },

  setGameData(id: string, data: GameData) {
    return this.provider.add(id, data)
  },
}
