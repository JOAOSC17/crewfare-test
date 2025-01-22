import React from 'react';
import SidebarStep from '../../atoms/SidebarStep/SidebarStep';
import { useLocation, useSearchParams } from 'react-router';

function Sidebar() {
  const {pathname} = useLocation();
  return (
    <div className="min-h-screen bg-darker-gray p-4 w-60">
      <h2 className="text-lg text-white mb-4">Create Event</h2>
      <SidebarStep stepNumber="1" stepLabel="Basic Information" isActive={pathname === '/'} />
      <SidebarStep stepNumber="2" stepLabel="Details" isActive={pathname === '/detail'} />
      <SidebarStep stepNumber="3" stepLabel="Dates" isActive={pathname === '/dates'} />
    </div>
  );
}

export default Sidebar;
