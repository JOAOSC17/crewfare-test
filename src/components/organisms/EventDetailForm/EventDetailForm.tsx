import React from 'react';
import FormRow from '../../molecules/FormRow/FormRow';
import Button from '../../atoms/Button/Button';

function EventDetailsForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className=" border-extra-thin space-y-4 p-6 rounded-lg shadow-lg ">
      <FormRow label="Link" inputType="text" placeholder="https://crewfare.com/events/event-name/" />
      <div className="flex space-x-3">
        <FormRow label="Event Address" inputType="text" />
        <FormRow label="Venue Name" inputType="text" />
      </div>
      <div className="flex space-x-3">
        <FormRow label="Featured Hotels Title" inputType="text" />
        <FormRow label="Minimum Nights" inputType="number" min="1" />
      </div>
      {/* <div className="flex justify-end">
        <Button>Save</Button>
      </div> */}
    </form>
  );
}

export default EventDetailsForm;
