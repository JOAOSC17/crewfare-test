import React from 'react';
import Header from '../../atoms/Header/Header';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import EventDateTemplate from '../../templates/EventDateTemplate/EventDatePageTemplate';

function EventDatePage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex">
      <Sidebar />
      <EventDateTemplate/>
    </div>
  );
}

export default EventDatePage;
