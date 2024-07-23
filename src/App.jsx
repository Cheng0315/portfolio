import './App.css'
import NavigationBar from './components/NavigationBar'
import AboutMe from './components/AboutMe'
import Intro from './components/Intro'

function App() {
  return (
    <div id='app'>
      <NavigationBar />
      <header>
        <Intro />
      </header>
      <AboutMe />
    </div>
  )
}

export default App
