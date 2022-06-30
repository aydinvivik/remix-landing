import Header from "../header";
import Footer from "../footer";

export default function Layout({ children }) {
  return (
    <div id="page" className="site">
      <Header />
      <div id="main" className="wrapper">
        {children}
      </div>
      <Footer />
    </div>
  )
}