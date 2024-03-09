import './App.css'
import MenuToggle from './components/menu-toggle'
import Media from './components/media'
import Banner from './components/banner'
import Stack from './components/stack'
import CodeSample from './components/code-sample'

const App = () => {
  
  const words = ["I'm Wesley Silva", "I'm a Front-end developer", 'Welcome to my portfolio', 'Here you will can find all about me.', 'I hope that you like from explore this portfolio!'];
  const viewTime = 2400; 

  const writing = [`const MenuToggle = () => { \

    const [isShow, setIsShow] = useState(true)
    const [isList, setIsList] = useState(true)
  
    const handleListClick = () => {
      setIsList(!isList)
      setIsShow(!isShow)
    }
  
    let openMenu = < RiMenu2Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" onClick={handleListClick}/>;
    let closeMenu = < RiMenu3Line className="text-gray-200 size-10 cursor-pointer absolute right-0 mx-4" onClick={handleListClick}/>;
  
    return (
      <div className="bg-blue-500 w-full h-16 p-3 relative"> 
        {
        isList ? openMenu : closeMenu
        }
        { isShow ? closeMenu :
          <ul className="bg-gray-300 text-blue-800 font-bold w-60 p-2 py-4 absolute z-10 right-0 top-20 rounded text-center text-lg" >
          <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Home</li>
          <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">About me</li>
          <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Stack</li>
          <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Projects</li>
          <li className="hover:cursor-pointer hover:bg-gray-400 rounded px-12">Interest</li>
          </ul>
        }
      </div>
    )
  }
  
  export default MenuToggle `]
  const viewLettersTime = 80;

  return (
    <div className="app">
      <MenuToggle />
      <Media />
      <Banner  words={words} time={viewTime}/>
      <Stack /> 
      <CodeSample letters={writing} time={viewLettersTime}/>
    </div>
  )
}

export default App
