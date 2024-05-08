
const Description = () => {
  return (
    <div className="my-44 mx-8">
      <section className="flex flex-row max-lg:flex-col justify-between items-center max-lg:mx-4">
        <article className="bg-gray-300 flex flex-col items-center shadow-xl rounded-md p-8 m-4 max-lg:mx-auto lg:h-[24rem] lg:hover:scale-110 duration-200 lg:hover:cursor-pointer">
          <img src="/Wesley S. Conceição.jpg" alt="Imagem de um homem branco de cabelos pretos, ele está usando óculos e sorrindo, está vestindo uma camisa preta." className="rounded-md shadow-xl drop-shadow-lg w-48 h-48"/>
          <h4 className="m-5 text-blue-700 text-2xl text-center font-bold drop-shadow-lg">
          Wesley da Silva 
          </h4>
          <p>
            <span className="text-blue-900 text-lg font-bold">Ciência da computação</span> <br /> Cursando o 5º período pela Universidade Anhembi Morumbi - SP
          </p>
        </article>

        <article className="bg-gray-300 flex flex-col items-center shadow-xl rounded-md p-8 m-4 max-lg:mx-auto lg:h-[24rem] lg:hover:scale-110 duration-200 lg:hover:cursor-pointer">
          <h4 className="m-4 text-blue-700 text-2xl text-center font-bold drop-shadow-lg">
            Sobre mim
          </h4>
          <p className="m-2">
            Desenvolverdor web desde o ano de 2021, onde escolhi fazer minha transição de carreira para a área tecnológica. <br />
            Esta decisão com certeza foi uma das melhores decisões que eu já fiz, pois, ela me mostrou o quanto é gratificante ver tão de perto o resultado de todo o meu trabalho. 
          </p>
          <p className="m-2">
            <span className="text-blue-900 text-lg font-bold">Rocketseat</span> desenvolvimento web focado em JavaScript, React, Vue e Angular <br />
            <span className="text-blue-900 text-lg font-bold">Alura</span> desenvolvimento web focado em Node, Express, Mongo DB, Mongoose e APIs
          </p>
        </article>
        <article className="bg-gray-300 flex flex-col items-center shadow-xl rounded-md p-8 m-4 max-lg:mx-auto lg:h-[24rem] lg:hover:scale-110 duration-200 lg:hover:cursor-pointer">
          <h4 className="m-4 text-blue-700 text-2xl text-center font-bold drop-shadow-lg">
            Competências
          </h4>
          <p className="drop-shadow-lg">
            <span className="text-blue-900 text-lg font-bold">Front-end</span> HTML, CSS, JavaScript, Bootstrap, React, Vue, Angular <br />
            <span className="text-blue-900 text-lg font-bold">Back-end</span> Node JS, Express, Mongo DB, Mongoose e Cors para construção e integração de APIs. <br />
            <span className="text-blue-900 text-lg font-bold">Database</span> MySQL, Maria DB, PostegreSQL e também SQL server. <br />
          </p>
        </article>
      </section>
      <section className="flex flex-row max-lg:flex-col justify-between items-center max-lg:mx-4">
          <article className="bg-gray-300 flex flex-col items-center shadow-xl rounded-md p-8 m-4 max-lg:mx-auto lg:h-[380px] lg:hover:scale-110 duration-200 lg:hover:cursor-pointer">
            <h4 className="m-4 text-blue-700 text-2xl text-center font-bold drop-shadow-lg">
              Experiências
            </h4>
            <p className="drop-shadow-lg">
              <span className="text-blue-900 text-lg font-bold ">Web </span>Proficiência em desenvolvimento front-end na criação de páginas, blogs, posters, anúncios, portifólios, banners e também e-commerce.
              Criando aplicações dos mais diversos tipos, buscando sempre atender de forma clara e concreta todas as pespectivas e projeções estabelecidas na análise do escopo do projeto.  
            </p>
          </article>
        <article className="bg-gray-300 flex flex-col items-center shadow-xl rounded-md p-8 m-4 max-lg:mx-auto lg:h-[380px] lg:hover:scale-110 duration-200 lg:hover:cursor-pointer">
            <h4 className="m-4 text-blue-700 text-2xl text-center font-bold drop-shadow-lg">
              Estudos
            </h4>
            <p className="drop-shadow-lg">
              <span className="text-blue-900 text-lg font-bold">Graduando </span>em Ciência da Computação, onde estou buscando especializar-me dentro do setor tecnológico, melhorar minhas habilidades e desenvolver novas competências pessoais e profissionais.
            </p>
            <p className="drop-shadow-lg">
              <span className="text-blue-900 text-lg font-bold">Inglês </span>em nível técnico, buscando melhorar minhas habilidades linguísticas para atendimento das tendências do mercado tecnológico, tais como, leitura, escrita e conversação. 
            </p>
          </article>
      </section>
    </div>
  )
}

export default Description