import type { AppProps } from "next/app"
import { Fragment } from "react"
import { GlobalStyle } from "../styles"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <GlobalStyle />
    <Component {...pageProps} />
  </Fragment>
)

export default MyApp
