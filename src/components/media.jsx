import {VscGithub} from 'react-icons/vsc'
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMicrosoftoutlook, SiDiscord } from "react-icons/si";

const Media = () => {

  return (
    <div className="uppercase underline font-extrabold text-blue-500 min-w-full relative z-0">
      <section className="bg-gray-300 inline-block .fixed rounded-md my-16 absolute z-10">
        <a href='https://github.com/wesley-silv'>
          <VscGithub className='m-3 text-black size-7 hover:cursor-pointer hover:border-collapse' target='_blank' title='Go to GitHub'/>
        </a>
        <a href=''>
          <SiDiscord className='m-3 text-blue-600 size-7 hover:cursor-pointer hover:border-collapse' target='_blank' title='Go to Discord' />
        </a>
        <a href='https://wa.me/5534992540828?text=Olá Wesley Silva, estou entrando em contato para saber mais sobre o seu trabalho.'>
          <IoLogoWhatsapp className='m-3 text-green-500 size-7 hover:cursor-pointer hover:border-collapse' target='_blank' title='Go to Whatapp' />
        </a>
        <a href='https://mailto:wesleysilvaconceicao@outlook.com'>
          <SiMicrosoftoutlook className='m-3 text-blue-500 size-7 hover:cursor-pointer hover:border-collapse' target='_blank' title='Go to Outlook' />
        </a>
      </section>
    </div>
  )
}

export default Media