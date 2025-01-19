import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
function Input({ type, placeholder, className, ...rest }: InputProps)  {
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
