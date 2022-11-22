/**
 * node_modules
 */
import { Placeholder } from "@agreed/typed"

/**
 * ============================== type converter ==============================
 */

/**
 * @typedef AgreedConverter
 * @description レスポンス型を string に変換し、レスポンスボディを {:value} 形式で書けるようにする
 */
export type AgreedConverter<T> = {
  [K in keyof T]: Placeholder<T[K]> | AgreedConverter<T[K]>
}

/**
 * ============================== union type ==============================
 */

/**
 * @typedef Status
 * @description レスポンスのステータス値
 */
type Status = "success" | "failure"

/**
 * @typedef Period
 * @description 固定の集計期間
 */
type Period = "7" | "14" | "28" | "90" | "180"

/**
 * @typedef AnalysisType
 * @description 分析区分
 */
type AnalysisType =
  | "article_category"
  | "analysis_category"
  | "department"
  | "position"
  | "job_type"
  | "segment"

/**
 * @typedef Order
 * @description 昇順 / 降順
 */
export type Order = "asc" | "desc"

/**
 * ============================== common types ==============================
 */

/**
 * @typedef ResponseStatusSuccess
 * @description レスポンス正常パターンの時の成功ステータス
 * @property status 処理成功
 */
export type ResponseStatusSuccess = {
  status: Extract<Status, "success">
}

/**
 * @typedef ResponseStatus
 * @description レスポンス失敗パターンの時の失敗ステータス
 * @property status 処理失敗
 */
export type ResponseStatusFailure = {
  status: Extract<Status, "failure">
}

/**
 * @typedef UniversalRecord
 * @description id, label のキーを持つオブジェクト
 */
export type UniversalRecord = Record<"id" | "label", string>

/**
 * @typedef Statistic
 * @description データの統計情報
 * @property value - 値
 * @property prev_value - 前期間の値
 * @property diff - 前期間との差分
 */
export type Statistic = Record<"value" | "prev_value" | "diff", number>

/**
 * @typedef StatisticWithoutPrevValue
 * @description prev_value を覗いた統計情報
 */
export type StatisticWithoutPrevValue = Omit<Statistic, "prev_value">

/**
 * @typedef AggregationPeriod
 * @description 集計期間を持つ型
 * @property aggregation_period - 集計期間
 */
export type AggregationPeriod = {
  aggregation_period: Period
}

/**
 * @typedef ReactionType
 * @description リアクションタイプ
 * @property type - like | more
 */
export type ReactionType = Record<"type", "like" | "more">

/**
 * @typedef AnalysisTypeQuery
 * @description 分析区分を持つクエリ
 * @property analysis_type - 分析区分
 */
export type AnalysisTypeQuery = {
  analysis_type: AnalysisType
}

/**
 * @typedef Reaction
 * @description リアクション
 * @property id - リアクションタイプID
 * @property label - リアクション名
 * @property count - リアクション数
 */
export type Reaction = {
  id: string
  label: string
  count: number
}

/**
 * @typedef Header
 * @description テーブルヘッダー
 * @property type - カラムタイプ
 * @property reaction_type_id - リアクションタイプID（リアクションのみ）
 * @property label - カラム名
 * @property can_sort - ソート可能フラグ
 * @property order_by - ソート順
 */
export type Header = {
  type: string
  reaction_type_id?: string
  label: string
  can_sort: boolean
  order_by: "asc" | "desc" | ""
}

/**
 * ============================== response types ==============================
 */

/**
 * @typedef ResponseError
 * @description エラーパターンのレスポンス
 * @property error_code - エラーコード
 */
export type ResponseError = ResponseStatusFailure & {
  error_code: string
  message: string
}

/**
 * ============================== utility types ==============================
 */

/**
 * @typedef
 * @description 汎用オブジェクト
 */
export type AnyObject = Record<string, unknown>

/**
 * @typedef
 * @description 空オブジェクト
 */
export type EmptyObject = Record<never, never>

export type OptionForPullDown =
  | {
      list: UniversalRecord[]
      child_options: OptionForPullDown
    }
  | Record<string, never>
