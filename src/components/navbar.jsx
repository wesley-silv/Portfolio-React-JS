import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-500 w-full h-16 px-6 shadow-lg relative z-20">
      {/* Logo Section */}
      <h1 className="text-white text-3xl font-bold italic tracking-wide">
        <span className="text-yellow-300">Dev</span>eloper
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
        <Link className="block text-white text-lg py-2 lg:py-0 hover:text-yellow-300 transition-colors duration-200" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link className="block text-white text-lg py-2 lg:py-0 hover:text-yellow-300 transition-colors duration-200" to="/budgets" onClick={() => setIsMenuOpen(false)}>Orçamentos</Link>
        <Link className="block text-white text-lg py-2 lg:py-0 hover:text-yellow-300 transition-colors duration-200" to="/tools" onClick={() => setIsMenuOpen(false)}>Ferramentas</Link>
      </nav>
    </header>
  );
};

export default Navbar;
=======
  const [isShow, setIsShow] = useState(true)
  const [isList, setIsList] = useState(true)

  const handleListClick = () => {
    setIsList(!isList)
    setIsShow(!isShow)
  }


  let openMenu = < RiMenu2Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" onClick={handleListClick}/>;
  let closeMenu = < RiMenu3Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" onClick={handleListClick}/>;

  return (
    <div className="flex flex-row items-justify justify-between bg-gradient-to-r from-blue-700 to-blue-500 w-full h-16 p-3 relative"> 
      <h2 className='text-gray-400 text-3xl font-bold italic mx-2'>
        <span className='text-gray-200 font-extrabold'>Dev</span>eloper
      </h2>
      <section>
      {
      isList ? openMenu : closeMenu
      }
      { isShow ? closeMenu :
        <nav className="bg-blue-300 text-blue-700 border-solid border-2 border-blue-500 font-bold w-[25%] max-lg:w-[80%] mx-1 p-2 py-4 absolute z-10 right-0 top-20 rounded text-center text-xl" >
         <Link className='block text-xl hover:cursor-pointer hover:text-blue-900 rounded' to="/">Home</Link>
         <Link className='block text-xl hover:cursor-pointer hover:text-blue-900 rounded' to="/budgets">Orçamentos</Link>
         <Link className='block text-xl hover:cursor-pointer hover:text-blue-900 rounded' to="/budgets">Ferramentas</Link>

        </nav>
      }
      </section>
    </div>
  )
}

export default Navbar 
