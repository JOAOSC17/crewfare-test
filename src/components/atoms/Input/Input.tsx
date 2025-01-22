import React, { InputHTMLAttributes } from 'react';
function Input({ type, placeholder, className, ...rest }: InputHTMLAttributes<HTMLInputElement>)  {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full bg-zinc-800 p-2 rounded-md text-white ${className}`}
      {...rest}
    />
  );
}

export default Input;
