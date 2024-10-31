const Description = () => {
  return (
    <div className="my-24 mx-8">
      <section className="flex flex-row max-lg:flex-col justify-between items-center max-lg:mx-4 gap-8">
        <article className="bg-gray-100 flex flex-col items-center shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto md:w-full lg:w-[48%]">
          <div className="relative p-1 rounded-lg border-2 border-blue-600 shadow-lg">
            <img
              src="/Wesley S. Conceição.jpg"
              alt="Wesley da Silva Conceição"
              className="rounded-md object-cover w-48 h-48"
            />
          </div>
          <h4 className="mt-6 text-blue-700 text-2xl font-bold text-center">
            Wesley da Silva
          </h4>
          <p className="text-center">
            <span className="text-blue-900 text-xl font-semibold">
              Ciência da Computação
            </span>{" "}
            <br />
            Universidade Anhembi Morumbi - SP
          </p>
        </article>

        <article className="bg-gray-100 shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[48%]">
          <h4 className="mb-4 text-blue-700 text-2xl font-bold text-center">
            Sobre mim
          </h4>
          <p className="leading-relaxed text-gray-700">
            Desenvolvedor web desde 2021, após uma transição de carreira. A
            decisão mostrou-se gratificante, pois permite ver de perto o
            resultado do trabalho. <br />
            <span className="text-blue-900 text-lg font-semibold">
              Rocketseat
            </span>{" "}
            - desenvolvimento Web focado em JavaScript, com React, Vue e Angular.
            <br />
            <span className="text-blue-900 text-lg font-semibold">Alura</span>{" "}
            - back-end com Node, Express, MongoDB, Mongoose e integração de APIs.
          </p>
        </article>
      </section>

      <section className="flex flex-row max-lg:flex-col justify-between items-center max-lg:mx-4 gap-8 mt-12">
        <article className="bg-gray-100 shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[48%]">
          <h4 className="mb-4 text-blue-700 text-2xl font-bold text-center">
            Competências
          </h4>
          <ul className="text-gray-700 space-y-2">
            <li>
              <span className="text-blue-900 font-semibold">Front-end:</span>{" "}
              HTML, CSS, JavaScript, Bootstrap, React, Vue, Angular
            </li>
            <li>
              <span className="text-blue-900 font-semibold">Back-end:</span>{" "}
              Node.js, Express, MongoDB, Mongoose, APIs REST
            </li>
            <li>
              <span className="text-blue-900 font-semibold">Database:</span>{" "}
              MySQL, MariaDB, PostgreSQL, SQL
            </li>
          </ul>
        </article>

        <article className="bg-gray-100 shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[48%]">
          <h4 className="mb-4 text-blue-700 text-2xl font-bold text-center">
            Experiências
          </h4>
          <p className="leading-relaxed text-gray-700">
            <span className="text-blue-900 font-semibold">KN Leads:</span>{" "}
            desenvolvimento front-end de páginas e e-commerce, criação de
            aplicações focadas na experiência do usuário.
            <br />
            <span className="text-blue-900 font-semibold">Gerenciamento:</span>{" "}
            monitoramento e manutenção de radares de tráfego, controle de redes,
            gestão de atividades e orçamentos.
          </p>
        </article>

        <article className="bg-gray-100 shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[48%]">
          <h4 className="mb-4 text-blue-700 text-2xl font-bold text-center">
            Estudos
          </h4>
          <p className="leading-relaxed text-gray-700">
            <span className="text-blue-900 font-semibold">Graduando</span> em
            Ciência da Computação, aprimorando habilidades técnicas e
            profissionais.
            <br />
            <span className="text-blue-900 font-semibold">Inglês:</span> nível
            técnico, focado em leitura, escrita e conversação.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Description;
