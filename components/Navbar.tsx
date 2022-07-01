import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul className='nav'>
          <li>
            <Link href='/' className='nav-item nav-left'>
              JE.
            </Link>
          </li>
          <ul className='nav-sm-container'>
            <li>
              <Link href='/about' className='nav-sm'>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href='/portfolio' className='nav-sm'>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link href='/devlog' className='nav-sm'>
                DEVLOG
              </Link>
            </li>
            <li>
              <Link href='/lab' className='nav-sm'>
                LAB
              </Link>
            </li>
          </ul>
          <li>
            <Link href='/' className='nav-item nav-right'>
              STELLA
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
