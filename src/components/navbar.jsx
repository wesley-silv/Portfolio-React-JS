import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";
import React, {useState} from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

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
