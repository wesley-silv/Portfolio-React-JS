
const Description = () => {
  return (
    <div className="my-52 mx-12 rounded-l-lg">
      <section className="flex flex-row max-lg:flex-col justify-between items-center max">
        <article className="bg-gray-200 flex flex-col items-center shadow-xl rounded-lg p-4 m-4">
          <img src="" alt="" className="rounded-full w-32 h-32 bg-gray-500"/>
          <h4 className="m-3 text-lg text-center font-bold">
            Ciência da Computação
          </h4>
          <p>
            Cursando o 5° período pela Universidade Anhembi Morumbi - SP
          </p>
          <h4 className="m-3 text-md text-center">
            Inglês intermedirário
          </h4>
        </article>
        <article className="bg-gray-200 flex flex-col items-center shadow-xl rounded-lg p-4 m-4">
          <h4 className="m-4 text-lg text-center font-bold">
            Sobre mim
          </h4>
          <p className="m-3 text-lg">
            Trabalho com desenvolvimento desde o ano de 2021, onde escolhi fazer minha trasição de carreira para a área tecnológica. <br />
          </p>
        </article>
        <article className="bg-gray-200 flex flex-col items-center shadow-xl rounded-lg p-4 m-4">
          <h4 className="m-4 text-lg text-center font-bold">
            Experiências
          </h4>
          <p>
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