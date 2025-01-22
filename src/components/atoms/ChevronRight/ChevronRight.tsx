import React, { ButtonHTMLAttributes } from 'react';

function ChevronRight({ disabled, onClick, className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button aria-label="chevronRight" className={`bg-zinc-800 rounded p-2 ${className} ${disabled ? 'opacity-25' : ''}`} onClick={onClick} disabled={disabled}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 6L14.8 12L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
  );
}

export default ChevronRight;