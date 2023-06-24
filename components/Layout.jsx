import Meta from "./Meta";
import Footer from "./Footer";
import FixedItem from "./FixedItem";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Meta />
      <main>{children}</main>
      <FixedItem />
      <Footer />
    </div>
  );
};

export default Layout;
