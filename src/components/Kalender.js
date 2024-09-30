import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Calendar from './Calendar'; // Importing the custom Calendar component
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


// Calendar Section
const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  color: #333;
`;

const CalendarTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const DateInfo = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;
`;

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
  justify-content: flex-start; /* Align content to the top */
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the top */
`;

const ServiceItem = styled.li`
  background-color: #fff;
  color: #444;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Main Kalender component
const Kalender = () => {
  const form = useRef();

  // Predefined dates from Oppdrift
  const oppdriftDates = [
    '19. juni',
    '17. september',
    '16. oktober',
    '21. november',
    '4. februar 2025',
  ];

  // New dates related to Linnelia sykehjem and testing with users
  const userTestingDates = [
    { title: 'Testing with Users', date: '2024-09-30' },
    { title: 'Testing with Users', date: '2024-10-14' },
    { title: 'Testing with Users', date: '2024-10-28' },
    { title: 'Testing with Users', date: '2024-11-11' },
    { title: 'Testing with Users', date: '2024-11-25' },
    { title: 'Testing with Users', date: '2024-12-09' },
    { title: 'Testing with Users', date: '2024-12-23' },
  ];

  const combinedEvents = [
    { title: 'Business Meeting', date: '2024-09-25' },
    { title: 'Deadline', date: '2024-09-28' },
    ...userTestingDates,
  ];

  return (
    <>
      <Helmet>
        <title>PRIMA Prosess - AKTHE</title>
        <meta name="description" content="Oppdag prosessen bak PRIMA." />
      </Helmet>

      <PageWrapper>
        {/* Hero Section */}
        <FullScreenIntro>
          <Title>Kalender</Title>
          <Punchline>Våre planlagte møter og aktiviteter</Punchline>
          <Calendar events={combinedEvents} /> {/* Custom Calendar component with events */}
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
              Vår prosess er bygget rundt den doble diamant-modellen, med fokus på
              å identifisere og løse problemer gjennom brukerundersøkelser, prototyping og iterasjon.
            </p>
          </TextBlock>

          {/* Service List Block */}
          <ServicesList>
            <ServiceItem>
              <strong>Utforskning:</strong> Vi begynner med å forstå brukerens behov gjennom dybdeintervjuer og observasjoner, inkludert <em>kulturelle undersøkelser</em>.
            </ServiceItem>
            <ServiceItem>
              <strong>Definisjon:</strong> Etter innsiktanalysen definerer vi de viktigste utfordringene ved hjelp av <em>affinitetskartlegging</em> og workshops.
            </ServiceItem>
            <ServiceItem>
              <strong>Utvikling:</strong> Gjennom idémyldring og prototyping utvikler vi løsninger, inkludert <em>wireframing</em> for rask evaluering.
            </ServiceItem>
            <ServiceItem>
              <strong>Levering:</strong> Vi tester og forbedrer den endelige løsningen med fokus på <em>brukervennlighet</em> og <em>tilgjengelighet</em>.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          <TextBlock>
            <h2>Oppdrift Samlingsplan</h2>
            <p>
              Hva tilbyr vi? Fem samlinger hvor vi hjelper ideen din ved bruk av tjenestedesign. 
              Alle samlingene gjennomføres i Ideverkstedet i Kommunegården. 
              Veiledninger mellom samlingene og mulighet for økonomisk støtte. 
              For mer informasjon, kom på Åpent Verksted hver annen torsdag (oddetallsuker) kl. 14:00-15:30.
            </p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>Samling 1 (19. juni):</strong> Introduksjon av teamene og problemstillinger.
            </ServiceItem>
            <ServiceItem>
              <strong>Samling 2 (17. september):</strong> Forskning på brukernes behov og validering av problemdefinisjoner.
            </ServiceItem>
            <ServiceItem>
              <strong>Samling 3 (16. oktober):</strong> Idémyldring og prototyping av løsninger.
            </ServiceItem>
            <ServiceItem>
              <strong>Samling 4 (21. november):</strong> Presentasjon av prototyper og tilbakemelding.
            </ServiceItem>
            <ServiceItem>
              <strong>Samling 5 (4. februar 2025):</strong> Evaluering og justering av løsninger før lansering.
            </ServiceItem>
          </ServicesList>
        </JourneySection>

        <JourneySection>
          {/* Linnelia's Meeting Plan */}
          <TextBlock>
            <h2>Linnelia sin avtaleplan</h2>
            <p>
              Testing med brukere vil foregå annenhver uke fra 30. september 2024 til 23. desember 2024. 
              Her er oversikten over møtene og deres fokusområder:
            </p>
          </TextBlock>
          <ServicesList>
            <ServiceItem>
              <strong>30. september 2024:</strong> Innledende testing med fokus på brukeropplevelse.
            </ServiceItem>
            <ServiceItem>
              <strong>14. oktober 2024:</strong> Evaluering av tilbakemeldinger fra første test.
            </ServiceItem>
            <ServiceItem>
              <strong>28. oktober 2024:</strong> Dypdykk i spesifikke funksjoner.
            </ServiceItem>
            <ServiceItem>
              <strong>11. november 2024:</strong> Test av nye funksjoner.
            </ServiceItem>
            <ServiceItem>
              <strong>25. november 2024:</strong> Tilbakemeldinger om endringer.
            </ServiceItem>
            <ServiceItem>
              <strong>9. desember 2024:</strong> Endelig testing før lansering.
            </ServiceItem>
            <ServiceItem>
              <strong>23. desember 2024:</strong> Oppsummering av testing og forberedelser til lansering.
            </ServiceItem>
          </ServicesList>
        </JourneySection>
      </PageWrapper>
    </>
  );
};

export default Kalender;