import React, { useState } from "react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import calendarIcon from './calendarIcon.svg';
interface SelectedRangeType {
    from: Date | undefined;
    to: Date | undefined;
}
interface DatePickerType {
  selectedRangeString: string;
  selectedRange: SelectedRangeType;
  handleDateSelect: (range: DateRange | undefined) => void;
  showPicker: boolean;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
}
function DatePicker ({
  selectedRangeString = 'DD/MM/YYY - DD/MM/YYYY', 
  selectedRange, 
  handleDateSelect, 
  showPicker, 
  setShowPicker
}: DatePickerType) {
    const defaultClassNames = getDefaultClassNames();
  return (
    <div className="relative w-64">
    <button
      className="flex justify-between whitespace-nowrap bg-gray-700 items-center rounded-md px-3 py-2"
      onClick={() => setShowPicker((prev) => !prev)}
    >
      <span className="text-white">{selectedRangeString}</span>
      <img className="pl-1" src={calendarIcon} alt=""/>
    </button>

    {showPicker && (
      <div className="absolute mt-2 z-10 bg-white border border-gray-200 rounded-md shadow-lg">
        <DayPicker mode="range" 
        selected={selectedRange}
        onSelect={handleDateSelect}
        classNames={{
            today: "border-blue-500 text-blue-400",
            selected: "bg-blue-500 border-blue-500 text-white",
            root: `${defaultClassNames.root} text-gray-300 bg-gray-800 shadow-lg p-5`,
            chevron: `${defaultClassNames.chevron} fill-gray-400`,
            caption: "text-white",
            head: "text-gray-400",
            cell: "hover:bg-gray-700",
            day: "hover:bg-blue-500 hover:text-white",
            range_start: `${defaultClassNames.range_start} bg-teal-400`,
            range_middle: "bg-teal-400",
            range_end: `${defaultClassNames.range_end} bg-teal-400`,
          }}
          styles={{
            day: { color: "inherit" },
            today: { fontWeight: "bold" },
            caption: { fontWeight: "bold" }
          }}
        />
      </div>
    )}
  </div>
  );
}

export default DatePicker;
