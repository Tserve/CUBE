/**
 * types
 */
import { APIType } from "./type"

/**
 * sample
 */
import { successData } from "./sampleData"
import { failureData } from "../../../common"

/**
 * main
 */
export const usersMeGet: APIType[] = [
  // 「ユーザー情報取得 正常」パターンをコメントアウトするとエラーパターンが確認できる
  {
    title: "ユーザー情報取得 正常",
    description: "ユーザー情報の取得に成功",
    request: {
      path: ["admin", "api", "users", "me"],
      method: "GET",
      body: undefined,
    },
    response: {
      status: 200,
      body: {
        status: "{:status}",
        data: "{:data}",
      },
      values: successData,
    },
  },
  {
    title: "ユーザー情報取得 エラー",
    description: "ユーザー情報の取得に失敗",
    request: {
      path: ["admin", "api", "users", "me"],
      method: "GET",
      body: undefined,
    },
    response: {
      status: 500,
      body: {
        status: "{:status}",
        error_code: "{:error_code}",
        message: "{:message}",
      },
      values: failureData,
    },
  },
]
