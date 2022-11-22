/**
 * types
 */
import { MasterAPIType } from "../../types/MasterAPIType"
import { Data } from "./type"

/**
 * sample
 */
import { successData } from "./sampleData"
import { failureData } from "../../common"

/**
 * main
 */
export const settingsGet: MasterAPIType<"settings", Data>[] = [
  // 「設定取得 正常」パターンをコメントアウトするとエラーパターンが確認できる
  {
    title: "設定取得 正常",
    description: "設定取得に成功",
    request: {
      path: ["admin", "api", "settings"],
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
    title: "設定取得 エラー",
    description: "設定取得に失敗",
    request: {
      path: ["admin", "api", "settings"],
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
