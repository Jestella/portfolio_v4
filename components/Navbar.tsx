import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul className='nav'>
          <li>
            <Link href='/'>
              <span className='nav-item nav-left'>JE.</span>
            </Link>
          </li>
          <ul className='nav-sm-container'>
            <li>
              <Link href='/about'>
                <span className='nav-sm'> ABOUT</span>
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>
                <span className='nav-sm'>PORTFOLIO</span>
              </Link>
            </li>
            <li>
              <Link href='/devlog'>
                <span className='nav-sm'> DEVLOG</span>
              </Link>
            </li>
            <li>
              <Link href='/lab'>
                <span className='nav-sm'> LAB</span>
              </Link>
            </li>
          </ul>
          <li>
            <Link href='/'>
              <span className='nav-item nav-right'>STELLA</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
