import React, {useState, useEffect} from "react"

const Banner = ({words, time}) => { // words and time are props of use, where words is an array of words and time define the interval of time.
  

  const [indexWord, setIndexWord] = useState(0)

  useEffect(() => {
    const defineInterval = setInterval(() => {
      setIndexWord((prevIndice) => (prevIndice + 1) % words.length)
    }, time)
    
    return () => clearInterval(defineInterval)
  }, [words, time])

  return (
    
    <div className="my-16 text-center">
      <h1 className="mb-4 text-5xl max-lg:text-4xl font-extrabold italic text-indigo-800 drop-shadow-lg">
      {words[indexWord]}
      </h1>
      <h2 className="text-2xl indent-10 font-bold italic text-indigo-500">
        Navegue e conheça todo o conteúdo!
      </h2>
    </div>
  )
}

export default Banner
