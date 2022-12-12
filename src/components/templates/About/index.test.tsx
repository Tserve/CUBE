import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default } = composeStories(stories)

describe("HomeTemplate", () => {
  // test script を通すためのサンプルコード
  // 必要に応じて編集・削除可能
  it("Sample page と表示されること", () => {
    render(<Default />)
    expect(screen.getByText("Sample page")).toBeVisible()
  })
})
