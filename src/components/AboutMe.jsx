import '../css/aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
  return (
    <section id='contact' className='contact container'> 
      <div className='about-me-container'>
        <div className='about-me'> 
          <div className='img-and-social'>
            <img src='https://i.imgur.com/N8vkute.jpg' alt='Cheng Vue'/>
            <div className='social'>
              <a href='https://www.linkedin.com/in/cheng-vue-162b10180/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
              <a href='https://github.com/Cheng0315' target='_blank'>
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
            </div>
          </div>
          <div className='about-me-info'>
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
        </div>
      </div>
    </section>
  );
}

export default AboutMe;