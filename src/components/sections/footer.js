import React from "react"
import styled from "styled-components"

import { Container } from "../global"
import {graphql, useStaticQuery} from "gatsby";

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      image1: file(sourceInstanceName: { eq: "png" }, name: { eq: "footer_taltech" }) {
        publicURL
      },
      image2: file(sourceInstanceName: { eq: "svg" }, name: { eq: "facebook-logo" }) {
        publicURL
      },
      image3: file(sourceInstanceName: { eq: "svg" }, name: { eq: "instagram" }) {
        publicURL
      },
      image4: file(sourceInstanceName: { eq: "svg" }, name: { eq: "ituk" }) {
        publicURL
      },
      image5: file(sourceInstanceName: { eq: "svg" }, name: { eq: "location-tag" }) {
        publicURL
      },
      image6: file(sourceInstanceName: { eq: "svg" }, name: { eq: "mail" }) {
        publicURL
      },
      image7: file(sourceInstanceName: { eq: "svg" }, name: { eq: "phone" }) {
        publicURL
      }
    }
  `);

  return (
  <FooterWrapper id="footer">
    <FooterColumnContainer>

      <FooterColumn>

        <ImageWrapper>
          <StyledImage src={data.image1.publicURL} width="250" alt="taltech logo" />
          <br />
        </ImageWrapper>

        <TalTechSpan>Tallinna Tehnikaülikooli IT-teaduskonna üliõpilaskogu</TalTechSpan>
        <SocialList>
          <li>
            <a href="https://www.facebook.com/ituk.ttu/" target="_blank">
              <SocialImage src={data.image2.publicURL} width="30" alt="facebook logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ituk.taltech/" target="_blank">
              <SocialImage src={data.image3.publicURL} width="30" alt="instagram logo" />
            </a>
          </li>
          <li>
            <a href="https://ituk.ee/" target="_blank">
              <SocialImage src={data.image4.publicURL} width="30" alt="ituk logo" />
            </a>
          </li>
        </SocialList>
      </FooterColumn>

      <ContactColumn>
        <span>Kontaktid</span>
        <div>
          <ContactImage src={data.image5.publicURL} width="30" alt="location tag" />
          <span>Mektory <br/> Raja 15, Tallinn</span>
        </div>
        <div>
          <ContactImage src={data.image6.publicURL} width="30" alt="mail svg" />
          <span>kontakt@ituk.ee</span>
        </div>
        <div>
          <ContactImage src={data.image7.publicURL} width="30" alt="phone svg" />
          <span>5383 3487</span>
        </div>
      </ContactColumn>

    </FooterColumnContainer>
    <Copyright>
      © 2020 ITÜK. All rights reserved.
    </Copyright>
  </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.tertiary};
  margin: 80px 0 0;
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
`

const Copyright = styled.span`
  font-size: 16px;
  color: ${props => props.theme.color.white.lessdark};
  margin: 30px auto;
`

const FooterColumnContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 84px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.color.white.lessdark};
  @media (max-width: ${props => props.theme.screen.xs}) {
    flex-direction: column;
  }
`

const FooterColumn = styled.div`
  max-width: 250px;
  span {
    font-size: 18px;
    ${props => props.theme.font.regular};
    color: ${props => props.theme.color.white.lessdark};
  }
  
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`

const ImageWrapper = styled.div`
  margin-bottom: 27px;
`

const StyledImage = styled.img`
  width: 250px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 200px;
  }
`

const SocialImage = styled.img`
  width: 30px;
`

const SocialList = styled.ul`
  width: 150px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 30px 0;
  padding: 0;
  color: ${props => props.theme.color.white.regular};
  li {
      margin-bottom: 12px;
      ${props => props.theme.font.normal};
      font-size: 15px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 120px;
    margin: 30px auto;
  }
`

const TalTechSpan = styled.span`
  line-height: 30px;
`

const ContactColumn = styled.div`
  width: 192px;
  span {
    font-size: 26px;
    ${props => props.theme.font.normal};
    color: ${props => props.theme.color.white.regular};
  }
  div {
    display: flex;
    width: 100%;
    margin: 20px 0;
    justify-content: space-between;
    span {
      width: 145px;
      font-size: 20px;
      ${props => props.theme.font.primary};
      color: ${props => props.theme.color.white.lessdark};  
    }
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 100%;
    text-align: center;
    div {
      width: 192px;
      margin: 20px auto;
    }
`

const ContactImage = styled.img`
  width: 30px;
`

export default Footer
