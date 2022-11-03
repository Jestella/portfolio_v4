import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function FixedItem() {
  return (
    <div className='fixed-item'>
      <button>
        <a href='https://github.com/Jestella' target='_blank' rel='noreferrer'>
          <FaGithub className='fixed-github fixed-icon' />
        </a>
      </button>
      <button>
        <a
          href='https://linkedin.com/in/jestellaa'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedinIn className='fixed-linkedin fixed-icon' />
        </a>
      </button>
    </div>
  );
}

export default FixedItem;
