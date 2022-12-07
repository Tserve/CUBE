import { VFC } from "react"
import styled from "styled-components"

type Props = {
  heroTitle?: string
  heroSubText?: string
  heroImageURL: string
}
export const Hero: VFC<Props> = ({
  heroTitle = "CUBE",
  heroSubText = "アウトプットしていくサイト",
  heroImageURL,
}) => (
  <StyledHero>
    <div>
      <StyledHeroTitle>{heroTitle}</StyledHeroTitle>
      <StyledHeroSubTitle>{heroSubText}</StyledHeroSubTitle>
    </div>
    <img src={heroImageURL} alt={heroTitle} />
  </StyledHero>
)

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  margin-bottom: 30px;
`

const StyledHeroTitle = styled.h1`
  font-size: 160px;
  font-weight: bold;
  font-family: "Segoe UI";
`

const StyledHeroSubTitle = styled.p`
  font-size: 27px;
`
