import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';
import FixedItem from './FixedItem';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Meta />
      <main>{children}</main>
      <FixedItem />
      <Footer />
    </>
  );
};

export default Layout;
