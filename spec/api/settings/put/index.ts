/**
 * types
 */
import { APIType } from "./type"

/**
 * sample
 */
import { successData } from "./sampleData"
import { failureData } from "../../common"

/**
 * main
 */
export const settingsPut: APIType[] = [
  {
    title: "設定編集 エラー",
    description: "設定編集に失敗",
    request: {
      path: ["admin", "api", "settings"],
      method: "PUT",
      body: {
        site_name: "error",
        site_logo_id: "{:site_logo_id}",
        catch_phrase: "{:catch_phrase}",
        reaction_types: "{:reaction_types.0-last}",
        can_comment: "{:can_comment}",
        article_categories: "{:article_categories.0-last}",
        first_departments: "{:first_departments.0-last}",
        second_departments: "{:second_departments.0-last}",
        third_departments: "{:third_departments.0-last}",
        positions: "{:positions.0-last}",
        job_types: "{:job_types.0-last}",
        segments: "{:segments.0-last}",
      },
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
  {
    title: "設定編集 正常",
    description: "設定編集に成功",
    request: {
      path: ["admin", "api", "settings"],
      method: "PUT",
      body: {
        site_name: "{:site_name}",
        site_logo_id: "{:site_logo_id}",
        catch_phrase: "{:catch_phrase}",
        reaction_types: "{:reaction_types.0-last}",
        can_comment: "{:can_comment}",
        article_categories: "{:article_categories.0-last}",
        first_departments: "{:first_departments.0-last}",
        second_departments: "{:second_departments.0-last}",
        third_departments: "{:third_departments.0-last}",
        positions: "{:positions.0-last}",
        job_types: "{:job_types.0-last}",
        segments: "{:segments.0-last}",
      },
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
]
