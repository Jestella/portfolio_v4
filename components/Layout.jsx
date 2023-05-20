import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';
import FixedItem from './FixedItem';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className='layout'>
      <Meta />
      <main>{children}</main>
      <FixedItem />
      <Footer />
    </div>
  );
};

export default Layout;
