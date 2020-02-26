import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Section, Container, BackgroundTitle, SectionTitle } from "../global"
import { graphql, useStaticQuery } from "gatsby";

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

    const items = [];
    //generate array of company names from graphql query
    data.allCompaniesJson.edges.forEach(item =>
        items.push(
            <AnchorLink href="#info" key={item.node.company.name} offset="92">
            <Button value={item.node.company.name}
            onClick={e => changeCompanyInfo(e.target.value)} >
            {item.node.company.name}
            </Button>
            </AnchorLink>
        )
    );

    let companyData = {};
    //creates an object of objects that contain the company information
    async function getCompanyData() {
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    data.allCompaniesJson.edges.forEach(item =>
                        companyData[item.node.company.name] = [item.node.company.about, item.node.company.image]
                    )
                );
            } catch (err) {
                console.log('Error parsing JSON string:', err)
            }
        })
    }

    getCompanyData();

    function changeCompanyInfo(somename) {
        nameRef.current.innerHTML = somename;
        aboutRef.current.innerHTML = companyData[somename][0];
    }

    let companyName = "Krakul OÜ";
    let companyAbout = companyData[companyName];

    const nameRef = React.createRef();
    const aboutRef = React.createRef();

    return (
      <Section id="firmad">
        <Container>
          <BackgroundTitle>KES ON KOHAL?</BackgroundTitle>
          <SectionTitle>Kes on kohal?</SectionTitle>
          <Flex>
            <ContainerItem>
                {items}
            </ContainerItem>
            <br />
            <ContainerItem id="info">
              <span ref={ nameRef }>{ companyName }</span>
              <div ref={ aboutRef }>{ companyAbout }></div>
            </ContainerItem>
          </Flex>
        </Container>
      </Section>
    )
}

export default Companies

const ContainerItem = styled.section`
  display: flex;
  width: 48%;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: start;
  span {
    text-transform: uppercase;
    color: ${props => props.theme.color.black.secondary};
    ${props => props.theme.font.primary};
    ${props => props.theme.font_size.larger};
    margin-bottom: 35px;
    @media (max-width: ${props => props.theme.screen.sm}) {
      margin-top: 35px;
      ${props => props.theme.font_size.regular};
    }
  }
  div {
    color: ${props => props.theme.color.black.secondary};
    ${props => props.theme.font.primary};
    ${props => props.theme.font_size.small};
    line-height: 30px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
    justify-content: center;
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    justify-content: center;
  }
`
