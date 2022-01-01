import { LocalStorageProvider } from './providers/localStorage'

export interface PartialChallengeData {
  challengeType: string
  experience: number
}

export interface ChallengeData extends PartialChallengeData {
  id: string
}

export const challengeDataAPI = {
  providers: {
    localhost: new LocalStorageProvider(),
  },

  async getChallengeData(id: string): Promise<ChallengeData> {
    const challenge = await this.providers.localhost.get(id)

    return challenge
  },

  async createChallenge(data: PartialChallengeData): Promise<ChallengeData> {
    const challenge = await this.providers.localhost.create(data)

    return challenge
  },
}
