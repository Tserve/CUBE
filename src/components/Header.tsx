import Link from "next/link"
import { VFC } from "react"
import styled from "styled-components"
import { Logo } from "./Logo"
import { Container } from "./templates/Layout/Container"

export const Header: VFC = () => (
  <StyledHeader>
    <Container large>
      <StyledHeaderFlexContainer>
        <Logo mode="colored" />
        <StyledHeaderNav>
          <StyledHeaderLinks>
            <StyledHeaderLink>
              <Link href="/">
                <a>Home</a>
              </Link>
            </StyledHeaderLink>
            <StyledHeaderLink>
              <Link href="/about">
                <a>About</a>
              </Link>
            </StyledHeaderLink>
            <StyledHeaderLink>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </StyledHeaderLink>
          </StyledHeaderLinks>
        </StyledHeaderNav>
      </StyledHeaderFlexContainer>
    </Container>
  </StyledHeader>
)

const StyledLogo = styled.a`
  background-color: #444;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 100%;
  font-size: 28px;
`

const StyledHeader = styled.header``

const StyledHeaderFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 93px;
`

const StyledHeaderLinks = styled.ul`
  display: flex;
  justify-content: space-between;
`

const StyledHeaderLink = styled.li`
  a {
    font-size: 18px;
    color: #666;
  }
`

const StyledHeaderNav = styled.nav`
  width: 215px;
  margin-right: 4%;
`
