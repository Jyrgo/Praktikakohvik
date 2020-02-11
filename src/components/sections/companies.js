import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"
import {graphql, useStaticQuery} from "gatsby";

const Companies = () => {
    const data = useStaticQuery(graphql`
    query {
      allCompaniesJson {
        edges {
          node {
            company {
              name
              about
              image
            }
          }
        }
      }
    }

    `)
    /*
    const company = graphql`
    query {
      allCompaniesJson (
        where: {name: {_eq: "abb"}}
      ) {
        name
        about
      }
    }
    `*/

    console.log("before");
    const items = []

    data.allCompaniesJson.edges.forEach(item =>
        items.push(<Button>{item.node.company.name}</Button>)
    );
    console.log("after");

    return (
      <Container>
        <BackgroundTitle>KES ON KOHAL?</BackgroundTitle>
        <SectionTitle>Kes on kohal?</SectionTitle>
        <Flex>
          <ContainerItem>
            {items}
          </ContainerItem>
          <ContainerItem>
            
          </ContainerItem>
        </Flex>
      </Container>
    )
}

export default Companies

const StyledContainer = styled(Container)``

const ContainerItem = styled.div`
  display: flex;
  width: 48%;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
  }
`
const Button = styled.button`
  ${props => props.theme.font.normal};
  ${props => props.theme.font_size.xxsmall};
  color: ${props => props.theme.color.primary};
  line-height: 30px;
  letter-spacing: 1px;
  margin: 10px 10px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.background.white};
  padding: 0px 20px;
  border-width: 1px;
  border-radius: 15px;
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

const SectionTitle = styled.h1`
  ${props => props.theme.font_size.larger};
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 28px;
  text-align: center;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    justify-content: center;
  }
`

const BackgroundTitle = styled.h5`
  ${props => props.theme.font_size.large};
  ${props => props.theme.font.bold};
  color: ${props => props.theme.color.black.lightest};
  letter-spacing: 10px;
  opacity: 0.4;
  margin-bottom: -20px;
  text-align: center;
`