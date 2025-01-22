import React from 'react';
import EventForm from '../../organisms/EventForm/EventForm';
import ChevronGroup from '../../molecules/ChevronGroup/ChevronGroup';
import { useNavigate } from 'react-router';
import Button from '../../atoms/Button/Button';

function EventGeneralDataTemplate() {
  const navegate = useNavigate()
  const foward = () => {
    navegate('/detail')
  }
  return (
      <div className="flex-1 p-6">
        <h1 className="text-xl mb-4">Create Event</h1>
        <EventForm />
        <ChevronGroup foward={foward} disabledLeft/>
       <div className="flex justify-end mt-9">
        <Button>Save</Button>
      </div>
    </div>
  );
}

export default EventGeneralDataTemplate;
