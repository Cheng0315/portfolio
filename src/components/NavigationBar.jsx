import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import '../css/navigationBar.css'

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <div className="navbar-brand">
            <a href="/"><FontAwesomeIcon icon={faCodeBranch} size="3x"/></a>
            <a href="/" className="info">
              <div className="name">CHENG VUE</div>
              <div className="title">FULL STACK WEB DEVELOPER</div>
            </a>
          </div>
          <Nav className="ml-auto">
            <AnchorLink href='#intro' className='nav-link'>HOME</AnchorLink>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <AnchorLink href='#technical-skills' className='nav-link' offset='70'>SKILLS</AnchorLink>
            <AnchorLink href='#contact' className='nav-link' offset='70'>CONTACT</AnchorLink>
            <Nav.Link href="#resume">RESUME</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    
  );
}

export default NavigationBar;