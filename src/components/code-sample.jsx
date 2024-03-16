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
    <div className="my-24 mx-8 justify-center">
     <section className="mx-24 p-8 box-border w-auto bg-zinc-800 rounded-lg shadow-lg drop-shadow-lg ">
     <h2 className="text-green-400 text-lg font-bold my-2">
        What I think about the programing? 
      </h2>
      <p className="mb-4 text-xl text-wrap indent-8 italic text-gray-300 drop-shadow-lg">
        {displayedText}
      </p>
     </section>
    </div>
  );
};

export default CodeSample;
