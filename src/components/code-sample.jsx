import { FaCode } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const CodeSample = ({ letters, time }) => {
  const [indexLetter, setIndexLetter] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let currentLetters = letters[indexLetter];
    let intervalId;

    const updateText = () => {
      if (currentIndex < currentLetters.length) {
        setDisplayedText(currentLetters.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        currentIndex = 0;
        setIndexLetter((prevIndex) => (prevIndex + 1) % letters.length);
        currentLetters = letters[indexLetter];
        setDisplayedText("");
      }
    };

    intervalId = setInterval(updateText, time);

    return () => clearInterval(intervalId);
  }, [letters, time, indexLetter]);

  return (
    <div className="flex justify-center my-24 mx-4 md:my-32">
      <section className="relative w-full max-w-3xl bg-gray-800 shadow-lg p-8 rounded-lg text-gray-300">
        {/* Ícone fixo e centralizado */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 rounded-full shadow-md">
          <FaCode className="text-indigo-400 text-3xl" />
        </div>

        {/* Título e Texto */}
        <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">
          O que eu penso sobre a programação?
        </h2>

        {/* Contêiner de texto com altura fixa e alinhamento vertical central */}
        <div className="h-24 flex items-center justify-center">
          <p className="text-lg md:text-xl italic leading-relaxed text-center">
            {displayedText}
          </p>
        </div>
      </section>
    </div>
  );
};

export default CodeSample;
