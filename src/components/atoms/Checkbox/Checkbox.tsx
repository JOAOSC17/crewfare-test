import React from 'react';

interface CheckboxType extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
function Checkbox({ id, label, ...rest }: CheckboxType) {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" id={id} className="h-4 w-4" {...rest} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
