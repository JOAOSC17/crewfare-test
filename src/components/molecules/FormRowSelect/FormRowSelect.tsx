import React from 'react';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';

interface FormRowSelectProps {
    label: string;
    options: string[];
    [key: string]: string[] | string;
}
function FormRowSelect({ label, options, ...rest }: FormRowSelectProps) {
  return (
    <div className="flex items-center space-x-4">
      <label className="w-40">{label}</label>
      <Select options={options} />
    </div>
  );
}

export default FormRowSelect;
