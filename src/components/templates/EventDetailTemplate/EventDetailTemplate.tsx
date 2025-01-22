import React from 'react';
import EventDetailsForm from '../../organisms/EventDetailForm/EventDetailForm';
import ChevronGroup from '../../molecules/ChevronGroup/ChevronGroup';
import { useNavigate } from 'react-router';
import Button from '../../atoms/Button/Button';

function EventDetailsTemplate() {
  const navegate = useNavigate()
  const foward = () => {
    navegate('/dates')
  }
  const previously = () => {
    navegate('/')
  }
  return (
      <div className="flex-1 p-6">
        <h2 className="text-xl mb-4">Details</h2> 
        <EventDetailsForm />
        <ChevronGroup foward={foward} previously={previously}/>
       <div className="flex justify-end mt-9">
        <Button>Save</Button>
      </div>
    </div>
  );
}

export default EventDetailsTemplate;
