import React from 'react';
import FormRow from '../../molecules/FormRow/FormRow';
import DatePicker from '../../atoms/DatePicker/DatePicker';
import FormRowDayPicker from '../../molecules/FormRowDayPicker/FormRowDayPicker';
import FormRowSelect from '../../molecules/FormRowSelect/FormRowSelect';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';

function EventDatesForm () {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="border-extra-thin space-y-4 p-6 rounded-lg shadow-lg ">

      <FormRowDayPicker label="Bookable Start & End Dates"/>
      <FormRowDayPicker label="Event Start and End Dates"/>
      <div className="flex items-center space-x-2">
        <button type="button" className="text-green-400">+ Add Event Date Range</button>
      </div>

      <FormRowDayPicker label="Default Check-In & Check-Out Dates"/>

      <h3 className="text-lg mt-6 mb-4">Taxes & Fees</h3>
      <div className="flex justify-between items-center space-x-2">
      <FormRow label="Name" inputType="text" />
      <FormRow label="Amount" inputType="number" />
      <FormRowSelect label="Type" inputType="select" options={['Fixed', 'Percentage']} />
        <DeleteButton />
      </div>

      <div className="flex items-center space-x-2">
        <button type="button" className="text-green-400">+ Add New Tax/Fee</button>
      </div>

      <div className="flex justify-end">
        {/* <Button>Save</Button> */}
      </div>
    </form>
  );
}

export default EventDatesForm;
