import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

// Component imports
import Home from './components/Home';
import Services from './components/Services';
import Process from './components/Process'; // Placeholder component for the service design process
import UserJourney from './components/UserJourney.js'; // Placeholder for user journey
import Methods from './components/Methods'; // Placeholder for methods
import Kalender from './components/Kalender.js'; // Placeholder for contact information
import Kontakt from './components/Kontakt.js'; // Placeholder for contact information

import VR from './components/Images/VR.png';

const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0); /* Fully transparent background */
  color: black; /* White text */
  backdrop-filter: blur(10px);
  z-index: 1000;

  nav {
    display: flex;
    gap: 10px;
    overflow-x: auto; /* Enable horizontal scrolling on small screens */
    white-space: nowrap; /* Prevent items from wrapping to the next line */
  }

  h1 {
    margin-right: auto;
    font-size: 1.2rem;
  }

  img {
    height: 20px; /* Adjust based on your preference */
    margin-right: 10px; /* Space between the image and the title */
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    nav {
      gap: 5px;
      /* Additional styles for mobile */
      padding: 0 10px; /* Add padding to prevent items from being too close to the edges */
    }
    h1 {
      font-size: 1rem;
    }
  }
`;

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: #fff; /* White text */
  border-bottom: ${({ active }) => (active ? '2px solid black' : '2px solid transparent')};
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 2rem;

  &:hover {
    color: #333; /* Light blue on hover */
    border-bottom: 2px solid #333;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

// Styled Link Component to remove default styles
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  z-index: 2;
  &:hover {
    text-decoration: none;
  }
`;

const ToolbarLogo = () => (
  <Link to="/">
    <Logo src={VR} alt="VR Logo" />
  </Link>
);

const Logo = styled.img`
  width: auto;
  max-width: 120px;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-329ZE249M1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-329ZE249M1');
          `}
        </script>
      </Helmet>
    <Router>
      <Toolbar>
        <h1>
          <StyledLink to="/">
          <ToolbarLogo />
          </StyledLink>
        </h1>
        <nav>
          <TabButton onClick={() => handleTabClick('home')} active={activeTab === 'home'}>
            <StyledLink to="/">PRIMA</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick('services')} active={activeTab === 'services'}>
            <StyledLink to="/tjenester">Tjenester</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick('process')} active={activeTab === 'process'}>
            <StyledLink to="/prosess">Prosess</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick('userjourney')} active={activeTab === 'userjourney'}>
            <StyledLink to="/brukerreise">Brukerreise</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick('methods')} active={activeTab === 'methods'}>
            <StyledLink to="/metoder">Metoder</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick('kalender')} active={activeTab === 'kalender'}>
            <StyledLink to="/kalender">Kalender</StyledLink>
          </TabButton>
          <TabButton onClick={() => handleTabClick('kontakt')} active={activeTab === 'kontakt'}>
            <StyledLink to="/kontakt">Kontakt</StyledLink>
          </TabButton>
        </nav>
      </Toolbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tjenester" element={<Services />} />
        <Route path="/prosess" element={<Process />} />
        <Route path="/brukerreise" element={<UserJourney />} />
        <Route path="/metoder" element={<Methods />} />
        <Route path="/kalender" element={<Kalender />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;