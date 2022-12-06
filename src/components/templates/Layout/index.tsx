import { ReactNode, VFC } from "react"
import styled from "styled-components"
import { WIDTH } from "../../../styles/const"
import { Header } from "../../Header"
import { Hero } from "../../Hero"

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => (
  <>
    <Header />
    <StyledMain>
      <Hero heroImageURL="images/cube.png" />
      {children}
    </StyledMain>
  </>
)

const StyledMain = styled.main`
  max-width: ${WIDTH.CONTAINER};
  margin: 0 auto;
`
