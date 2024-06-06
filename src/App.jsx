import './App.css'
import Navbar from './components/navbar'
import Media from './components/media'
import Banner from './components/banner'
import Stack from './components/stack'
import CodeSample from './components/code-sample'
import Tools from './components/tools'
import Description from './components/description'
import { Projects } from './components/projects'


const App = () => {
  

const words = ['Olá, o meu nome é Wesley Silva!', 'Eu Sou Desenvolvedor Web Front-end', 'Seja bem-vindo ao meu portifólio', 'Aqui você saberá mais sobre mim', 'Espero que você goste deste projeto'];
  const viewTime = 3000; 


  const writing = [`"Programar é alcançar horizontes e lugares fantásticos, seja criando ou reinventando uma nova perspectiva. Transformando projetos de papel em um organismo funcional, onde a cada contato com a interface haja uma descoberta inédita."`]
  const viewLettersTime = 100;

  return (
    <div className="app">
      <Navbar />
      <Media />
      <Banner  words={words} time={viewTime}/>
      <Description />
      <CodeSample letters={writing} time={viewLettersTime}/>
      <Stack /> 
      <Tools />
      <Projects />
    </div>
  )
}

export default App
