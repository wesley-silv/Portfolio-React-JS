import {FaCopyright} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-blue-600 w-full text-white absolute bottom-0 p-4">
      <section className=''>
        <a href="" className='block hover:cursor-pointer border-solid border-b-2'>Contact us</a>
        <a href="" className='block hover:cursor-pointer border-solid border-b-2'>Terms of use</a>
        <a href="" className='block hover:cursor-pointer border-solid border-b-2'>Work with us</a>
        <a href="" className='block hover:cursor-pointer border-solid border-b-2'>About us</a>
        <a href="" className='block hover:cursor-pointer border-solid border-b-4 border-zinc-500'>Accepet</a>
      </section>
    </div>
  )
}

export default Footer;