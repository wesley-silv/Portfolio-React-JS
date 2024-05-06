import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";
import React, {useState} from "react";

const MenuToggle = () => {

  const [isShow, setIsShow] = useState(true)
  const [isList, setIsList] = useState(true)

  const handleListClick = () => {
    setIsList(!isList)
    setIsShow(!isShow)
  }

  const headerScroll = () => {
    objHeader = document.getElementById('header')
    if(objHeader == window.screenY <= 0){
      objHeader.style.positon = '#fixed'
    }
  }

  let openMenu = < RiMenu2Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" onClick={handleListClick}/>;
  let closeMenu = < RiMenu3Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" onClick={handleListClick}/>;

  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 w-full h-16 p-3 relative"> 
      {/* {
      isList ? openMenu : closeMenu
      }
      { isShow ? closeMenu :
        <ul className="bg-gray-300 text-blue-800 font-bold w-[25%] max-lg:w-[60%] my-2 p-2 py-4 absolute z-10 right-0 top-20 rounded text-center text-xl" >
        <li className="hover:cursor-pointer hover:scale-125 rounded px-12">Início</li>
        <li className="hover:cursor-pointer hover:scale-125 rounded px-12">Projetos</li>
        <li className="hover:cursor-pointer hover:scale-125 rounded px-12">Experiências</li>
        <li className="hover:cursor-pointer hover:scale-125 rounded px-12">Orçamentos</li>
        <li className="hover:cursor-pointer hover:scale-125 rounded px-12">Interesses</li>
        </ul>
      } */}
    </div>
  )
}

export default MenuToggle 