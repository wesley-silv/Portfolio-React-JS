import { RiH2, RiMenu2Line } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";



const SuspenseMenu = () => {

  let openMenu = < RiMenu2Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" title="Open menu"/>;
  let closeMenu = < RiMenu3Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" title="Close menu" />;

  return (
    <div className="bg-blue-500 w-full h-16 p-4 relative">
      {openMenu}
      
      <ul className="bg-gray-300 text-blue-800 font-bold text-lg inline-block w-60 p-2 absolute right-0 top-20 rounded-lg">
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Home</li>
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">About me</li>
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Stack</li>
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Projects</li>
        <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Iterest</li>
     </ul>
    </div>
  )
}

export default SuspenseMenu 