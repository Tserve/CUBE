import { ReactNode, VFC } from "react"
import styled from "styled-components"
import { WIDTH } from "../../../styles/const"
import { Footer } from "../../Footer"
import { Header } from "../../Header"

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => (
  <>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
)

const StyledMain = styled.main`
  max-width: ${WIDTH.CONTAINER};
  margin: 0 auto;
  padding: 0 64px;
`
