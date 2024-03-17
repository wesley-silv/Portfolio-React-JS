import { FaGitAlt, FaSquareGithub, FaConfluence, FaJira, FaBitbucket, FaNpm} from "react-icons/fa6";
import { SiMysql, SiMongodb, SiPostman, SiExpress, SiHeroku, SiAxios } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Tools = () => {
  return (
    <div className="bg-gray-300 p-16 rounded shadow-lg drop-shadow-lg bg-gradient-to-t from-gray-400 to-gray-300">

      <h2 className="text-center text-2xl text-blue-700 font-bold pb-2 uppercase">
        I like from use different tools in my application, here is some hers.
      </h2>
      <h3 className="text-center text-xl text-blue-900 font-bold pb-16">
        Each of them provides better performance for the project.
      </h3>

      <section className="flex flex-col lg:flex-row justify-between uppercase">
        <article className="flex flex-col content-justiy items-center gap-3 my-4">
          <p className="text-xl text-orange-600 font-bold pb-8 lg:pb-16">
            Code monitoring 
          </p>
          <FaGitAlt className="text-[#F05032] size-12 max-sm:size-12" />
          <FaSquareGithub className="text-[#181717] mx-16 size-12 max-md:size-12" />
          <FaBitbucket className="text-[#0052CC] mx-16 size-12 max-md:size-12" />
        </article>

        <article className="flex flex-col content-justify items-center gap-3 my-4">
          <p className="text-xl text-orange-600 font-bold pb-8 lg:pb-16">
            APIs Connection 
          </p>
          <FaNpm className="text-[#CB3837] size-12 max-md:size-12" />
          <SiExpress className="text-[#000000] size-12 max-md:size-12" />
          <SiPostman className="text-[#DD3A0A] size-12 max-md:size-12" />
          <SiHeroku className="text-[#430098] size-12 max-md:size-12" />
        </article>

        <article className="flex flex-col content-justify items-center gap-3 my-4">
          <p className="text-xl text-orange-600 font-bold pb-8 lg:pb-16">
            Database integration
          </p>
          <SiMongodb className="text-[#47A248] size-12 max-md:size-12" />
          <SiMysql className="text-[#4479A1] size-12 max-md:size-12" />
          <BiLogoPostgresql className="text-[#4169E1] size-12 max-md:size-12" />
        </article>

        <article className="flex flex-col content-justify items-center gap-3 my-4">
          <p className="text-xl text-orange-600 font-bold pb-8 lg:pb-16">
            Software management
          </p>
          <FaConfluence className="text-[#172B4D] size-12 max-md:size-12" />
          <FaJira className="text-[#0052CC] size-12 max-md:size-12" />
        </article>
      </section>
    </div>
  )
}

export default Tools