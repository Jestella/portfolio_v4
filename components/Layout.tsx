import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';
import FixedItem from './FixedItem';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <FixedItem />
      <Footer />
    </>
  );
};

export default Layout;
