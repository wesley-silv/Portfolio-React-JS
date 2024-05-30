import { FaGear } from "react-icons/fa6";
import React, { useState, useEffect } from "react";

const  CodeSample = ({ letters, time }) => {
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
    <div className="my-24 max-md:my-24 mx-4 max-md:mx-0 justify-center">
     <section className="mx-12 p-8 box-border w-auto bg-zinc-800 shadow-lg drop-shadow-lg ">
      <FaGear className="fill-gray-200 size-8 animate-spin duration-900"/>
     <h2 className="text-orange-500 text-2xl font-extrabold my-2">
        O que eu penso sobre a programação? 
      </h2>
      <p className="mb-4 text-xl text-wrap indent-8 italic text-gray-200 drop-shadow-lg">
        {displayedText}
      </p>
     </section>
    </div>
  );
};

export default CodeSample;
