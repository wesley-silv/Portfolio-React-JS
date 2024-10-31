import { FaSquareGithub, FaLink } from 'react-icons/fa6';

export const Projects = () => {
  return (
    <div className="p-12 mx-8 my-40 rounded-lg shadow-lg border-4 border-blue-500 bg-gray-100"> 
      <h2 className="text-blue-700 text-2xl text-center font-bold uppercase">Projetos</h2>
      <h3 className="text-center text-xl text-blue-900 font-bold pb-8">
        Esta seção contém algumas aplicações desenvolvidas, incluindo projetos pessoais, profissionais e colaborativos.
      </h3>

      <section className="flex flex-wrap justify-between gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md border-2 border-blue-500 flex flex-col items-center"
          >
            <h2 className="text-blue-700 text-xl font-bold mb-2 text-center">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.techStack}</p>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <ul className="flex gap-4">
              <li>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaSquareGithub className="text-2xl text-blue-700 hover:text-blue-900 transition-colors" />
                </a>
              </li>
              <li>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaLink className="text-2xl text-blue-700 hover:text-blue-900 transition-colors" />
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
    description: 'Documentação de softwares',
    githubLink: 'https://github.com/judsonjuniorr/knleads-docs',
    liveLink: 'https://docs.knleads.com/starting/introduction',
  },
  {
    title: 'Calculadora',
    techStack: 'React, React icons, router e Vite',
    description: 'Projeto pessoal',
    githubLink: 'https://github.com/wesley-silv/Calculator-React-JS',
    liveLink: 'https://calculator-react-js-lemon.vercel.app/',
  },
  {
    title: 'Busca CEP',
    techStack: 'React, React icons, API e Axios',
    description: 'Integração com API',
    githubLink: 'https://github.com/wesley-silv/Search-CEP-React-JS',
    liveLink: 'https://buscador-de-cep-em-react-67h6.vercel.app/',
  },
  {
    title: 'Organograma',
    techStack: 'React, Vite, API, Git e GitHub',
    description: 'Projeto Pessoal',
    githubLink: 'https://github.com/wesley-silv/Organogram-React-JS',
    liveLink: 'https://react-app-organo-ct1x-d9922o0b5-wesley-silv.vercel.app/',
  },
];
