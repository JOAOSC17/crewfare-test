import React from 'react';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import EventGeneralDataTemplate from '../../templates/EventGeneralDataTemplate/EventGeneralDataTemplate';

function EventGeneralDataPage() {
  return (
    <div className="min-h-screen text-white flex">
      <Sidebar />
      <EventGeneralDataTemplate />
    </div>
  );
}

export default EventGeneralDataPage;
