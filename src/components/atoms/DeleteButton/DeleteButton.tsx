import React, { ButtonHTMLAttributes } from 'react';


function DeleteButton({ onClick, className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button onClick={onClick} className={`flex mt-5 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 24 48" fill="none">
            <path d="M11 22C11 21.4477 10.5523 21 10 21C9.44772 21 9 21.4477 9 22H11ZM9 30C9 30.5523 9.44772 31 10 31C10.5523 31 11 30.5523 11 30H9ZM15 22C15 21.4477 14.5523 21 14 21C13.4477 21 13 21.4477 13 22H15ZM13 30C13 30.5523 13.4477 31 14 31C14.5523 31 15 30.5523 15 30H13ZM7.09202 32.782L7.54601 31.891H7.54601L7.09202 32.782ZM6.21799 31.908L7.10899 31.454L7.10899 31.454L6.21799 31.908ZM17.782 31.908L16.891 31.454V31.454L17.782 31.908ZM16.908 32.782L16.454 31.891H16.454L16.908 32.782ZM5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20V18ZM19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18V20ZM7.5 19C7.5 19.5523 7.94772 20 8.5 20C9.05228 20 9.5 19.5523 9.5 19H7.5ZM14.5 19C14.5 19.5523 14.9477 20 15.5 20C16.0523 20 16.5 19.5523 16.5 19H14.5ZM9 22V30H11V22H9ZM13 22V30H15V22H13ZM17 19V29.8H19V19H17ZM14.8 32H9.2V34H14.8V32ZM5 19V29.8H7V19H5ZM9.2 32C8.62345 32 8.25117 31.9992 7.96784 31.9761C7.69617 31.9539 7.59545 31.9162 7.54601 31.891L6.63803 33.673C7.01641 33.8658 7.40963 33.9371 7.80497 33.9694C8.18864 34.0008 8.65645 34 9.2 34V32ZM5 29.8C5 30.3436 4.99922 30.8114 5.03057 31.195C5.06287 31.5904 5.13419 31.9836 5.32698 32.362L7.10899 31.454C7.0838 31.4045 7.04612 31.3038 7.02393 31.0322C7.00078 30.7488 7 30.3766 7 29.8H5ZM7.54601 31.891C7.35785 31.7951 7.20487 31.6422 7.10899 31.454L5.32698 32.362C5.6146 32.9265 6.07354 33.3854 6.63803 33.673L7.54601 31.891ZM17 29.8C17 30.3766 16.9992 30.7488 16.9761 31.0322C16.9539 31.3038 16.9162 31.4045 16.891 31.454L18.673 32.362C18.8658 31.9836 18.9371 31.5904 18.9694 31.195C19.0008 30.8114 19 30.3436 19 29.8H17ZM14.8 34C15.3436 34 15.8114 34.0008 16.195 33.9694C16.5904 33.9371 16.9836 33.8658 17.362 33.673L16.454 31.891C16.4045 31.9162 16.3038 31.9539 16.0322 31.9761C15.7488 31.9992 15.3766 32 14.8 32V34ZM16.891 31.454C16.7951 31.6422 16.6422 31.7951 16.454 31.891L17.362 33.673C17.9265 33.3854 18.3854 32.9265 18.673 32.362L16.891 31.454ZM5 20H6V18H5V20ZM6 20H18V18H6V20ZM18 20H19V18H18V20ZM9.5 18.2C9.5 17.0674 10.5331 16 12 16V14C9.60095 14 7.5 15.7979 7.5 18.2H9.5ZM12 16C13.4669 16 14.5 17.0674 14.5 18.2H16.5C16.5 15.7979 14.399 14 12 14V16ZM7.5 18.2V19H9.5V18.2H7.5ZM14.5 18.2V19H16.5V18.2H14.5Z" fill="#FF6A55"/>
        </svg>
    </button>
  );
}

export default DeleteButton;
