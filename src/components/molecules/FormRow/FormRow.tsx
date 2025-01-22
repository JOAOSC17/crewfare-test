import React, { InputHTMLAttributes } from 'react';
import Input from '../../atoms/Input/Input';
interface FormRowProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputType: string;
  }
function FormRow({ label, inputType, placeholder, ...rest }: FormRowProps) {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label className="">{label}</label>
      <Input type={inputType} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default FormRow;
