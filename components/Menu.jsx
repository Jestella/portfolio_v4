import Link from 'next/link';

const Menu = () => {
  return (
    <>
      <p>
        <Link href='/about'>ABOUT</Link>
      </p>
      <p>
        <Link href='/portfolio'>PORTFOLIO</Link>
      </p>
      <p>
        <Link href='/devlog'>DEVLOG</Link>
      </p>
      <p>
        <Link href='/lab'>LAB</Link>
      </p>
    </>
  );
};

export default Menu;
