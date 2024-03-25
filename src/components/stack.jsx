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
    <div className="my-40 text-center">
      <p className="mx-40 mb-3 text-gray-800 text-lg">
        Clique nos ícones para interagir!
      </p>
      <section className="flex flex-row max-lg:flex-wrap justify-center mb-10">
      <IoLogoHtml5 className="text-red-500 cursor-pointer m-1 size-12 max-sm:size-18 hover:rotate-[18deg] duration-200"  onClick={handleHtml}/>
      <IoLogoCss3 className="text-blue-500 cursor-pointer m-1 size-12 max-sm:size-18 hover:rotate-[18deg] duration-200" onClick={handleCss}/>
      <SiBootstrap className="text-blue-700 cursor-pointer m-1 size-12 max-sm:size-18 hover:rotate-[18deg] duration-200" onClick={handleBootstrap}/>
      <SiTailwindcss className="text-blue-400 cursor-pointer m-1 size-12 max-sm:size-18 hover:rotate-[18deg] duration-200" onClick={handleTailwindCss}/>
      <IoLogoJavascript className="text-yellow-500 cursor-pointer m-1 size-12 max-sm:size-18 hover:rotate-[18deg] duration-200"  onClick={handleJavaScript}/>
      <SiJquery className="text-blue-600 cursor-pointer m-1 size-12 max-sm:size-18 hover:rotate-[18deg] duration-200" onClick={handlejquery}/>
      <IoLogoReact className="text-blue-500 cursor-pointer m-1 size-12 max-sm:size-18 hover:animate-spin duration-500"  onClick={handleReact}/>
      <IoLogoNodejs className="text-green-500 cursor-pointer m-1 size-12 max-sm:size-18 hover:rotate-[18deg] duration-200"  onClick={handleNode}/>
      </section>
      <article className="flex flex-col justify-center mx-8 my-2 lg:flex-row ">
        { isHTML ? <></> : <article className="block text-white bg-red-500 rounded-md shadow-lg drop-shadow-md p-4 m-2 text-center text-lg">
        HyperText Markup Language é uma estrutura para construir páginas da Web e sites. Ela é capaz de inserir diversos tipos de conteúdo para renderizar em um navegador, conteúdos como texto, link, imagens, áudio, vídeo, logotipos entre outros. Sua escrita é fácil, pois suas tags servem para inserir conteúdos especificamente.
          </article>
        }
        {
          isCSS ? <></> : <article className="block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 m-2 text-center text-lg">
             O Cascading Style Sheets ajuda a editar, alinhar, remover e trabalhar no espaço entre os elementos de uma página. A sigla CSS corresponde à expressão em inglês Cascading StyleSheets, que pode ser traduzida como “folhas de estilo em cascata”. O CSS é o responsável por dar todo o charme de uma página Web. 
          </article>
        }
        {
          isBootStrap ? <article className="block text-gray-300 bg-blue-800 rounded-md shadow-lg drop-shadow-md p-4 m-2 text-center text-lg">
             Bootstrap é uma estrutura front-end que oferece estruturas CSS para a criação rápida e simples de sites e aplicativos responsivos. Ele pode ser usado tanto para sites de desktop quanto para páginas móveis. A sua obra é capaz de gerenciar as criações com agilidade, pois possui diferentes estruturas prontas para implementação.
          </article>
          : <></>
        }
        {
          isTailwindCSS ? <></> : <article className="block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 m-2 text-center text-lg">
            O Tailwindcss veio para melhorar a experiência na organização de CSS, não sendo necessário criar arquivos externos para conteúdo do CSS. Com seu uso é possível escrever muito mais dentro do arquivo HTML, ótimo para manutenção e estruturação limpa de código em grandes projetos. 
          </article>
        }
        
      </article>
      <article className="flex flex-col justify-center mx-8 my-2 lg:flex-row">
      {
          isJavaScript ? <></> : <article className="block text-black bg-yellow-200 rounded-md shadow-lg drop-shadow-md p-4 m-2 text-center text-lg">
            JavaScript é uma linguagem de programação que utilizo para criar meus projetos, ela pode ser utilizada em diversas integrações como, criações de API, aplicar dinamismo nas interações do usuário com display, ativar mecanismo de busca em navegadores, fazer consultas em bancos de dados e chamar eventos, e isso é apenas o começo.
          </article>
        }
        {
          isJquery ? <></> : <article className="block text-gray-300 bg-blue-800 rounded-md shadow-lg drop-shadow-md p-4 m-2 text-center text-lg">
            A biblioteca jQuery está associada a elementos JavaScript em HTML para proporcionar mais dinamismo e usabilidade às páginas web. Com linhas de código simplificadas, ele substitui scripts JavaScript complexos por uma sintaxe mais concisa.
          </article>
        }
        {
         isReact ? <article className="block text-blue-700 bg-gray-200 rounded-md shadow-lg drop-shadow-md p-4 m-2 text-center text-lg">
          React é uma estrutura fantástica! Utilizo para criar frentes responsivas, estruturar componentes em displays, inserir ícones, mudança de estados que gerenciam interações dinâmicas com o usuário e muito mais. 
        </article> : <></> 
        }
        {
        isNode ? <article className="block text-gray-200 bg-green-600 rounded-md shadow-lg drop-shadow-md p-4 m-2 text-center text-lg">
          Node é um ambiente de desenvolvimento para escrever programas com JavaScript! Muito poderoso em criações de APIs, integrações com banco de dados e também métodos de pagamentos. Com ele é possível interagir com outros sistemas e visualizar o código em tempo de execução. 
        </article>
        :  <></>
        }
      </article>
    </div>
  ) 
}

export default Stack; 