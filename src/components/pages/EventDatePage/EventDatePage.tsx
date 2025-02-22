import React from 'react';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import EventDateTemplate from '../../templates/EventDateTemplate/EventDatePageTemplate';

function EventDatePage() {
  return (
    <div className="min-h-screen text-white flex">
      <Sidebar />
      <EventDateTemplate/>
    </div>
  );
}

export default EventDatePage;
