import './App.css'
import MenuToggle from './components/menu-toggle'
import Media from './components/media'
import Banner from './components/banner'
import Stack from './components/stack'
import CodeSample from './components/code-sample'
import Tools from './components/tools'
import Description from './components/description'


const App = () => {
        
  const words = ["Olá, o meu nome é Wesley D. Silva", "Eu Sou Desenvolvedor Front-end Web e Mobile", 'Seja bem-vindo ao meu portifólio', 'Aqui você poderá encontrar tudo sobre mim', 'Espero que você goste de explorar este projeto'];
  const viewTime = 2800; 

  const writing = [`"Para mim programar é alcançar horizontes e lugares fantásticos de um mesmo lugar. Um lugar onde não há limitações, pois, se eu posso pensar eu sou capaz de fazer."`]
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
