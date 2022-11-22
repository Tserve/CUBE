import { addDecorator } from "@storybook/react"
import { RouterContext } from "next/dist/shared/lib/router-context"
import { Fragment } from "react"
import { GlobalStyle } from "../src/styles"

export const parameters = {
  actions: { argTypesRegex: "^(handle|on)[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  screenshot: {
    // Put global screenshot parameters(e.g. viewport)
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

addDecorator((storyFn) => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
))
