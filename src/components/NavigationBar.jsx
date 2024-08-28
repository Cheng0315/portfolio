import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/navigationBar.css';
import { useEffect, useState } from 'react';

function NavigationBar(props) {

  const [topOfPage, setTopOfPage] = useState(true);
  
  useEffect(() => {
    function handleNavBarTransparency() {
      const windowIsOnTopOfPage = window.scrollY < 1;

      if (windowIsOnTopOfPage !== topOfPage) {
        setTopOfPage(windowIsOnTopOfPage);
      }
    }

    document.addEventListener('scroll', handleNavBarTransparency);

    return () => {
      document.removeEventListener('scroll', handleNavBarTransparency);
    };
  }, [topOfPage]);

  let navbarColor = 'fixed-top navbar-transparent';

  if (topOfPage === false) {
    navbarColor = 'fixed-top navbar-colored';
  }

  return (
    <Navbar bg="dark" expand="lg" className={navbarColor}>
      <Container>
        <div className="navbar-brand brand-fade">
          <a href="/"><FontAwesomeIcon icon={faCodeBranch} size="3x"/></a>
          <a href="/" className="info">
            <div className="name">CHENG VUE</div>
            <div className="title">FULL STACK WEB DEVELOPER</div>
          </a>
        </div>
        <FontAwesomeIcon icon={faBars} className="side-panel-bars-icon" size="2x" onClick={props.sidePanelHandler}/>
        <Nav className="ml-auto">
          <Navbar.Collapse id="basic-navbar-nav">
            <AnchorLink href='#intro' id="home-fade" className='nav-link'>HOME</AnchorLink>
            <Nav.Link href="#projects" id="projects-fade" className='nav-link'>PROJECTS</Nav.Link>
            <AnchorLink href='#technical-skills' id="skills-fade" className='nav-link' offset='70'>SKILLS</AnchorLink>
            <AnchorLink href='#contact' id="contact-fade" className='nav-link' offset='70'>CONTACT</AnchorLink>
            <Nav.Link href="#resume" id="resume-fade" className='nav-link'>RESUME</Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;