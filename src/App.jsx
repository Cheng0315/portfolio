import './App.css'
import NavigationBar from './components/navigationBar'
import AboutMe from './components/aboutMe'
import Intro from './components/intro'
import Footer from './components/footer'
import Skills from './components/skills'

function App() {
  return (
    <div id='app'>
      <NavigationBar />
      <header>
        <Intro />
      </header>
      <main>
        <Skills />
        <AboutMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
