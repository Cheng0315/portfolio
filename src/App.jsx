import './App.css'
import NavigationBar from './components/NavigationBar'
import AboutMe from './components/AboutMe'
import Intro from './components/Intro'
import Footer from './components/Footer'

function App() {
  return (
    <div id='app'>
      <NavigationBar />
      <header>
        <Intro />
      </header>
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
