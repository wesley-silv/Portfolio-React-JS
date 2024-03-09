import React, {useState, useEffect} from "react"

const Banner = ({words, time}) => {

  const [indexWord, setIndexWord] = useState(0)

  useEffect(() => {
    const defineInterval = setInterval(() => {
      setIndexWord((prevIndice) => (prevIndice + 1) % words.length)
    }, time)
    
    return () => clearInterval(defineInterval)
  }, [words, time])

  return (
    
    <div className="mx-28 mb-12">
      <h1 className="mb-4 text-5xl font-extrabold italic text-indigo-800 drop-shadow-lg">
      {words[indexWord]}
      </h1>
      <h2 className="text-2xl font-bold italic text-indigo-500 mx-10">
        Navigate for all available content!
      </h2>
    </div>
  )
}

export default Banner
