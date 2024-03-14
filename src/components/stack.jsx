import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss, SiBootstrap, SiJquery } from "react-icons/si";

import React, {useState} from 'react'

const Stack = () => {
  const [isHTML, setIsHTML] = useState(true)
  const [isCSS, setIsCSS] = useState(true)
  const [isBootStrap, setIsBootstrap] = useState(true)
  const [isTailwindCSS, setIsTailwindCSS] = useState(true)
  const [isJavaScript, setIsJavaScript] = useState(true)
  const [ isJquery, setIsJquery] = useState(true)
  const [isReact, setIsReact] = useState(true)
  const [isNode, setIsNode] = useState(true)

  const handleHtml = () => {
    setIsHTML(!isHTML)
  }
  const handleCss = () => {
    setIsCSS(!isCSS)
  }
  const handleBootstrap = () => {
    setIsBootstrap(!isBootStrap)
  }
  const handleTailwindCss = () => {
    setIsTailwindCSS(!isTailwindCSS)
  }
  const handleJavaScript = () => {
    setIsJavaScript(!isJavaScript)
  }
  const handlejquery = () => {
    setIsJquery(!isJquery)
  }
  const handleReact = () => {
    setIsReact(!isReact)    
  }
  const handleNode = () => {
    setIsNode(!isNode)
  }
 
  return (
    <div className="my-36 text-center">
      <p className="mx-40 mb-3 text-gray-800 text-lg">
        Touch in icons to interact!
      </p>
      <section className="flex flex-row justify-center">
      <IoLogoHtml5 className="text-red-500 cursor-pointer m-1 size-12 max-sm:size-24 hover:rotate-[18deg] duration-200"  onClick={handleHtml}/>
      <IoLogoCss3 className="text-blue-500 cursor-pointer m-1 size-12 max-sm:size-24 hover:rotate-[18deg] duration-200" onClick={handleCss}/>
      <SiBootstrap className="text-blue-700 cursor-pointer m-1 size-12 max-sm:size-24 hover:rotate-[18deg] duration-200" onClick={handleBootstrap}/>
      <SiTailwindcss className="text-blue-400 cursor-pointer m-1 size-12 max-sm:size-24 hover:rotate-[18deg] duration-200" onClick={handleTailwindCss}/>
      <IoLogoJavascript className="text-yellow-500 cursor-pointer m-1 size-12 max-sm:size-24 hover:rotate-[18deg] duration-200"  onClick={handleJavaScript}/>
      <SiJquery className="text-blue-600 cursor-pointer m-1 size-12 max-sm:size-24 hover:rotate-[18deg] duration-200" onClick={handlejquery}/>
      <IoLogoReact className="text-blue-500 cursor-pointer m-1 size-12 max-sm:size-24 hover:rotate-[18deg] duration-200"  onClick={handleReact}/>
      <IoLogoNodejs className="text-green-500 cursor-pointer m-1 size-12 max-sm:size-24 hover:rotate-[18deg] duration-200"  onClick={handleNode}/>
      </section>
      <article className="flex flex-row justify-center m-8">
        { isHTML ? <></> : <article className=" block text-white bg-red-500 rounded-md shadow-lg drop-shadow-md p-4 mx-2 text-center text-lg">
            HyperText Markup Language is a structure to construct Web pages and site. Her able of insert differents content types to render in a browser, contents such as text, link, images, audio, video, logos beteen others. Your write is easy, because your tags are used to insert contents specifically.
          </article>
        }
        {
          isCSS ? <></> : <article className=" block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 mx-2 text-center text-lg">
             CSS helps you edit, align, remove, and work on the space between elements on a page. The acronym CSS corresponds to the English expression Cascading StyleSheets, which can be translated as “cascading style sheets”. The CSS is the responsible for give all nice of a Web page. 
          </article>
        }
        {
          isBootStrap ? <></> : <article className=" block text-gray-300 bg-blue-800 rounded-md shadow-lg drop-shadow-md p-4 mx-2 text-center text-lg">
             Bootstrap is a front-end framework that offers CSS frameworks for quickly and simply creating responsive websites and applications. It can be used for both desktop websites and mobile pages. The your work is able of management the creations spedelly, because have different structures ready to implementation. 
          </article>
        }
        {
          isTailwindCSS ? <></> : <article className=" block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 mx-2 text-center text-lg">
            The Tailwindcss came to better the experience in the organization of CSS, no need create external files to content the CSS. With your use is possible write many more inside in the HTML file, greate to maintenance and clean structuraction of code in big projets.  
          </article>
        }
        
      </article>
      <article className="flex flex-row justify-center m-8">
      {
          isJavaScript ? <></> : <article className=" block text-black bg-yellow-200 rounded-md shadow-lg drop-shadow-md p-4 mx-2 text-center text-lg">
            JavaScript is a language of programation that use to create my projects, her can be used in different integrations such as, creations of API, apply dynamism in the interactions of user with display, activete mechanism of serch in browsers, do query in databases and call events, and this is just a begin. 
          </article>
        }
        {
          isJquery ? <></> : <article className=" block text-gray-300 bg-blue-800 rounded-md shadow-lg drop-shadow-md p-4 mx-2 text-center text-lg">
            The jQuery library is associated with JavaScript elements in HTML to provide more dynamism and usability to web pages. With simplified lines of code, it replaces complex JavaScript scripts with more concise syntax. 
          </article>
        }
        {
         isReact ? <article className=" block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 mx-2 text-center text-lg">
          React is a fantastic framework! I use to create responsive fronts, structure components in displays, insert icons, change of states that management dynamic interactions to user, and many more. 
        </article> : <></> 
        }
        {
        isNode ? <></> : <article className=" block text-gray-200 bg-green-600 rounded-md shadow-lg drop-shadow-md p-4 mx-2 text-center text-lg">
          Node is a development ambient to write programs with JavaScript! Very powerful in creations of APIs, integrations with database and also payments methods. With him is possible interact about other systems and to see the code in exection time. 
        </article>
        }
      </article>
    </div>
  ) 
}

export default Stack; 