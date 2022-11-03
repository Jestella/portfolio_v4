import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Menu from './Menu';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='nav'>
        <div>
          <Link href='/'>
            <div className='nav-item nav-left'>JE.</div>
          </Link>
        </div>
        <div className='nav-links'>
          <Menu />
        </div>
        <div>
          <Link href='/'>
            <span className='nav-item nav-right'>STELLA</span>
          </Link>
        </div>
        <div className='nav-menu'>
          {toggleMenu ? (
            <FaTimes
              color='#fddb3a'
              size={23}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <FaBars
              color='#fddb3a'
              size={23}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='nav-menu-mobile'>
              <div className='nav-menu-mobile-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
