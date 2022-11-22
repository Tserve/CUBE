/**
 * types
 */
import { ResponseSuccess } from "../../types/MasterAPIType"
import { Data } from "./type"

export const successData: ResponseSuccess<Data> = {
  data: {
    site_name: "ビットエー",
    site_logo: {
      id: "8e912d9-311b-4ef4-bea2-f137d1da88fe",
      url: "https://dummyimage.com/150x50/000/fff&text=bitA",
    },
    catch_phrase: "キャッチフレーズ",
    reaction_types: [
      {
        id: "892e91d9-311b-4ef4-bea2-f137d1da88fe",
        label: "いいね",
        is_enabled: true,
      },
      {
        id: "892e91d9-311b-4ef4-bea2-f122d1da88fe",
        label: "もっと知りたい",
        is_enabled: true,
      },
    ],
    can_comment: true,
    article_categories: [
      {
        id: "e76f7734-7508-4653-a598-ded9e0830344",
        label: "インタビュー",
      },
    ],
    first_departments: [
      {
        id: "892e91d9-311b-4ef4-bea2-f2137d1da88fe",
        label: "いいね",
      },
    ],
    second_departments: [
      {
        id: "892e91d9-311b-4ef4-bea2-f2137d1da88fe",
        label: "いいね",
      },
    ],
    third_departments: [
      {
        id: "892e91d9-311b-4ef4-bea2-f237d1da88fe",
        label: "いいね",
      },
    ],
    positions: [
      {
        id: "75299fbc-59ef-41cd-bf1b-1d20ce1e993f",
        label: "役職名",
      },
    ],
    job_types: [
      {
        id: "75299fbc-59ef-41cd-bf1b-3d20ce1e993f",
        label: "役職名",
      },
    ],
    segments: [
      {
        id: "e8d7947c-3846-40e9-a586-52af2133db0c",
        label: "入社区分",
        options: [
          {
            id: "66d1433b-54dc-4f8f-9105-a1af3ccd30cd",
            label: "新卒",
          },
        ],
      },
    ],
  },
  status: "success",
}
