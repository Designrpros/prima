import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

// Importing images and icons (keep your current assets here)
import VR from './Images/VR.png';
import Studio51 from './Studio51.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// CSS styling (similar to what you already have)

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #4B6079;
`;

// Full-screen introduction section
const FullScreenIntro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100%;
  background-color: #4B6079;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  grid-column: 1 / -1;
  text-align: center;
  color: #fff;
`;

const Punchline = styled.h2`
  font-size: calc(1rem + 1vw);
  grid-column: 1 / -1;
  text-align: center;
    color: #fff;
`;

const Heading = styled.h1`
  font-size: calc(2rem + 2vw);
  grid-column: 1 / -1;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 1rem 0;
  text-align: center;
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  .chevron-icon {
    font-size: 24px;
    color: #333;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

const AnimatedLogo = styled(motion.img)`
  width: 1000px; // Default size
  height: auto;

  @media (max-width: 768px) {
    width: 200px; // Smaller size on mobile devices
  }
`;


const ServicesSection = styled.div`
  background-color: #f4f4f4;
  color: #444;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 800px;
  text-align: left;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fff;
  color: #444;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Home component
const Home = () => {
  const form = useRef();

  return (
    <>
      <Helmet>
        <title>Tjenestedesign og PRIMA - AKTHE</title>
        <meta name="description" content="Tjenestedesign og PRIMA aktiviteter fra AKTHE." />
      </Helmet>

      <PageWrapper>
        <FullScreenIntro>
        <Title>PRIMA</Title>
        <Punchline>Digitale verktøy og opplevelser for eldre</Punchline>
          <AnimatedLogo src={VR} alt="VR Logo" />
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        <ServicesSection>
          <Heading>PRIMA</Heading>
          <Paragraph>Digitale verktøy og opplevelser for eldre</Paragraph>
          <List>
            <ListItem>PRIMA er et prosjekt som har som mål å forbedre livskvaliteten til eldre ved bruk av digital teknologi, spesielt VR-briller. Vi tilbyr skreddersydde opplevelser som er tilpasset den eldre brukergruppen i Bærum kommune.</ListItem>
            <ListItem>Prosjektet ledes av Studio51 under Akthe, en delvis kommunal organisasjon. Gjennom dette prosjektet vil vi utforske hvordan VR-teknologi kan bidra til å gi meningsfulle og engasjerende opplevelser for eldre, samtidig som vi tar hensyn til deres spesifikke behov.</ListItem>
            <ListItem>PRIMA vil følge en tjenestedesignprosess som går gjennom alle fasene i den doble diamanten, med utgangspunkt i intervjuer og observasjoner.</ListItem>
          </List>
        </ServicesSection>

        <ServicesSection>
          <Heading>Tjenestedesign</Heading>
          <Paragraph>Gjennom vår tilnærming til tjenestedesign sikrer vi at tjenester er skreddersydd for brukerens behov. Vi tar i bruk innsikt og samarbeid for å forbedre opplevelsen av helse og velvære.</Paragraph>
          <List>
            <ListItem><strong>Brukerorientert designprosess</strong></ListItem>
            <ListItem><strong>Iterative forbedringer basert på tilbakemeldinger</strong></ListItem>
            <ListItem><strong>Samarbeid med lokale aktører</strong></ListItem>
          </List>
        </ServicesSection>

        <ServicesSection>
          <Heading>Forskningsmetoder</Heading>
          <Paragraph>For å utvikle effektive tjenester, benytter vi et bredt spekter av forskningsmetoder for å forstå brukernes behov og kontekster.</Paragraph>
          <List>
            <ListItem><strong>Skrivebordsforskning (Desk research):</strong> Samler eksisterende informasjon og litteratur for å bygge grunnleggende kunnskap.</ListItem>
            <ListItem><strong>Sekundærforskning (Secondary research):</strong> Bruker tidligere forskningsresultater og analyser for å finne innsikt.</ListItem>
            <ListItem><strong>Autoetnografi (Autoethnography):</strong> Refleksiv praksis der designere dykker inn i egne erfaringer for å forstå brukerens perspektiver.</ListItem>
            <ListItem><strong>Deltakerobservasjon (Participant observation):</strong> Direkte observasjon av brukere i naturlige miljøer for å forstå deres atferd.</ListItem>
            <ListItem><strong>Kontekstuelle intervjuer (Contextual interviews):</strong> Intervjuer brukere i deres egne omgivelser for dypere innsikt.</ListItem>
            <ListItem><strong>Dybdeintervjuer (In-depth interviews):</strong> Utforsker detaljerte brukererfaringer gjennom strukturerte samtaler.</ListItem>
            <ListItem><strong>Fokusgrupper (Focus groups):</strong> Samler flere deltakere for diskusjon og utforsking av felles opplevelser og tanker.</ListItem>
            <ListItem><strong>Kulturelle sonderinger (Cultural probes):</strong> Lar brukere dokumentere egne erfaringer på kreative måter for dypere innsikt.</ListItem>
            <ListItem><strong>Bygge forskningsvegg (Building a research wall):</strong> Organiserer data visuelt for å identifisere mønstre og innsikt.</ListItem>
          </List>
        </ServicesSection>

        <ServicesSection>
          <Heading>Idéutvikling</Heading>
          <Paragraph>Våre idéutviklingsprosesser hjelper oss med å generere, utforske og sortere ideer basert på brukernes innsikt og behov.</Paragraph>
          <List>
            <ListItem><strong>Idémyldring (Brainstorming):</strong> Genererer en stor mengde ideer gjennom samarbeid.</ListItem>
            <ListItem><strong>Idéskriving (Brainwriting):</strong> En metode der ideer skrives ned i stedet for å bli delt muntlig, for å fremme variasjon.</ListItem>
            <ListItem><strong>Bodystorming:</strong> Utfører scenarier fysisk for å forstå brukeropplevelsen bedre.</ListItem>
            <ListItem><strong>Analogi og assosiasjon (Analogies and association):</strong> Bruker sammenligninger med andre domener for å skape innovative ideer.</ListItem>
            <ListItem><strong>Oktopusklustring (Octopus clustering):</strong> Samler og organiserer ideer etter tema eller viktighet.</ListItem>
            <ListItem><strong>Beslutningsmatrise (Decision matrix):</strong> Evaluerer ideer basert på kriterier som gjennomførbarhet og innvirkning.</ListItem>
          </List>
        </ServicesSection>

        <ServicesSection>
          <Heading>Prototyping</Heading>
          <Paragraph>Vi bruker ulike prototyping-metoder for å teste og forbedre ideene våre raskt og effektivt.</Paragraph>
          <List>
            <ListItem><strong>Utforskende prøvespill (Investigative rehearsal):</strong> Rollespill for å teste tjenester i praksis.</ListItem>
            <ListItem><strong>Papirprototyping (Paper prototyping):</strong> Lavkostnadsversjoner av digitale tjenester, som gjør det enkelt å teste interaksjoner.</ListItem>
            <ListItem><strong>Wireframing:</strong> Lager enkle skisser av digitale grensesnitt for å teste brukeropplevelser tidlig i prosessen.</ListItem>
            <ListItem><strong>Business Model Canvas:</strong> En enkel modell som hjelper med å strukturere forretningsideer og tjenesteverdi.</ListItem>
          </List>
        </ServicesSection>

        <ServicesSection>
          <Heading>Facilitering</Heading>
          <Paragraph>Vi bruker faciliteringsmetoder for å sikre et kreativt og inkluderende samarbeid mellom teammedlemmer og brukere.</Paragraph>
          <List>
            <ListItem><strong>Trebarnshjerne oppvarming (Three-brain warm-up):</strong> En kreativ oppvarmingsøvelse for å stimulere ulike tankeprosesser.</ListItem>
            <ListItem><strong>Ja, og … (Yes, and …):</strong> En teknikk som fremmer positivitet og videreutvikling av ideer i gruppesamarbeid.</ListItem>
            <ListItem><strong>Rød og grønn tilbakemelding (Red and green feedback):</strong> En enkel måte å gi tilbakemelding på, der rød betyr hva som kan forbedres, og grønn hva som fungerer godt.</ListItem>
          </List>
        </ServicesSection>

      </PageWrapper>
    </>
  );
};

export default Home;