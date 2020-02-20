import React from "react"
import styled from "styled-components"

import { Container, Section, BackgroundTitle, SectionTitle } from "../global"

const About = () => (
  <Section id="üritusest">
    <Container>
      <BackgroundTitle>ÜRITUSEST</BackgroundTitle>
      <SectionTitle>Üritusest</SectionTitle>
      <Info>
      <p>Oled otsimas oma unistuste praktikakohta, kuid pole veel leidnud seda õiget firmat? Vajad hoopis näpunäiteid, kuidas valitud praktikakoht kindlasti endale saada?</p>
      <p>Praktikakohvik tuleb sulle appi!</p>
      <p>Kohvile tulevad üle 30ne parima kohaliku ja rahvusvahelise firma. Tegemist ei ole tavalise messilaadse üritusega, kus jagatakse visiitkaarte. Firmadest tulevad kohale spetsialistid, et tudengitega maha istuda ja vastata nende küsimustele.</p>
      <p>Oodatud on kõik tudengid, olenemata kogemusest.</p>
      ~~
      <p>Praktikakohvikul saad infomaterjali, kus on välja toodud firmade tutvustused, CV koostamise nõuanded ja info kandideerimise kohta. Kirjuta vihikusse küsimused juba ette, ning tee vestluse jooksul olulisi märkmeid, et kandideerimisel läheks kõik sujuvalt.</p>
      </Info>
    </Container>
  </Section>
)

export default About

const Info = styled.div`
  ${props => props.theme.font_size.small}

  margin: 20px auto;
  text-align: center;
  color: ${props => props.theme.color.tertiary};

  @media (min-width: ${props => props.theme.screen.md}) {
    padding: 0px 100px;
`
