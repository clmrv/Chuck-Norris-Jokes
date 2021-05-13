export interface Jokes {
  type: string
  value: Joke[]
}

interface Joke {
  id: number
  joke: string
  category: string[]
}