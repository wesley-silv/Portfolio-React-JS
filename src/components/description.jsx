
const Description = () => {
  return (
    <div className="my-52 mx-8">
      <section className="flex flex-row max-lg:flex-col justify-between items-center max-lg:mx-4">

        <article className="bg-gray-200 flex flex-col items-center shadow-xl rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[50%] lg:h-[380px] lg:hover:scale-110 lg:hover:cursor-pointer lg:hover:text-blue-700 duration-100">
          <img src="/Wesley S. Conceição.jpg" alt="Imagem de um homem branco de cabelos pretos, ele está usando óculos e sorrindo, está vestindo uma camisa preta." className="rounded-full shadow-xl drop-shadow-lg w-48 h-48"/>
          <h4 className="m-4 text-lg text-center font-bold drop-shadow-lg">
            Ciência da Computação
          </h4>
          <p className="drop-shadow-lg">
            Cursando o 5° período / Universidade Anhembi Morumbi - SP
          </p>
        </article>

        <article className="bg-gray-200 flex flex-col items-center shadow-xl rounded-lg p-8 m-4 max-lg:mx-auto lg:h-[380px] lg:hover:scale-110 lg:hover:cursor-pointer lg:hover:text-blue-700 duration-100">
          <h4 className="m-4 text-lg text-center font-bold drop-shadow-lg">
            Sobre mim
          </h4>
          <p className="drop-shadow-lg">
            Trabalho com desenvolvimento de software desde o ano de 2021, onde escolhi fazer minha trasição de carreira para a área tecnológica. <br />
            Esta decisão, com certeza, foi uma das melhores decisões que já fiz, pois me mostrou o quanto é gratificante ver tão de perto todo o resultado de todo o meu trabalho. 
          </p>
        </article>
        
        <article className="bg-gray-200 flex flex-col items-center shadow-xl rounded-lg p-8 m-4 max-lg:mx-auto lg:h-[380px] lg:hover:scale-110 lg:hover:cursor-pointer lg:hover:text-blue-700 duration-100">
          <h4 className="m-4 text-lg text-center font-bold drop-shadow-lg">
            Experiências
          </h4>
          <p className="drop-shadow-lg">
            Desenvolvimento Frontend com uso de HTML, CSS, JavaScript, Bootstrap e React. <br />
            Desenvolvimento Backend com uso de Node e Express para construção e integração de APIs. <br />
            Manipulação e integração com bancos de dados MySQL, MongoDB e PostgreSQL. <br />
            Análise de requisitos, definição do escopo do projeto e elaboração da documentação.
          </p>
        </article>
        
      </section>
    </div>
  )
}

export default Description