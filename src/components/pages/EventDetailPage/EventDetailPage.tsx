import React from 'react';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import EventDetailsTemplate from '../../templates/EventDetailTemplate/EventDetailTemplate';

function EventDetailsPage() {
  return (
    <div className="min-h-screen text-white flex">
      <Sidebar />
      <EventDetailsTemplate />
    </div>
  );
}

export default EventDetailsPage;
