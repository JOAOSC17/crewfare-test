import React, { SelectHTMLAttributes } from 'react';
interface SelectType extends SelectHTMLAttributes<HTMLSelectElement>{
    options: string[];
}
function Select({ options, className, ...rest }: SelectType) {
  return (
    <select className={`w-full bg-zinc-800 p-2 rounded-md ${className}`} {...rest}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
