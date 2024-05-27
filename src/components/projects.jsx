import { FaGithub, FaHardDrive} from 'react-icons/fa6'

export const Projects = () => {
  return (
    <div className="p-12 mx-8 my-28 rounded-md shadow-lg drop-shadow-lg border-solid border-4 border-blue-500 bg-gray-100"> 
        <h2 className='text-blue-700 text-2xl text-center font-bold drop-shadow-lg uppercase'>
          Projetos
        </h2>
        <h3 className="text-center text-xl text-blue-900 font-bold pb-16">
            Esta é minha seção de projetos desenvolvidos como Desenvolvedor Front-end
        </h3>
      <section className='flex flex-row max-lg:flex-col justify-between items-center'>
        <article className='m-4 p-8 widht-auto rounded-md shadow-lg drop-shadow-lg border-solid border-2 border-blue-500 hover:bg-blue-200 hover:scale-125 duration-200 easy-in-out'>
          <h2>
            Titulo: 
          </h2>
          <img src="" alt="imagem do projeto" />
          <p>
            Description: 
          </p>
          <ul className='flex gap-2'>
            <li><a href=""></a>
              <FaGithub />
            </li>
            <li><a href=""></a>
              <FaHardDrive />
            </li>
          </ul>
        </article>
        <article className='m-4 p-8 widht-auto rounded-md shadow-lg drop-shadow-lg border-solid border-2  border-blue-500 hover:bg-blue-200 hover:scale-125 duration-200 easy-in-out'>
          <h2>
            Titulo
          </h2>
          <img src="" alt="imagem do projeto" />
          <p>
            Description: 
          </p>
          <ul className='flex gap-2'>
            <li><a href=""></a>
              <FaGithub />
            </li>
            <li><a href=""></a>
              <FaHardDrive />
            </li>
          </ul>
        </article>
        <article className='m-4 p-8 widht-auto rounded-md shadow-lg drop-shadow-lg border-solid border-2 border-blue-500 hover:bg-blue-200 hover:scale-125 duration-200 easy-in-out'>
          <h2>
            Titulo
          </h2>
          <img src="" alt="imagem do projeto" />
          <p>
            Description: 
          </p>
          <ul className='flex gap-2'>
            <li><a href=""></a>
              <FaGithub />
            </li>
            <li><a href=""></a>
              <FaHardDrive />
            </li>
          </ul>
        </article>
        <article className='m-4 p-8 widht-auto rounded-md shadow-lg drop-shadow-lg border-solid border-2 border-blue-500 hover:bg-blue-200 hover:scale-125 duration-200 easy-in-out'>
          <h2>
            Titulo
          </h2>
          <img src="" alt="imagem do projeto" />
          <p>
            Description: 
          </p>
          <ul className='flex gap-2'>
            <li><a href=""></a>
              <FaGithub />
            </li>
            <li><a href=""></a>
              <FaHardDrive />
            </li>
          </ul>
        </article>
      </section>
    </div>
  )
}