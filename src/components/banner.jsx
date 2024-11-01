import React, { useState, useEffect } from "react";

const Banner = ({ words, time }) => {
  const [indexWord, setIndexWord] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexWord((prevIndex) => (prevIndex + 1) % words.length);
    }, time);

    return () => clearInterval(intervalId);
  }, [words, time]);

  return (
    <header className="relative w-full text-center text-indigo-700 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md py-8 px-6 z-0 mt-8">
      <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold italic transition-opacity duration-500 ease-in-out text-white">
          {words[indexWord]}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white max-w-xl mx-auto">
          &ldquo;Transformando ideias em interfaces excepcionais e solucionando
          desafios digitais. Vamos moldar o futuro da web juntos!&ldquo;
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-2 bg-white text-indigo-700 font-bold rounded-lg shadow-md hover:bg-indigo-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Ir para o conteúdo principal"
        >
          Explore meus projetos
        </a>
      </div>
    </header>
  );
};

export default Banner;
