import React from 'react';
import logo from './logo.svg'
function Header() {
  return (
    <header className="bg-black py-4 flex justify-center text-lg">
        <img src={logo} alt="" />
    </header>
  );
}

export default Header;