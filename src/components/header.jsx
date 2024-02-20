import { IoIosArrowDropdownCircle } from "react-icons/io";


const SuspenseMenu = () => {
  return (
    <div className="bg-blue-600 h-16 w-full">
      < IoIosArrowDropdownCircle className="text-gray-300 size-10 mx-10 cursor-pointer shadow" title="Menu"/>
      <select className="m-5">
        <option value="">

        </option>
        <option value="">
          Home
        </option>
        <option value="">
          About me
        </option><option value="">
          Stack
        </option><option value="">
          Projects
        </option>
        <option value="">
          Interess
        </option>
      </select>
    </div>
  )
}

export default SuspenseMenu