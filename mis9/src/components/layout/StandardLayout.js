import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

function StandardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[0px]">{children}</div>
      <Footer />
    </div>
  );
}

export default StandardLayout;
