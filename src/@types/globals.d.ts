declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly API_KEY: string
    readonly SERVICE_DOMAIN: string
  }
}
