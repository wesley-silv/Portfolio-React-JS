import './App.css'
import MenuToggle from './components/menu-toggle'
import Media from './components/media'
import Banner from './components/banner'
import Stack from './components/stack'
import CodeSample from './components/code-sample'
import Tools from './components/tools'
import Description from './components/description'

const App = () => {
  
const words = ["I'm Wesley Silva", "I'm a Front-end developer", 'Welcome to my portfolio', 'Here you will can find all about me.', 'I hope that you like from explore this portfolio!'];
  const viewTime = 2800; 

  const writing = [`"The more incredible from programing are in the transformation of a white board in a fantastic layout. It's the more gratifying, give live to to the nothing."`]
  const viewLettersTime = 100;

  return (
    <div className="app">
      <MenuToggle />
      <Media />
      <Banner  words={words} time={viewTime}/>
      <Description />
      <CodeSample letters={writing} time={viewLettersTime}/>
      <Stack /> 
      <Tools />
    </div>
  )
}

export default App
