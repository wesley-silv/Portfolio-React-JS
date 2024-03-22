import { SiMicrosoftoutlook, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { IoIosArrowDroprightCircle, IoIosArrowDropdownCircle  } from "react-icons/io";

import React, {useState} from 'react'

const Media = () => {

  const [isOpen, setIsOpen] = useState(true)
  const [isSlide, setIsSlide] = useState(true)

  const mediaOpen = () => {
    setIsOpen(!isOpen)
    setIsSlide(!isSlide)
  }

  const buttonOpen = <IoIosArrowDroprightCircle className='m-3 text-blue-600 size-8 hover:cursor-pointer hover:border-collapse duration-600'  title='Touch to open' onClick={mediaOpen}/>
  const buttonClose = <IoIosArrowDropdownCircle className='m-3 text-blue-600 size-8 hover:cursor-pointer hover:border-collapse duration-500'  title='Touch to close' onClick={mediaOpen}/>
  return (
    <div className="fixed z-10">
      {
        isOpen ? buttonOpen : buttonClose
      }
      {
        isSlide ? <section className="bg-gray-300 inline-block absolute z-10 px-4 rounded">
        <a href='https://github.com/wesley-silv' target="_blank">
          <SiGithub className='m-3 text-black size-7 hover:cursor-pointer hover:border-collapse  hover:scale-125' target='_blank' title='Ir para o GitHub'/>
        </a>
        <a href='https://linkedin.com/in/wesleysilv' target="_blank">
          <SiLinkedin className='m-3 text-blue-600 size-7 hover:cursor-pointer hover:border-collapse hover:scale-125' target='_blank' title='Ir para o Linkedin' />
        </a>
        <a href='https://wa.me/5534992540828?text=Olá Wesley Silva, estou entrando em contato para saber mais sobre o seu trabalho.' target="_blank">
          <SiWhatsapp className='m-3 text-green-600 size-7 hover:cursor-pointer hover:border-collapse hover:scale-125' target='_blank' title='Ir para o Whatapp' />
        </a>
        <a href='https://mailto:wesleysilvaconceicao@outlook.com' target="_blank">
          <SiMicrosoftoutlook className='m-3 text-blue-500 size-7 hover:cursor-pointer hover:border-collapse hover:scale-125' target='_blank' title='Ir para o Outlook' />
        </a>
      </section>
       : 
       <></>
      }
      
    </div>
  )
}

export default Media
