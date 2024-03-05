import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss, SiBootstrap, SiJquery } from "react-icons/si";

import Reaact, {useState} from 'react'

const Stack = () => {

  const [isReact, setIsReact] = useState(true)
  const [isJavaScript, setIsJavaScript] = useState(true)

  const handleReact = () => {
    setIsReact(!isReact)    
  }
  const handleJavaScript = () => {
    setIsJavaScript(!isJavaScript)
  }

  return (
    <div >
      <section className="mx-16 m-24 text-4xl flex">
      <IoLogoHtml5 className="text-red-500 cursor-pointer m-1"/>
      <IoLogoCss3 className="text-blue-500 cursor-pointer m-1"/>
      <SiBootstrap className="text-blue-700 cursor-pointer m-1"/>
      <SiTailwindcss className="text-blue-400 cursor-pointer m-1"/>
      <IoLogoJavascript className="text-yellow-500 cursor-pointer m-1" onClick={handleJavaScript}/>
      <SiJquery className="text-blue-600 cursor-pointer m-1"/>
      <IoLogoReact className="text-blue-500 cursor-pointer m-1" onClick={handleReact}/>
      <IoLogoNodejs className="text-green-500 cursor-pointer m-1"/>
      </section>
      <article className="absolute top-64 my-16 mx-8 p-4 flex">
      {
        isReact ? <p className="drop-shadow-lg text-xl"></p> : <article className=" h-60 w-96 block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
          React is a fantastic framework! I use to create responsive fronts, structure components in displays, insert icons, change of states that management dynamic interactions to user, and many more. 
        </article>
      }
      {
        isJavaScript ? <p className="drop-shadow-lg text-xl"></p> : <article className=" h-60 w-96 block text-black bg-yellow-200 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
          JavaScript is a language of programation that use to create my projects, her can be in different integrations such as, creations of API, apply dynamism in the interactions of user with display, activete mechanism of serch in browsers, do query in databases between others use. 
        </article>
      }
      </article>
    </div>
  ) 
}

export default Stack; 