import { VFC } from "react"
import styled from "styled-components"
import { COLOR } from "../styles/const"
import { Logo } from "./Logo"
import { Container } from "./templates/Layout/Container"

export const Footer: VFC = () => (
  <StyledFooter>
    <Container>
      <StyledFooterContainer>
        <Logo mode="transparent" />
        <nav>
          <StyledNavLinks>
            <StyledNavLink>
              <a href="https://twitter.com">
                <img src="/icons/twitter.svg" alt="" />
              </a>
            </StyledNavLink>
            <StyledNavLink>
              <a href="https://twitter.com">
                <img src="/icons/facebook.svg" alt="" />
              </a>
            </StyledNavLink>
            <StyledNavLink>
              <a href="https://twitter.com">
                <img src="/icons/github.svg" alt="" />
              </a>
            </StyledNavLink>
          </StyledNavLinks>
        </nav>
      </StyledFooterContainer>
    </Container>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background-color: ${COLOR.GRAY_10};
`

const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 276px;
`
const StyledNavLinks = styled.ul`
  display: flex;
`

const StyledNavLink = styled.li`
  &:not(:last-child) {
    margin-right: 36px;
  }
`
