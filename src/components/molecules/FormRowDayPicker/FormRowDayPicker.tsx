import React, { useState } from 'react';
import { DateRange } from 'react-day-picker';
import DatePicker from '../../atoms/DatePicker/DatePicker';
interface FormRowDayPickerProps {
    label: string;
    [key: string]: string;
  }
type SelectedRangeType = {
    from: Date | undefined;
    to: Date | undefined;
}
type handleDateSelectType = (range: DateRange | undefined) => void 
type DatePickerType = SelectedRangeType & handleDateSelectType
function FormRowDayPicker({ label, ...rest }: FormRowDayPickerProps) {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedRange, setSelectedRange] = useState<SelectedRangeType>({ from: undefined, to:  undefined });
  const selectedRangeString = `${
    selectedRange.from
      ? selectedRange.from.toLocaleDateString()
      : "DD/MM/YYYY"
  } - ${
    selectedRange.to ? selectedRange.to.toLocaleDateString() : "DD/MM/YYYY"
  }`;
  console.log(selectedRange)
  const handleDateSelect = (range: DateRange | undefined) => {
    setSelectedRange({
      from: range?.from,
      to: range?.to,
    });
    if(showPicker && selectedRange.from && selectedRange.to){
      setShowPicker(false)
    }
  };
  return (
    <div className="w-full flex flex-col space-y-2">
      <label className="">{label}</label>
      <DatePicker 
        selectedRangeString={selectedRangeString} 
        selectedRange={selectedRange} 
        handleDateSelect={handleDateSelect} 
        showPicker={showPicker} 
        setShowPicker={setShowPicker} />
    </div>
  );
}

export default FormRowDayPicker;
