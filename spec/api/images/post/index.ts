/**
 * types
 */
import { APIType } from "./type"

/**
 * sample
 */
import { successData, failureData } from "./sampleData"

/**
 * main
 */
export const articlesImagesPost: APIType[] = [
  // 「画像登録 正常」パターンをコメントアウトするとエラーパターンが確認できる
  {
    title: "画像登録 正常",
    description: "画像の登録に成功",
    request: {
      path: ["admin", "api", "images"],
      method: "POST",
      headers: {},
      body: {},
    },
    response: {
      status: 200,
      body: {
        file: "{:file}",
        success: "{:success}",
      },
      values: successData,
    },
  },
  {
    title: "画像登録 エラー",
    description: "画像の登録に失敗",
    request: {
      path: ["admin", "api", "images"],
      method: "POST",
      headers: {},
      body: {},
    },
    response: {
      status: 500,
      body: {
        success: "{:success}",
      },
      values: failureData,
    },
  },
]
