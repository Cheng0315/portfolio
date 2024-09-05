import './App.css';
import NavigationBar from './components/navigationBar';
import AboutMe from './components/aboutMe';
import Intro from './components/intro';
import Footer from './components/footer';
import Skills from './components/skills';
import SidePanel from './components/sidePanel';
import { useState } from 'react';
import FadeInSection from './components/fadeInSection';


function App() {
  const [sidePanel, setSidePanel] = useState(false);
  let backdrop; 
  
  if (sidePanel) {
    backdrop = <div className='backdrop' onClick={closeSidePanel}/> 
  }

  function sidePanelHandler() {
    setSidePanel(!sidePanel);
  }

  function closeSidePanel() {
    setSidePanel(false);
  }

  return (
    <div id='app'>
      <NavigationBar sidePanelHandler={sidePanelHandler}/>
      <SidePanel closeSidePanel={closeSidePanel} sidePanel={sidePanel}/>
      <header>
        <Intro />
      </header>
      <main>
        {backdrop}
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <AboutMe />
        </FadeInSection>
      </main>
      <footer>
      <FadeInSection>
        <Footer />
      </FadeInSection>
      </footer>
    </div>
  )
}

export default App
