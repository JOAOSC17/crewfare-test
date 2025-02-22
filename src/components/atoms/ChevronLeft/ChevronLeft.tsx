import React, { ButtonHTMLAttributes } from 'react';


function ChevronLeft({ disabled, onClick, className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button aria-label="chevronLeft" className={`bg-zinc-800 rounded p-2 ${className} ${disabled ? 'opacity-25' : ''}`} onClick={onClick} disabled={disabled}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L10.2 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
  );
}

export default ChevronLeft;