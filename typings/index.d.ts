interface SessionOptions {
  property: string
  store: Map | any
  getSessionKey: (ctx) => string | boolean
  ttl: number
}
type TelegrafSession = (opts: SessionOptions) => (ctx: any, next: any) => Promise<void>

const TelegrafSession: TelegrafSession

export default TelegrafSession