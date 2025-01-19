import React from 'react';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import EventDetailsTemplate from '../../templates/EventDetailTemplate/EventDetailTemplate';

function EventDetailsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex">
      <Sidebar />
      <EventDetailsTemplate />
    </div>
  );
}

export default EventDetailsPage;
