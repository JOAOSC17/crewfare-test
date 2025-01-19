import React from 'react';
import SidebarStep from '../../atoms/SidebarStep/SidebarStep';

function Sidebar() {
  return (
    <div className="min-h-screen bg-zinc-950 p-4 w-60">
      <h2 className="text-lg text-white mb-4">Create Event</h2>
      <SidebarStep stepNumber="1" stepLabel="Basic Information" isActive />
      <SidebarStep stepNumber="2" stepLabel="Details" />
      <SidebarStep stepNumber="3" stepLabel="Dates" />
    </div>
  );
}

export default Sidebar;
