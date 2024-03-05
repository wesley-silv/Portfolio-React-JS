import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

import Reaact, {useState} from 'react'

const Stack = () => {

  const [isReact, setIsReact] = useState(true)

  const handleReact = () => {
    setIsReact(!isReact)
  }

  return (
    <div >
      <section className="mx-16 m-20 text-4xl flex">
      <IoLogoHtml5 className="text-red-500 cursor-pointer m-1"/>
      <IoLogoCss3 className="text-blue-500 cursor-pointer m-1"/>
      <IoLogoJavascript className="text-yellow-500 cursor-pointer m-1"/>
      <IoLogoReact className="text-blue-500 cursor-pointer m-1" onClick={handleReact}/>
      <IoLogoNodejs className="text-green-500 cursor-pointer m-1"/>
      <SiTailwindcss className="text-blue-600 cursor-pointer m-1"/>
      <SiBootstrap className="text-blue-700 cursor-pointer m-1"/>
      </section>
      <article className="absolute top-64 m-16 p-4 bg-gray-200 h-60 w-80 rounded-md shadow-md">
      {
        isReact ? <p className="drop-shadow-lg text-xl">Touch in icon to see your content</p> : <article className="block drop-shadow-lg text-xl">
          With the React, I can create fantastic fronts 
        </article>
      }
      </article>
    </div>
  ) 
}

export default Stack; 