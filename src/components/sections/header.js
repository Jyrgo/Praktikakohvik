import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { Container } from "../global"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "svg" }, name: { eq: "office" }) {
        publicURL
      }
    }
  `)

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h4>
              10.03
            </h4>
            <h5>
              Mektory, 13.00 - 16.30
            </h5>
            <h1>
              LEIA ENDALE
              <br />
              PRAKTIKAKOHT
            </h1>
            <span>

                IT-teaduskonna kõige oodatuim praktikaseminar, kuhu tuleb üle 30 parima kohaliku ja rahvusvahelise suurfirma.
            </span>
            <a href="http://docs.google.com/forms/d/1ib56dZls3jqcHJA4UqQjKSPvjaAiIanZtEViNfTM0zU" target="_blank" rel="noopener noreferrer">
              <HeaderButton>Registreeri</HeaderButton>
            </a>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage src={data.file.publicURL} width="480" alt="man in an office" />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  padding: 160px 0 80px 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > a {
    text-decoration: none;
  }

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 13px;
    color: ${props => props.theme.color.primary};
    ${props => props.theme.font.extrabold};
    font-size: 45px;
    line-height: 56px;
    letter-spacing: 2px;
  }

  h4 {
    margin-bottom: 0px;
    font-size: 27px;
    ${props => props.theme.font.normal};
  }

  h5 {
    color: ${props => props.theme.color.secondary};
    margin-top: 4px;
    font-size: 19px;
    letter-spacing: 1px;
    ${props => props.theme.font.primary};
    margin-bottom: 45px;
  }

  span {
    display: block;
    margin-bottom: 24px;
    max-width: 350px;
    font-size: 16px;
    line-height: 26px;
    ${props => props.theme.font.quadrary};
  }  

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`

const HeaderButton = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: ${props => props.theme.color.primary};
  letter-spacing: 1px;
  height: 42px;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.background.white};
  padding: 0px 35px;
  border-width: 1px;
  border-radius: 25px;
  border-style: solid;
  border-color: ${props => props.theme.color.primary};
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const ImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
    display: none;
  }
`

const StyledImage = styled.img`
  width: 465px;
  @media (max-width: ${props => props.theme.screen.lg}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 300px;
    display: none;
  }
`
