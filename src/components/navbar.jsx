import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-500 w-full h-16 px-4 mb-16 shadow-xl relative z-20">
      {/* Logo Section */}
      <h1 className="text-white text-3xl font-bold italic tracking-wide">
        <span className="text-blue-200">Front</span><sub className='text-blue-300'>end</sub>
      </h1>

      {/* Menu Icon (always on top) */}
      <div
        onClick={handleMenuToggle}
        className="text-white text-3xl cursor-pointer absolute right-6 top-5 z-30 lg:hidden"
      >
        {isMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
      </div>

      {/* Navbar Links */}
      <nav className={`fixed inset-y-0 right-0 bg-blue-900 bg-opacity-95 p-6 w-2/3 max-w-xs transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:flex lg:bg-transparent lg:items-center lg:space-x-8 lg:w-auto z-20`}>
        <Link className="block text-white text-lg py-2 lg:py-0 hover:text-yellow-300 transition-colors duration-200" to="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
        <Link className="block text-white text-lg py-2 lg:py-0 hover:text-yellow-300 transition-colors duration-200" to="/budgets" onClick={() => setIsMenuOpen(false)}>Orçamentos</Link>
        {/* <Link className="block text-white text-lg py-2 lg:py-0 hover:text-yellow-300 transition-colors duration-200" to="/tools" onClick={() => setIsMenuOpen(false)}>Ferramentas</Link> */}
      </nav>
    </header>
  );
};

export default Navbar;
