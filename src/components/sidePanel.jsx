import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import '../css/sidePanel.css';



function SidePanel(props) {
  let sidePanelClasses = props.sidePanel ? "side-panel open": "side-panel";

  return (
    <nav className={sidePanelClasses}>
      <div className='side-panel-links'>
        <div className='side-panel-logo'>
          <a href="/" className='navbar-icon'><FontAwesomeIcon icon={faCodeBranch} size="3x"/></a>
          <a href="/" className='info'>
            <div className='name'>CHENG VUE</div>
            <div className='title'>FULL STACK WEB DEVELOPER</div>
          </a>
        </div>
        <div className="side-panel-anchor-links">
          <AnchorLink href='#intro' onClick={props.closeSidePanel}>HOME</AnchorLink>
          <AnchorLink href='#technical-skills' onClick={props.closeSidePanel} offset='70'>SKILLS</AnchorLink>
          <AnchorLink href='#contact'  onClick={props.closeSidePanel} offset='70'>CONTACT</AnchorLink>
        </div>
      </div>
    </nav>
  );
}

export default SidePanel;