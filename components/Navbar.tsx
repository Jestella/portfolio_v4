import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>JE.</Link>
        </li>
        <li>
          <Link href='/about'>ABOUT</Link>
        </li>
        <li>
          <Link href='/portfolio'>PORTFOLIO</Link>
        </li>
        <li>
          <Link href='/devlog'>DEVLOG</Link>
        </li>
        <li>
          <Link href='/lab'>LAB</Link>
        </li>
        <li>
          <Link href='/'>STELLA</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
