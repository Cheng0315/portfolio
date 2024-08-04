import '../css/aboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function AboutMe() {
  return (
    <div className='about-me container'>
      <h1>About Me</h1>
      <p>
        I'm a full-stack web developer based in Minneapolis-Saint Paul. 
        I enjoy turning complex problems into simple, beautiful, and easy to read code.
        When not coding, you'll find me cooking, playing the guitar, or jogging in the park.
      </p>
      <p>Interested in working together? We should queue up a chat. I'll buy the coffee.</p>
      <div className='contact'>
        <h1>Contact</h1>
        <p className='phone'> <FontAwesomeIcon icon={faPhone} className='fa-rotate-90'/> Phone: (559) 286-6435</p>
        <p className='email'> <FontAwesomeIcon icon={faEnvelope} />Email: csalvue@gmail.com</p>
        <p className='location'> <FontAwesomeIcon icon={faMapMarkerAlt} />Location: Minneapolis - Saint Paul</p>
      </div>
    </div>
  );
}

export default AboutMe;