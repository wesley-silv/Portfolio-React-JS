import './App.css'
import Footer from './components/footer'
import SuspenseMenu from './components/header'
import Media from './components/media'

const App = () => {
  
  return (
    <div className="app ">
      <SuspenseMenu />
      <Media />
      <Footer />
    </div>
  )
  
}

export default App
