import './App.css'
import MenuToggle from './components/menu-toggle'
import Media from './components/media'
import Banner from './components/banner'
import Stack from './components/stack'

const App = () => {
  
  const words = ["I'm Wesley Silva", "I'm a Front-end developer.", 'Welcome to my portfolio!', 'Here you will can find all about me.'];
  const viewTime = 2400; 

  return (
    <div className="app ">
      <MenuToggle />
      <Media />
      <Banner  words={words} time={viewTime}/>
      <Stack /> 
    </div>
  )
}

export default App
