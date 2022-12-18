import React, { VFC } from "react"
import { Post } from "../libs/api"
import {ConvertDate}

type Props = Pick<Post, "title" | "subtitle" | "publish">
export const PostHeader: VFC<Props> = (props) => {
  const { title, subtitle, publish } = props
  return (
    <div>
      <p>{subtitle}</p>
      <h1>{title}</h1>
      {publish && (
        <div>
          <ConvertDate />
        </div>
      )}
    </div>
  )
}
