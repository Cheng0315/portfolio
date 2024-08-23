import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/navigationBar.css';

function NavigationBar(props) {

  return (
    <Navbar bg="dark" expand="lg">
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
            <AnchorLink href='#intro' className='nav-link home-fade'>HOME</AnchorLink>
            <Nav.Link href="#projects" className='nav-link projects-fade'>PROJECTS</Nav.Link>
            <AnchorLink href='#technical-skills' className='nav-link skills-fade' offset='70'>SKILLS</AnchorLink>
            <AnchorLink href='#contact' className='nav-link contact-fade' offset='70'>CONTACT</AnchorLink>
            <Nav.Link href="#resume" className='nav-link resume-fade'>RESUME</Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;