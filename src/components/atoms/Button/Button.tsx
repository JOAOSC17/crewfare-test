import React, { ButtonHTMLAttributes } from 'react';

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'regular' | 'error' | 'secondary'
}
function Button({ children, onClick, className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-blue-600 px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
