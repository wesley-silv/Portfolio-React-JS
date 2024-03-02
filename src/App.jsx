import './App.css'
import MenuToggle from './components/menu-toggle'
import Media from './components/media'
import Banner from './components/banner'
import Footer from './components/footer'

const App = () => {
  
  return (
    <div className="app ">
      <MenuToggle />
      <Media />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
