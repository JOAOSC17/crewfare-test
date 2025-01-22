import React, { useState } from 'react';
import FormRow from '../../molecules/FormRow/FormRow';
import FormRowDayPicker from '../../molecules/FormRowDayPicker/FormRowDayPicker';
import FormRowSelect from '../../molecules/FormRowSelect/FormRowSelect';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
interface InputsTaxesFeesType {
  name: string;
  amount: number;
  type: string;
}
function EventDatesForm () {
  const [inputsDate, setInputsDate] = useState<number[]>([])
  const [inputsTaxesFees, setInputsTaxesFees] = useState<InputsTaxesFeesType[]>([{ name: '', amount: 0, type: ''}])
  const handleAddInput = () => {
    const inputListValue = inputsDate.length === 0 ? 0 : inputsDate[inputsDate.length - 1]
    setInputsDate([...inputsDate, inputListValue + 1]);
  };
  const handleAddInputTaxesFees = () => {
    setInputsTaxesFees([...inputsTaxesFees, { name: '', amount: 0, type: ''}]);
  };
  const handleDeleteInputTaxesFees = (index: number) => {
    const newArray = [...inputsTaxesFees];
    newArray.splice(index, 1);
    setInputsTaxesFees(newArray);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="border-extra-thin space-y-4 p-6 rounded-lg shadow-lg ">

      <FormRowDayPicker label="Bookable Start & End Dates"/>
      <FormRowDayPicker label="Event Start and End Dates"/>
      {inputsDate.map((item, index) => 
        <FormRowDayPicker label="Start and End Dates" key={String(index)} />
      )}
      <div className="flex items-center space-x-2">
        <button type="button" onClick={handleAddInput} className="text-green-400">+ Add Event Date Range</button>
      </div>

      <FormRowDayPicker label="Default Check-In & Check-Out Dates"/>

      <h3 className="text-lg mt-6 mb-4">Taxes & Fees</h3>
      {inputsTaxesFees.map((item, index) => 
      <div className="flex justify-between items-center space-x-2" key={index}>
        <FormRow label="Name" inputType="text" />
        <FormRow label="Amount" inputType="number" />
        <FormRowSelect label="Type" inputType="select" options={['Fixed', 'Percentage']} />
        <DeleteButton onClick={() => handleDeleteInputTaxesFees(index)}/>
      </div>
      )}

      <div className="flex items-center space-x-2">
        <button type="button" onClick={handleAddInputTaxesFees} className="text-green-400">+ Add New Tax/Fee</button>
      </div>

      <div className="flex justify-end">
        {/* <Button>Save</Button> */}
      </div>
    </form>
  );
}

export default EventDatesForm;
