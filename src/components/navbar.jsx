import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";
import React, {useState} from "react";

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
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 w-full h-16 p-3 relative"> 
      <h2 className='text-gray-400 text-3xl font-bold italic mx-2'>
        <span className='text-gray-200 font-extrabold'>Dev</span>eloper
      </h2>
      {/* {
      isList ? openMenu : closeMenu
      }
      { isShow ? closeMenu :
        <ul className="bg-blue-300 text-blue-800 border-solid border-2 border-blue-500 font-bold w-[25%] max-lg:w-[80%] p-2 py-4 absolute z-10 right-0 top-20 rounded text-center text-xl" >
          <li className="hover:cursor-pointer rounded px-12">Início</li>
          <li className="hover:cursor-pointer rounded px-12">Ferramentas</li>
          <li className="hover:cursor-pointer rounded px-12">Experiências</li>
          <li className="hover:cursor-pointer rounded px-12">Orçamentos</li>
          <li className="hover:cursor-pointer rounded px-12">Interesses</li>
        </ul>
      } */}
    </div>
  )
}

export default Navbar 