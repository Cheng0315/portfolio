import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faBars } from '@fortawesome/free-solid-svg-icons';
import SidePanel from './sidePanel';
import { useState } from 'react';
import '../css/navigationBar.css';

function NavigationBar() {
  const [sidePanel, setSidePanel] = useState(false);

  function sidePanelHandler() {
    setSidePanel(!sidePanel);
  }

  function closeSidePanel() {
    setSidePanel(false);
  }


  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <div className="navbar-brand">
            <a href="/"><FontAwesomeIcon icon={faCodeBranch} size="3x"/></a>
            <a href="/" className="info">
              <div className="name">CHENG VUE</div>
              <div className="title">FULL STACK WEB DEVELOPER</div>
            </a>
          </div>
          <FontAwesomeIcon icon={faBars} className="side-panel-bars-icon" size="2x" onClick={sidePanelHandler}/>
          <SidePanel closeSidePanel={closeSidePanel} sidePanel={sidePanel}/>
          <Nav className="ml-auto">
            <Navbar.Collapse id="basic-navbar-nav">
              <AnchorLink href='#intro' className='nav-link'>HOME</AnchorLink>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <AnchorLink href='#technical-skills' className='nav-link' offset='70'>SKILLS</AnchorLink>
              <AnchorLink href='#contact' className='nav-link' offset='70'>CONTACT</AnchorLink>
              <Nav.Link href="#resume">RESUME</Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;