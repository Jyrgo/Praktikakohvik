import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Questions = () => (
  <Section id="questions">
    <StyledContainer>
      <BackgroundTitle>MÕISTLIK KÜSIDA</BackgroundTitle>
      <SectionTitle>Mida küsida?</SectionTitle>
      <SubText>Enne üritusele tulemist on mõistlik ette valmistada mõned küsimused tööandjatele. Siin on mõned näited.</SubText>

      <List>
        <li>Mis oskusi on vaja, et mingile kohale kandideerida?</li>
        <li>Milliseid tehnoloogiad firmas kasutatakse?</li>
        <li>Mida oodata palga suhtes?</li>
        <li>Milline näeb välja kontori igapäev?</li>
        <li>Milline on töökoormus?</li>
        <li>Kui paindlik on tudengina tööl käimise juures graafik või koormus?</li>
        <li>Mis on ettevõttes arenemisvõimalused? Kas pakutakse mingeid lisakoolitusi?</li>
      </List>
    </StyledContainer>
  </Section>
)



export default Questions

const StyledContainer = styled(Container)``

const SectionTitle = styled.h1`
  ${props => props.theme.font_size.larger};
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 28px;
  text-align: center;
`

const List = styled.ul`
  margin: 20px auto;
  li {
    color: ${props => props.theme.color.tertiary};
    margin: 16px auto;
  }
`

const BackgroundTitle = styled.h5`
  ${props => props.theme.font_size.large};
  ${props => props.theme.font.bold};
  color: ${props => props.theme.color.black.lightest};
  letter-spacing: 10px;
  opacity: 0.4;
  margin: 0px auto -20px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const SubText = styled.p`
  text-align: center;
  color: ${props => props.theme.color.tertiary};
`

