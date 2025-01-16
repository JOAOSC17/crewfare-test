import React, { SelectHTMLAttributes } from 'react';
interface SelectType extends SelectHTMLAttributes<HTMLSelectElement>{
    options: string[];
}
function Select({ options, className }: SelectType) {
  return (
    <select className={`w-full bg-gray-700 p-2 rounded-md ${className}`}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
