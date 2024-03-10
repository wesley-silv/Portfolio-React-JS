import './App.css'
import MenuToggle from './components/menu-toggle'
import Media from './components/media'
import Banner from './components/banner'
import Stack from './components/stack'
import CodeSample from './components/code-sample'

const App = () => {
  
  const words = ["I'm Wesley Silva", "I'm a Front-end developer", 'Welcome to my portfolio', 'Here you will can find all about me.', 'I hope that you like from explore this portfolio!'];
  const viewTime = 2400; 

  const writing = [`const updateText = () => {
    if (currentIndex < currentLetters.length) {
      setDisplayedText(currentLetters.substring(0, currentIndex + 1));
      currentIndex++;
    } else {
      currentIndex = 0;
      setIndexLetter((prevIndex) => (prevIndex + 1) % letters.length);
      currentLetters = letters[indexLetter];
      setDisplayedText("");
    }
  }; `]
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
