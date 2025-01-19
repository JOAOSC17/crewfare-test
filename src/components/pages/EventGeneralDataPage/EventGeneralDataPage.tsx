import React from 'react';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import EventGeneralDataTemplate from '../../templates/EventGeneralDataTemplate/EventGeneralDataTemplate';

function EventGeneralDataPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex">
      <Sidebar />
      <EventGeneralDataTemplate />
    </div>
  );
}

export default EventGeneralDataPage;
