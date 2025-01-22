import React from 'react';
import Select from '../../atoms/Select/Select';

interface FormRowSelectProps {
    label: string;
    options: string[];
    [key: string]: string[] | string;
}
function FormRowSelect({ label, options, ...rest }: FormRowSelectProps) {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label className="">{label}</label>
      <Select options={options} {...rest}/>
    </div>
  );
}

export default FormRowSelect;
