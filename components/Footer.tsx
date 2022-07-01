import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <h3>I love coffee chats!</h3>

        <div className='contact-items'>
          <div className='contact-item'>
            <a href='https://github.com/Jestella' target='_blank'>
              <FaGithub className='socialmedia' />
            </a>
          </div>

          <div className='contact-item'>
            <a href='https://linkedin.com/in/jestellaa' target='_blank'>
              <FaLinkedinIn className='socialmedia' />
            </a>
          </div>
          <div className='contact-item'>
            <a href='mailto:je.stella.lee@gmail.com' target='_blank'>
              <FaEnvelope className='socialmedia mail' />
            </a>
          </div>
        </div>

        <p className='gray-light copyright'>
          © STELLA LEE {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
