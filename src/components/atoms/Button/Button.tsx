import React, { ButtonHTMLAttributes } from 'react';

function Button({ children, onClick, className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-indigo px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
