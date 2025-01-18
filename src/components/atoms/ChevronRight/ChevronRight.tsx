import React, { ButtonHTMLAttributes } from 'react';

function ChevronRight({ disabled, onClick, className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`bg-zinc-800 rounded p-2 ${className} ${disabled ? 'opacity-25' : ''}`} onClick={onClick} disabled={disabled}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 6L14.8 12L10 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
  );
}

export default ChevronRight;