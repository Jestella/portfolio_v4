import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function FixedItem() {
  return (
    <div className='fixed_item'>
      <button>
        <a href='https://github.com/Jestella' target='_blank'>
          <FaGithub className='fixed_github fixed_icon' />
        </a>
      </button>
      <button>
        <a href='https://linkedin.com/in/jestellaa' target='_blank'>
          <FaLinkedinIn className='fixed_linkedin fixed_icon' />
        </a>
      </button>
    </div>
  );
}

export default FixedItem;
