import { RiMenu2Line, RiMenu3Line } from "react-icons/ri";


const MenuToggle = () => {


  let openMenu = < RiMenu2Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" title="Open menu"/>;
  let closeMenu = < RiMenu3Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" title="Close menu" />;


  return (
    <div className="bg-blue-500 w-full h-16 p-4 relative">
      <select className="bg-gray-300 text-blue-800 font-bold text-lg inline-block w-48 p-2 absolute right-2 top-4 rounded text-center uppercase" >
        <option className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Home</option>
        <option className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">About me</option>
        <option className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Stack</option>
        <option className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Projects</option>
        <option className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Interest</option>
     </select>
    </div>
  )
}

export default MenuToggle 