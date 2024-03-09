import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";

// Apply the useState of React
import React, {useState} from "react";


const MenuToggle = () => {

  const [isShow, setIsShow] = useState(true)
  const [isList, setIsList] = useState(true)

  const handleListClick = () => {
    setIsList(!isList)
    setIsShow(!isShow)
  }

  let openMenu = < RiMenu2Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" onClick={handleListClick}/>;
  let closeMenu = < RiMenu3Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" onClick={handleListClick}/>;

  return (
    <div className="bg-blue-500 w-full h-16 p-3 relative"> 
      {
      isList ? openMenu : closeMenu
      }
      { isShow ? closeMenu :
        <ul className="bg-gray-300 text-blue-800 font-bold w-60 p-2 py-4 absolute z-10 right-0 top-20 rounded text-center text-lg" >
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Home</li>
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">About me</li>
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Stack</li>
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Projects</li>
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Interest</li>
        </ul>
      }
    </div>
  )
}

export default MenuToggle 