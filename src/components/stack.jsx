import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss, SiBootstrap, SiJquery } from "react-icons/si";

import React, {useState} from 'react'
import CodeSample from "./code-sample";

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
    <div className="">
      <p className="mx-44 mb-4 text-gray-700 text-lg">
        Touch in icons to interact!
      </p>
      <section className="flex mx-24">
      <IoLogoHtml5 className="text-red-500 cursor-pointer m-1" size={44}onClick={handleHtml}/>
      <IoLogoCss3 className="text-blue-500 cursor-pointer m-1"size={44} onClick={handleCss}/>
      <SiBootstrap className="text-blue-700 cursor-pointer m-1"size={44} onClick={handleBootstrap}/>
      <SiTailwindcss className="text-blue-400 cursor-pointer m-1"size={44} onClick={handleTailwindCss}/>
      <IoLogoJavascript className="text-yellow-500 cursor-pointer m-1"size={44}  onClick={handleJavaScript}/>
      <SiJquery className="text-blue-600 cursor-pointer m-1"size={44} onClick={handlejquery}/>
      <IoLogoReact className="text-blue-500 cursor-pointer m-1" size={44} onClick={handleReact}/>
      <IoLogoNodejs className="text-green-500 cursor-pointer m-1" size={44} onClick={handleNode}/>
      </section>
      <article className="flex mx-32 my-8">
        {
          isHTML ? <p className="drop-shadow-lg text-xl"></p> : <article className="w-96 block text-white bg-red-500 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
            HyperText Markup Language is a structure to construct Web pages and site. Her able of insert differents content types to render in a browser, contents such as text, link, images, audio, video, logos beteen others. Your write is easy, because your tags are used to insert contents specifically.
          </article>
        }
        {
          isCSS ? <p className="drop-shadow-lg text-xl"></p> : <article className="w-96 block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
             CSS helps you edit, align, remove, and work on the space between elements on a page. The acronym CSS corresponds to the English expression Cascading StyleSheets, which can be translated as “cascading style sheets”. The CSS is the responsible for give all nice of a Web page. 
          </article>
        }
        {
          isBootStrap ? <p className="drop-shadow-lg text-xl"></p> : <article className="w-96 block text-gray-300 bg-blue-800 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
             Bootstrap is a front-end framework that offers CSS frameworks for quickly and simply creating responsive websites and applications. It can be used for both desktop websites and mobile pages. The your work is able of management the creations spedelly, because have different structures ready to implementation. 
          </article>
        }
        {
          isTailwindCSS ? <p className="drop-shadow-lg text-xl"></p> : <article className="w-96 block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
            The Tailwindcss came to better the experience in the organization of CSS, no need create external files to content the CSS. With your use is possible write many more inside in the HTML file, greate to maintenance and clean structuraction of code in big projets.  
          </article>
        }
        
      </article>
      <article className="flex mx-32 my-8">
      {
          isJavaScript ? <p className="drop-shadow-lg text-xl"></p> : <article className="w-96 block text-black bg-yellow-200 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
            JavaScript is a language of programation that use to create my projects, her can be used in different integrations such as, creations of API, apply dynamism in the interactions of user with display, activete mechanism of serch in browsers, do query in databases and call events, and this is just a begin. 
          </article>
        }
        {
          isJquery ? <p className="drop-shadow-lg text-xl"></p> : <article className="w-96 block text-gray-300 bg-blue-800 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
            The jQuery library is associated with JavaScript elements in HTML to provide more dynamism and usability to web pages. With simplified lines of code, it replaces complex JavaScript scripts with more concise syntax. 
          </article>
        }
        {
        isReact ? <p className="drop-shadow-lg text-xl"></p> : <article className="w-96 block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
          React is a fantastic framework! I use to create responsive fronts, structure components in displays, insert icons, change of states that management dynamic interactions to user, and many more. 
        </article>
        }
        {
        isNode ? <p className="drop-shadow-lg text-xl"></p> : <article className="w-96 block text-gray-200 bg-green-500 rounded-md shadow-lg drop-shadow-md p-4 text-center text-lg">
          Node is a development ambient to write programs with JavaScript! Very powerful in creations of APIs, integrations with database and also payments methods. With him is possible interact about other systems and to see the code in exection time. 
        </article>
        }
      </article>
    </div>
  ) 
}

export default Stack; 