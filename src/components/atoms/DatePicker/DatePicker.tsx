import React from "react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
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
    <div className="relative w-full">
    <button
      className="w-full flex justify-between whitespace-nowrap bg-zinc-800 items-center rounded-md px-3 py-2"
      onClick={() => setShowPicker((prev) => !prev)}
    >
      <span className="text-white">{selectedRangeString}</span>
      <div className="pl-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z" stroke="#4FF6B1" strokeWidth="1.5"/>
<path d="M3 9H21" stroke="#4FF6B1" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M8 2L8 5" stroke="#4FF6B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2V5" stroke="#4FF6B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="15" r="1" fill="#4FF6B1"/>
<circle cx="16" cy="15" r="1" fill="#4FF6B1"/>
<circle cx="8" cy="15" r="1" fill="#4FF6B1"/>
</svg>
      </div>
    </button>

    {showPicker && (
      <div className="absolute mt-2 z-10 bg-white border border-gray-200 rounded-md shadow-lg">
        <DayPicker mode="range" 
        selected={selectedRange}
        onSelect={handleDateSelect}
        data-testid="dialog"
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
