import React from 'react';
import Input from '../../atoms/Input/Input';
interface FormRowProps {
    label: string;
    inputType: string;
    [key: string]: string;
  }
function FormRow({ label, inputType, placeholder, ...rest }: FormRowProps) {
  return (
    <div className="flex items-center space-x-4">
      <label className="w-40">{label}</label>
      <Input type={inputType} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default FormRow;
