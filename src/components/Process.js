import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Importing images and icons
import VR from './Images/VR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// CSS styling
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #4B6079;
`;

// Full-screen introduction section
const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #4B6079;
  padding: 2rem;
  color: #fff;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  text-align: center;
  color: #fff;
`;

const Punchline = styled.h2`
  font-size: calc(1rem + 1vw);
  text-align: center;
  color: #fff;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: calc(1rem + 1.5vw); /* Adjust font size on mobile */
  }
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  .chevron-icon {
    font-size: 24px;
    color: #fff; /* White chevron */
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

const AnimatedLogo = styled(motion.img)`
  width: 800px;
  height: auto;

  @media (max-width: 768px) {
    width: 150px; /* Smaller size on mobile devices */
  }
`;

// Journey Section for services
const JourneySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem;
  background-color: #f4f4f4;
  color: #333;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns on mobile */
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns content at the top */
  padding: 1rem;

  h2 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #555;
  }
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex; /* Use flexbox for consistent alignment */
  flex-direction: column; /* Stack the service items vertically */
  justify-content: flex-start; /* Aligns items at the top */
`;

const TextBlockWhite = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  gap: 2rem;
  padding: 2rem;
  padding-left: 5rem;
  color: #f4f4f4;

  h1 {
    font-size: 3rem;
    color: #f4f4f4;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns on mobile */
  }
`;

const ServiceItem = styled.li`
  background-color: #fff;
  color: #444;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Main Prosess component
