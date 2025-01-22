import React from 'react';
import EventDatesForm from '../../organisms/EventDatesForm/EventDatesForm';
import ChevronGroup from '../../molecules/ChevronGroup/ChevronGroup';
import { useNavigate } from "react-router";
import Button from '../../atoms/Button/Button';

function EventDateTemplate() {
  const navegate = useNavigate()
  const previously = () => {
    navegate('/detail')
  }
  return (
      <div className="flex-1 p-6">
      <h2 className="text-xl mb-4">Dates</h2>
      <EventDatesForm/>
      <ChevronGroup previously={previously} disabledRight/>
      <div className="flex justify-end mt-9">
        <Button>Save</Button>
      </div>
    </div>
  );
}

export default EventDateTemplate;
