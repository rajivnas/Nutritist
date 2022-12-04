import Footer from "./share/Footer";
import Navbar from "./share/Navbar";
import Topbar from "./share/Topbar";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
