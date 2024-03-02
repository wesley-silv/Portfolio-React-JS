import {FaCopyright} from 'react-icons/fa'

const Footer = () => {

  const copyRight = '2024, All rigths reserved.'

  return (
    <div className="bg-blue-600 w-full text-white absolute bottom-0 p-4">
      <article className='text-center text-gray-300'>
        <FaCopyright className='inline-block m-2' size={16} />
        <span className='inline-block'>{copyRight}</span>
      </article>
    </div>
  )
}

export default Footer;