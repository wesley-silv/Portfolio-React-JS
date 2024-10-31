import { SiMicrosoftoutlook, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import React, { useState } from 'react';

const Media = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Alternar a visibilidade do painel de mídia
  const toggleMedia = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-10 flex items-center">
      {/* Botão de abrir/fechar, posicionado fora do container */}
      <div
        className="absolute left-0 ml-2 p-2 rounded-full bg-indigo-600 text-white cursor-pointer z-20 hover:scale-110 transition-transform duration-300"
        title={isOpen ? "Fechar mídia" : "Abrir mídia"}
        onClick={toggleMedia}
      >
        {isOpen ? (
          <IoIosArrowDropleftCircle className="text-3xl" />
        ) : (
          <IoIosArrowDroprightCircle className="text-3xl" />
        )}
      </div>

      {/* Container de mídia com transição suave */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-blue-300 p-4 pl-10 rounded-r-lg border-2 border-blue-500 transition-transform duration-500 ease-in-out flex items-center`}
      >
        {/* Links de mídia social exibidos somente quando o container está aberto */}
        {isOpen && (
          <div className="flex flex-col items-center">
            <a href="https://github.com/wesley-silv" target="_blank" rel="noreferrer">
              <SiGithub
                className="m-3 text-black text-2xl hover:scale-125 transition-transform duration-200"
                title="GitHub"
              />
            </a>
            <a href="https://linkedin.com/in/wesleysilv" target="_blank" rel="noreferrer">
              <SiLinkedin
                className="m-3 text-blue-600 text-2xl hover:scale-125 transition-transform duration-200"
                title="LinkedIn"
              />
            </a>
            <a href="https://wa.me/5534992540828?text=Olá Wesley Silva, estou entrando em contato para saber mais sobre o seu trabalho como desenvolvedor."
               target="_blank" rel="noreferrer">
              <SiWhatsapp
                className="m-3 text-green-600 text-2xl hover:scale-125 transition-transform duration-200"
                title="WhatsApp"
              />
            </a>
            <a href="mailto:wesleysilvaconceicao@outlook.com" target="_blank" rel="noreferrer">
              <SiMicrosoftoutlook
                className="m-3 text-blue-500 text-2xl hover:scale-125 transition-transform duration-200"
                title="Outlook"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
