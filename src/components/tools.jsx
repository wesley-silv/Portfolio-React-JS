import { FaGitAlt, FaSquareGithub, FaConfluence, FaJira, FaBitbucket, FaNpm} from "react-icons/fa6";
import { SiMysql, SiMongodb, SiPostman, SiExpress, SiHeroku, SiAxios } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";



const Tools = () => {
  return (
    <div className="bg-gray-300 p-16">
      <h2 className="text-center text-2xl text-blue-700 font-bold pb-2 uppercase">
        I like from use different tools in my application, here is some hers.
      </h2>
      <h3 className="text-center text-xl text-blue-900 font-bold pb-16">
      Each of them provides better performance for the project.
      </h3>
      <section className="flex space-x-32">
        <article className="">
          <p className="text-center text-xl text-orange-600 font-bold pb-16">
            Code monitoring 
          </p>
          <FaGitAlt className="text-[#F05032] m-2 size-12 max-sm:size-24" />
          <FaSquareGithub className="text-[#181717] m-2 size-12 max-sm:size-24" />
          <FaBitbucket className="text-[#0052CC] m-2 size-12 max-sm:size-24" />
        </article>
        <article>
          <p className="text-center text-xl text-orange-600 font-bold pb-16">
            APIs Connection 
          </p>
          <FaNpm className="text-[#CB3837] m-2 size-12 max-sm:size-24" />
          <SiExpress className="text-[#000000] m-2 size-12 max-sm:size-24" />
          <SiPostman className="text-[#DD3A0A] m-2 size-12 max-sm:size-24" />
          <SiHeroku className="text-[#430098] ray-500 m-2 size-12 max-sm:size-24" />
        </article>
        <article>
          <p className="text-center text-xl text-orange-600 font-bold pb-16">
            Database integration
          </p>
          <SiMongodb className="text-[#47A248] m-2 size-12 max-sm:size-24" />
          <SiMysql className="text-[#4479A1] m-2 size-12 max-sm:size-24" />
          <BiLogoPostgresql className="text-[#4169E1] m-2 size-12 max-sm:size-24" />
        </article>
        <article>
          <p className="text-center text-xl text-orange-600 font-bold pb-16">
            Software management
          </p>
          <FaConfluence className="text-[#172B4D] m-2 size-12 max-sm:size-24" />
          <FaJira className="text-[#0052CC] m-2 size-12 max-sm:size-24" />
        </article>
      </section>
    </div>
  )
}

export default Tools