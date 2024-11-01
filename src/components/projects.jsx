import { FaSquareGithub, FaLink } from 'react-icons/fa6';

export const Projects = () => {
  return (
    <div className="p-12 mx-auto my-20 rounded-lg shadow-lg border-4 border-blue-500 bg-gray-50 max-w-7xl" id='projects'>
      <h2 className="text-blue-700 text-3xl text-center font-bold pb-2 uppercase">Projetos</h2>
      <h3 className="text-center text-xl text-blue-900 font-semibold pb-12">
        Conheça algumas das aplicações que desenvolvi em projetos pessoais, profissionais e colaborativos.
      </h3>

      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white border-2 border-blue-400 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-blue-700 text-2xl font-bold mb-2 text-center">{project.title}</h2>
            <p className="text-gray-700 font-semibold text-center mb-4">{project.techStack}</p>
            <p className="text-gray-600 mb-6 text-justify">{project.description}</p>
            <ul className="flex justify-center gap-6">
              <li>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaSquareGithub className="text-3xl text-blue-700 hover:text-blue-900 transition-colors" />
                </a>
              </li>
              <li>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Project">
                  <FaLink className="text-3xl text-blue-700 hover:text-blue-900 transition-colors" />
                </a>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

// Dados dos projetos (exemplo)
const projects = [
  {
    title: 'KN Leads Docs',
    techStack: 'Mintlify, MDX, Git e GitHub',
    description: 'Documentação de software que utiliza o framework Mintlify para gerar documentação dinâmica e detalhada de processos.',
    githubLink: 'https://github.com/judsonjuniorr/knleads-docs',
    liveLink: 'https://docs.knleads.com/starting/introduction',
  },
  {
    title: 'Calculadora',
    techStack: 'React, React icons, Router e Vite',
    description: 'Aplicação de calculadora em React com interface responsiva e operações matemáticas básicas.',
    githubLink: 'https://github.com/wesley-silv/Calculator-React-JS',
    liveLink: 'https://calculator-react-js-lemon.vercel.app/',
  },
  {
    title: 'Busca CEP',
    techStack: 'React, API, Axios',
    description: 'Projeto de busca de CEP usando integração com API para consulta de endereços em tempo real.',
    githubLink: 'https://github.com/wesley-silv/Search-CEP-React-JS',
    liveLink: 'https://buscador-de-cep-em-react-67h6.vercel.app/',
  },
  {
    title: 'Organograma',
    techStack: 'React, Vite, API',
    description: 'Organograma para visualização de hierarquia organizacional, desenvolvido com integração de API.',
    githubLink: 'https://github.com/wesley-silv/Organogram-React-JS',
    liveLink: 'https://react-app-organo-ct1x-d9922o0b5-wesley-silv.vercel.app/',
  },
];