const Prosess = () => {
  const form = useRef();

  return (
    <>
      <Helmet>
        <title>PRIMA Prosess - AKTHE</title>
        <meta name="description" content="Oppdag prosessen bak PRIMA." />
      </Helmet>

      <PageWrapper>
        {/* Hero Section */}
        <FullScreenIntro>
          <Title>PRIMA Prosess</Title>
          <Punchline>Stegene vi tar for å skape en bedre fremtid</Punchline>
          <AnimatedLogo src={VR} alt="VR Logo" />
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        {/* Journey Section */}
        <JourneySection>
          {/* Text Block for Overview */}
          <TextBlock>
            <h2>Prosessen Bak PRIMA</h2>
            <p>
              Vår prosess er strukturert rundt den doble diamant-modellen, med
              et fokus på å identifisere og løse problemer gjennom grundig
              brukerundersøkelse, prototyping og iterasjon.
            </p>
          </TextBlock>

          {/* Service List Block */}
          <ServicesList>
            <ServiceItem>
              <strong>Utforskning:</strong> Vi starter med å forstå brukerens
              behov gjennom dyptgående intervjuer og observasjon. Vi bruker metoder som
              <em>kulturelle undersøkelser</em> for å dykke inn i eldres liv og erfaringer.
            </ServiceItem>
            <ServiceItem>
              <strong>Definisjon:</strong> Etter innsiktanalysen definerer vi
              hovedutfordringene som skal løses, ved hjelp av verktøy som
              <em>affinitetskartlegging</em> og workshops for problemdifinisjon.
            </ServiceItem>
            <ServiceItem>
              <strong>Utvikling:</strong> Gjennom idémyldring og prototyping
              skaper vi flere løsninger, inkludert <em>wireframing</em> og
              <em>papirprototyping</em> for rask evaluering.
            </ServiceItem>
            <ServiceItem>
              <strong>Levering:</strong> Vi tester, forbedrer og leverer
              skreddersydde løsninger for brukeren, med fokus på kontinuerlig
              tilbakemelding og brukerinnsikt.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        {/* Bærum Kommune's Involvement Section */}
        <JourneySection>
          <TextBlock>
            <h2>Bærum Kommune's Involvering</h2>
            <p>
              PRIMA vil bli integrert i Bærum kommune’s innovasjonsrammeverk gjennom
              <strong>Oppdrift</strong>-programmet, som tilbyr:
            </p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              5 samlinger med eksperter innen tjenestedesign, fokusert på å raffinere PRIMA-konseptet.
            </ServiceItem>
            <ServiceItem>
              Økonomisk støtte for utvalgte ideer som samsvarer med Bærums mål.
            </ServiceItem>
            <ServiceItem>
              Muligheter til å presentere prosjektet for andre tjenester i kommunen, for å fremme potensiell skala av løsninger.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        {/* Oppdrift Session Timeline Section */}
        <JourneySection>
          <TextBlock>
            <h2>Oppdrift Samlingsplan</h2>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Samling 1 (19. juni):</strong> Introduksjon av teamene, definisjon av problemstillinger og utforsking av innovasjonsmetoder.
            </ServiceItem>
            <ServiceItem>
              <strong>Samling 2 (17. september):</strong> Forskning på brukernes behov og validering av kjernespørsmålene.
            </ServiceItem>
            <ServiceItem>
              <strong>Samling 3 (16. oktober):</strong> Idégenerering for nye løsninger basert på brukerinnsikt.
            </ServiceItem>
            <ServiceItem>
              <strong>Samling 4 (21. november):</strong> Testing og evaluering av løsninger mot problemene.
            </ServiceItem>
            <ServiceItem>
              <strong>Samling 5 (4. februar 2025):</strong> Gjennomgang av prosjektfremdrift, deling av innsikter og evaluering av programmet.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        {/* PRIMA's Journey Overview Section */}
        <JourneySection>
          <TextBlock>
            <h2>PRIMA's Reiseoversikt</h2>
            <p>
              PRIMA’s reise er strukturert for å følge en brukersentrert tilnærming, 
              ledet av den doble diamant-designmodellen. Denne prosessen sikrer at 
              hver fase, fra oppdagelse til levering, dreier seg om behovene og 
              erfaringene til eldre, omsorgspersoner og andre interessenter involvert i eldreomsorgen.
            </p>
          </TextBlock>
        </JourneySection>

        {/* Detailed Process Plan Section */}

        <TextBlockWhite>
            <h1>Detaljert Prosessplan</h1>
        </TextBlockWhite>

<JourneySection>
  <TextBlock>
    <h2>1. Oppdagelsesfase (Utforskning)</h2>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Mål:</strong> Forstå problemer, behov og emosjonelle tilstander hos eldre og omsorgspersoner.
    </ServiceItem>
    <ServiceItem>
      <strong>Verktøy:</strong>
      <ul>
        <li>Inngående intervjuer med eldre brukere og omsorgspersoner.</li>
        <li>Observasjonsstudier av hverdagslivet til eldre.</li>
        <li>Bruk av kulturelle undersøkelser for dyptgående innsikt.</li>
        <li>Spørreundersøkelser for å samle kvantitative data.</li>
        <li>Fokusgrupper for å diskutere utfordringer i fellesskap.</li>
      </ul>
    </ServiceItem>
    <ServiceItem>
      <strong>Utfall:</strong> Identifiserte behov og utfordringer hos brukerne.
    </ServiceItem>
    <ServiceItem>
      <strong>Dokumentasjon:</strong> Samle og analysere funnene fra intervjuer og observasjoner.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>2. Definisjonsfase (Definisjon)</h2>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Mål:</strong> Klargjøre hovedutfordringene som påvirker eldre og omsorgspersoner.
    </ServiceItem>
    <ServiceItem>
      <strong>Verktøy:</strong>
      <ul>
        <li>Affinitetskartlegging for å sortere og organisere innsiktene.</li>
        <li>Workshops for problemdifinisjon, involverer interessenter.</li>
        <li>Personas og brukerreiser for å visualisere brukerens opplevelser.</li>
        <li>SWOT-analyse for å evaluere styrker, svakheter, muligheter og trusler.</li>
        <li>Strategisk kartlegging for å identifisere viktige fokusområder.</li>
      </ul>
    </ServiceItem>
    <ServiceItem>
      <strong>Utfall:</strong> Klart definerte utfordringer og brukerbehov.
    </ServiceItem>
    <ServiceItem>
      <strong>Dokumentasjon:</strong> Utvikle en rapport med definerte problemstillinger.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>3. Idégenereringsfase (Utvikling)</h2>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Mål:</strong> Utvikle innovative løsninger for de identifiserte problemene.
    </ServiceItem>
    <ServiceItem>
      <strong>Verktøy:</strong>
      <ul>
        <li>Idémyldring workshops for å generere kreative løsninger.</li>
        <li>Prototyping ved hjelp av både digitale og fysiske verktøy.</li>
        <li>Wireframing for å lage en visuell representasjon av løsningene.</li>
        <li>Kreativ problemløsningsteknikker som "Crazy Eights".</li>
        <li>Storyboarding for å visualisere brukeropplevelser.</li>
      </ul>
    </ServiceItem>
    <ServiceItem>
      <strong>Utfall:</strong> En rekke mulige løsninger for videre evaluering.
    </ServiceItem>
    <ServiceItem>
      <strong>Dokumentasjon:</strong> Opprettelse av et løsningsbibliotek for videre referanse.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>4. Testfase (Testing)</h2>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Mål:</strong> Validering av løsninger og tilpasning basert på tilbakemelding.
    </ServiceItem>
    <ServiceItem>
      <strong>Verktøy:</strong>
      <ul>
        <li>Brukertesting av prototyper for å få direkte tilbakemelding.</li>
        <li>Iterativ designprosess for kontinuerlig forbedring.</li>
        <li>Feedback-sesjoner med brukere og interessenter for å refinere løsninger.</li>
        <li>A/B-testing av alternative løsninger for å vurdere effektivitet.</li>
        <li>Analyser av brukerinteraksjon for å identifisere forbedringsområder.</li>
      </ul>
    </ServiceItem>
    <ServiceItem>
      <strong>Utfall:</strong> Bekreftede løsninger som møter brukernes behov.
    </ServiceItem>
    <ServiceItem>
      <strong>Dokumentasjon:</strong> Opprettelse av testprotokoller og tilbakemeldingsrapporter.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>5. Leveringsfase (Implementering)</h2>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Mål:</strong> Implementering av den endelige løsningen i Bærum kommune.
    </ServiceItem>
    <ServiceItem>
      <strong>Verktøy:</strong>
      <ul>
        <li>Utvikling av en implementeringsstrategi i samarbeid med kommunen.</li>
        <li>Opplæring og støtte for omsorgspersoner og brukere.</li>
        <li>Oppretting av evalueringsmetoder for å overvåke løsningens effektivitet.</li>
        <li>Utvikling av kommunikasjonstiltak for å informere interessenter.</li>
        <li>Ressursallokering for å sikre vellykket implementering.</li>
      </ul>
    </ServiceItem>
    <ServiceItem>
      <strong>Utfall:</strong> Fullført implementering av løsningen med positiv respons fra brukerne.
    </ServiceItem>
    <ServiceItem>
      <strong>Dokumentasjon:</strong> Rapportering om implementeringsprosessen og evaluering av oppnådde mål.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>6. Evaluering (Kontinuerlig forbedring)</h2>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Mål:</strong> Sikre langvarig suksess og justering av løsninger etter behov.
    </ServiceItem>
    <ServiceItem>
      <strong>Verktøy:</strong>
      <ul>
        <li>Regelmessige evalueringer og tilbakemeldinger fra brukere og interessenter.</li>
        <li>Oppdatering av tjenester basert på evalueringene.</li>
        <li>Langsiktig oppfølging for å sikre at løsningene forblir relevante.</li>
        <li>Kvalitetskontroll for å overvåke tjenesteleveransen.</li>
        <li>Dataanalyse for å evaluere effekt og brukeropplevelse.</li>
      </ul>
    </ServiceItem>
    <ServiceItem>
      <strong>Utfall:</strong> Kontinuerlig forbedring av tjenestene basert på brukerinnsikt.
    </ServiceItem>
    <ServiceItem>
      <strong>Dokumentasjon:</strong> Utvikling av evalueringsrapporter for fremtidig referanse.
    </ServiceItem>
  </ServicesList>
</JourneySection>

<JourneySection>
  <TextBlock>
    <h2>7. Konklusjon</h2>
  </TextBlock>
  <ServicesList>
    <ServiceItem>
      <strong>Mål:</strong> Oppsummere prosessen og trekke lærdommer for fremtidige prosjekter.
    </ServiceItem>
    <ServiceItem>
      <strong>Verktøy:</strong>
      <ul>
        <li>Analyse av samlet data og erfaringer fra hele prosessen.</li>
        <li>Dokumentere anbefalinger for forbedringer i fremtidige prosjekter.</li>
        <li>Arrangere en avslutningsworkshop med interessenter for å diskutere lærdommer.</li>
      </ul>
    </ServiceItem>
    <ServiceItem>
      <strong>Utfall:</strong> En klar oppsummering av erfaringene fra prosjektet.
    </ServiceItem>
    <ServiceItem>
      <strong>Dokumentasjon:</strong> Utvikling av en sluttrapport som oppsummerer funn, resultater og anbefalinger.
    </ServiceItem>
  </ServicesList>
</JourneySection>
      </PageWrapper>
    </>
  );
};

export default Prosess;