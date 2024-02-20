import {FaCopyright} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-blue-600 h-32 w-full text-white absolute bottom-0 p-4">
      <p className=''>
        <FaCopyright  className='inline-block'/> All rights reserved
      </p>
    </div>
  )
}

export default Footer;