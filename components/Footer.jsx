import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <p className='footer-message'>I love coffee chats!</p>

        <div className='contact-items'>
          <div className='contact-item'>
            <a
              href='https://github.com/Jestella'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub className='socialmedia' />
            </a>
          </div>

          <div className='contact-item'>
            <a
              href='https://linkedin.com/in/jestellaa'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn className='socialmedia' />
            </a>
          </div>
          <div className='contact-item'>
            <a
              href='mailto:je.stella.lee@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaEnvelope className='socialmedia mail' />
            </a>
          </div>
        </div>

        <p className='copyright'>© STELLA LEE {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
