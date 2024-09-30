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

// Main Services component
const Services = () => {
  const form = useRef();

  return (
    <>
      <Helmet>
        <title>PRIMA Tjenester - AKTHE</title>
        <meta name="description" content="Oppdag tjenestene vi tilbyr gjennom PRIMA." />
      </Helmet>

      <PageWrapper>
        {/* Hero Section */}
        <FullScreenIntro>
          <Title>PRIMA Tjenester</Title>
          <Punchline>Vi forbedrer livskvaliteten til eldre</Punchline>
          <AnimatedLogo src={VR} alt="VR Logo" />
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        {/* Journey Section */}
        <JourneySection>
          {/* Text Block for Overview */}
          <TextBlock>
            <h2>Våre Tjenester</h2>
            <p>
              PRIMA og Studio 51 tilbyr en rekke skreddersydde pakker for
              eldre og eldreomsorg. Vårt fokus er på å levere innhold som er
              både meningsfullt og engasjerende.
            </p>
          </TextBlock>

          {/* Service List Block */}
          <ServicesList>
            <ServiceItem>
              <strong>Individuelt Innhold:</strong> Personlige aktiviteter og ressurser tilpasset hver enkelt beboer.
            </ServiceItem>
            <ServiceItem>
              <strong>Generelt Innhold:</strong> Et bredt spekter av aktiviteter og programmer som appellerer til en gruppe.
            </ServiceItem>
            <ServiceItem>
              <strong>Interaktivt Innhold:</strong> Engasjerende VR-opplevelser og spill for å fremme sosial interaksjon.
            </ServiceItem>
            <ServiceItem>
              <strong>Fysisk Aktivitet:</strong> Tilpassede treningsprogrammer som fremmer fysisk helse.
            </ServiceItem>
            <ServiceItem>
              <strong>Mentalt Velvære:</strong> Aktiviteter som stimulerer mental helse, som musikkterapi og kunstverksteder.
            </ServiceItem>
            <ServiceItem>
              <strong>Utdanningsprogrammer:</strong> Kurs og workshops for både beboere og omsorgspersoner.
            </ServiceItem>
            <ServiceItem>
              <strong>Digital Innholdsplattformer:</strong> Tilgang til digitale ressurser og plattformer for kommunikasjon og underholdning.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        {/* Bærum Kommune's Involvement Section */}
        <JourneySection>
          <TextBlock>
            <h2>Vår Samarbeid med Bærum Kommune</h2>
            <p>
              Vi samarbeider med Bærum kommune for å integrere våre tjenester
              i deres helse- og omsorgsprogrammer, med fokus på:
            </p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              Utvikling av innovative prosjekter som forbedrer omsorgstilbudet.
            </ServiceItem>
            <ServiceItem>
              Samarbeid med lokale organisasjoner for å styrke tjenesteleveransen.
            </ServiceItem>
            <ServiceItem>
              Deltakelse i workshops for å forbedre omsorgsmetoder og -praksis.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        {/* Service Implementation Section */}
        <JourneySection>
          <TextBlock>
            <h2>Implementering av Tjenester</h2>
            <p>
              Vår tilnærming til implementering sikrer at tjenestene er:
            </p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Skreddersydde:</strong> Tilpasset individuelle behov.
            </ServiceItem>
            <ServiceItem>
              <strong>Bærekraftige:</strong> Designet for langsiktig suksess.
            </ServiceItem>
            <ServiceItem>
              <strong>Evaluering:</strong> Kontinuerlig overvåking og tilpasning basert på tilbakemeldinger.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        {/* Conclusion Section */}
        <JourneySection>
          <TextBlock>
            <h2>Konklusjon</h2>
            <p>
              Gjennom våre tjenester ønsker vi å skape en positiv innvirkning på
              livene til eldre og deres familier. Vi tror på kraften i samarbeid og
              innovasjon for å forme fremtidens omsorg.
            </p>
          </TextBlock>
        </JourneySection>
      </PageWrapper>
    </>
  );
};

export default Services;