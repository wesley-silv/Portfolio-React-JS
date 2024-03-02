import { SiMicrosoftoutlook, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";

const Media = () => {

  return (
    <div className="text-blue-500 min-w-full relative right-12 hover:right-0 duration-300 z-0" title='Touch to open'>
      <section className="bg-gray-300 inline-block my-4 px-2 absolute z-10 rounded">
        <a href='https://github.com/wesley-silv' target="_blank">
          <SiGithub className='m-3 text-black size-7 hover:cursor-pointer hover:border-collapse' target='_blank' title='Go to GitHub'/>
        </a>
        <a href='https://linkedin.com/in/wesleysilv' target="_blank">
          <SiLinkedin className='m-3 text-blue-600 size-7 hover:cursor-pointer hover:border-collapse' target='_blank' title='Go to Linkedin' />
        </a>
        <a href='https://wa.me/5534992540828?text=Olá Wesley Silva, estou entrando em contato para saber mais sobre o seu trabalho.' target="_blank">
          <SiWhatsapp className='m-3 text-green-600 size-7 hover:cursor-pointer hover:border-collapse' target='_blank' title='Go to Whatapp' />
        </a>
        <a href='https://mailto:wesleysilvaconceicao@outlook.com' target="_blank">
          <SiMicrosoftoutlook className='m-3 text-blue-500 size-7 hover:cursor-pointer hover:border-collapse' target='_blank' title='Go to Outlook' />
        </a>
      </section>
    </div>
  )
}

export default Media