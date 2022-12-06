import Link from "next/link"
import { VFC } from "react"
import styled from "styled-components"

export const Header: VFC = () => (
  <StyledHeader>
    <Link href="/">
      <StyledLogo>
        CUBE
        {/* <img src="" alt="CUBE" /> */}
      </StyledLogo>
    </Link>

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

const StyledHeader = styled.header`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
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
`
