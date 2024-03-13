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
    <div className="my-8">
     <section className="mx-24 p-5 box-border w-auto bg-zinc-800 rounded-lg shadow-lg drop-shadow-lg ">
     <h2 className="text-orange-500 text-lg font-bold my-2">
        See a small example! 
      </h2>
      <p className="mb-4 text-xl text-wrap indent-8 italic text-zinc-300 drop-shadow-lg">
        {displayedText}
      </p>
     </section>
    </div>
  );
};

export default CodeSample;
