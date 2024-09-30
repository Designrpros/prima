// src/components/Calendar.js
import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react'; // The main FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // For day grid view

const Content = styled.div`
  width: 100%;
  max-width: 800px; /* Adjusted width for a more compact calendar */
  height: 500px; /* Adjusted height for better balance */
  background-color: #f9f9f9;
  color: #4B6079;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Prevent overflow */
`;

const Padding = styled.div`
  padding: 20px;
  height: 100%; /* Ensure padding fills the container */
`;

const Calendar = ({ events }) => {
  return (
    <Content>
      <Padding>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          editable={false}
          selectable={false}
          height="100%" // Ensures calendar fits the container height
        />
      </Padding>
    </Content>
  );
};

export default Calendar;