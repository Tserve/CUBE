/**
 * types
 */
import { ResponseSuccess } from "./type"

export const successData: ResponseSuccess = {
  status: "success",
  data: {
    site_name: "サイト名",
    site_logo: {
      id: "510e8400-e29b-41d4-a716-446655440000",
      url: "http://via.placeholder.com/150x150",
    },
    catch_phrase: "キャッチフレーズ",
    can_comment: true,
    reaction_types: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        label: "いいね",
        is_enabled: true,
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        label: "よくないね",
        is_enabled: false,
      },
    ],
    article_categories: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        label: "記事カテゴリ1",
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        label: "記事カテゴリ2",
      },
    ],
    first_departments: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        label: "大部署1",
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        label: "大部署2",
      },
    ],
    second_departments: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        label: "中部署1",
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        label: "中部署2",
      },
    ],
    third_departments: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        label: "小部署1",
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        label: "小部署2",
      },
    ],
    positions: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        label: "部長",
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        label: "従業員",
      },
    ],
    segments: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        label: "セグメント1",
        options: [
          {
            id: "550e8400-e29b-41d4-a716-4466525440000",
            label: "従業員",
          },
        ],
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        label: "セグメント2",
        options: [
          {
            id: "550e8400-e29b-431d4-a716-4466525440000",
            label: "従業員",
          },
        ],
      },
    ],
  },
}
