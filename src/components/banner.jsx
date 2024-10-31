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
    <header className="relative w-full text-indigo-700 bg-white shadow-lg flex flex-col items-center py-4 px-6 z-10">
      <div className="flex justify-between w-full max-w-screen-xl items-center">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold italic transition-opacity duration-500 ease-in-out">
            {words[indexWord]}
          </h1>
        </div>

        <a
          href="#main-content"
          className="ml-4 px-4 py-2 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Ir para o conteúdo principal"
        >
          Acessar Conteúdo
        </a>
      </div>
    </header>
  );
};

export default Banner;
