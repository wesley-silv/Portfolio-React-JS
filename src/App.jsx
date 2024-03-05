import './App.css'
import MenuToggle from './components/menu-toggle'
import Media from './components/media'
import Banner from './components/banner'
import Footer from './components/footer'
import Stack from './components/stack'

const App = () => {
  
  return (
    <div className="app ">
      <MenuToggle />
      <Media />
      <Banner />
      <Stack /> 
      <Footer />
    </div>
  )
}

export default App
