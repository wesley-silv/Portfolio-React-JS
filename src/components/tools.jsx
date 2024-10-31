import { FaGitAlt, FaSquareGithub, FaConfluence, FaJira, FaBitbucket, FaNpm } from "react-icons/fa6";
import { SiMysql, SiMongodb, SiPostman, SiExpress, SiHeroku, SiAxios, SiPrisma, SiPnpm } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Tools = () => {
  return (
    <div className="p-12 mx-8 my-16 rounded-md shadow-lg drop-shadow-lg bg-gradient-to-b from-blue-200 to-gray-400">
      <h2 className="text-center text-3xl text-blue-700 font-bold pb-2 uppercase">
        Ferramentas utilizadas no desenvolvimento de aplicações
      </h2>
      <h3 className="text-center text-lg text-blue-900 font-semibold pb-12">
        Cada software possui características únicas que melhoram o desempenho no desenvolvimento de projetos
      </h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article className="flex flex-col items-center p-6 bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200">
          <p className="text-xl text-orange-600 font-bold pb-4 text-center">
            Monitoramento de código
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
              <FaGitAlt className="text-[#F05032] size-12" /> {/* Git */}
            </a>
            <a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer">
              <FaSquareGithub className="text-[#181717] size-12" /> {/* GitHub */}
            </a>
            <a href="https://confluence.atlassian.com/bitbucket/bitbucket-cloud-documentation-221449099.html" target="_blank" rel="noopener noreferrer">
              <FaBitbucket className="text-[#0052CC] size-12" /> {/* Bitbucket */}
            </a>
          </div>
        </article>

        <article className="flex flex-col items-center p-6 bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200">
          <p className="text-xl text-orange-600 font-bold pb-4 text-center">
            Conexão de APIs
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href="https://docs.npmjs.com/" target="_blank" rel="noopener noreferrer">
              <FaNpm className="text-[#CB3837] size-12" /> {/* NPM */}
            </a>
            <a href="https://expressjs.com/en/starter/installing.html" target="_blank" rel="noopener noreferrer">
              <SiExpress className="text-[#000000] size-12" /> {/* Express */}
            </a>
            <a href="https://www.postman.com/postman/workspace/postman-docs/overview" target="_blank" rel="noopener noreferrer">
              <SiPostman className="text-[#FF6C37] size-12" /> {/* Postman */}
            </a>
            <a href="https://devcenter.heroku.com/categories/reference" target="_blank" rel="noopener noreferrer">
              <SiHeroku className="text-[#430098] size-12" /> {/* Heroku */}
            </a>
            <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer">
              <SiAxios className="text-[#5A29E3] size-12" /> {/* Axios */}
            </a>
          </div>
        </article>

        <article className="flex flex-col items-center p-6 bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200">
          <p className="text-xl text-orange-600 font-bold pb-4 text-center">
            Integração com banco de dados
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
              <SiMongodb className="text-[#47A248] size-12" /> {/* MongoDB */}
            </a>
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
              <SiMysql className="text-[#4479A1] size-12" /> {/* MySQL */}
            </a>
            <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
              <BiLogoPostgresql className="text-[#336791] size-12" /> {/* PostgreSQL */}
            </a>
            <a href="https://www.prisma.io/docs/" target="_blank" rel="noopener noreferrer">
              <SiPrisma className="text-[#2D3748] size-12" /> {/* Prisma */}
            </a>
          </div>
        </article>

        <article className="flex flex-col items-center p-6 bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200">
          <p className="text-xl text-orange-600 font-bold pb-4 text-center">
            Gerenciamento de softwares
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href="https://confluence.atlassian.com/doc/confluence-user-documentation-724764032.html" target="_blank" rel="noopener noreferrer">
              <FaConfluence className="text-[#172B4D] size-12" /> {/* Confluence */}
            </a>
            <a href="https://www.atlassian.com/software/jira/guides" target="_blank" rel="noopener noreferrer">
              <FaJira className="text-[#0052CC] size-12" /> {/* Jira */}
            </a>
            <a href="https://pnpm.io/pt/installation" target="_blank" rel="noopener noreferrer">
              <SiPnpm className="text-[#cbd71c] size-12" /> {/* PNPM */}
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Tools;
