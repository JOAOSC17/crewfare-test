import React from 'react';
import BannerUploader from '../../molecules/BannerUploader/BannerUploader';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Button from '../../atoms/Button/Button';
import FormRow from '../../molecules/FormRow/FormRow';
import FormRowSelect from '../../molecules/FormRowSelect/FormRowSelect';

function EventForm() {
  return (
    <div className=" border-extra-thin p-6 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div className="flex justify-between space-x-3">
        <FormRowSelect label='Event Type' options={['Public Event', 'Private Event']}/>
        <FormRow inputType='text'label='Event Name' placeholder='Event Name' />
        </div>
        <BannerUploader />
        <Checkbox id="overlayTitle" label="Overlay Title on Banner" />
        <div className="flex justify-end">
        {/* <Button>Save</Button> */}
        </div>
      </div>
    </div>
  );
}

export default EventForm;
