import React from "react"
import styled from "styled-components"

import { Section, Container, BackgroundTitle, SectionTitle } from "../global"

const Questions = () => (
  <Section id="küsimused">
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

const List = styled.ul`
  margin: 20px auto;
  li {
    ${props => props.theme.font_size.small};
    color: ${props => props.theme.color.tertiary};
    margin: 16px auto;
  }
`

const SubText = styled.p`
  text-align: center;
  color: ${props => props.theme.color.tertiary};
`
