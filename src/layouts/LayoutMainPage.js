import { Link, Outlet } from "react-router-dom";
import "./styles.css";
import Preloader from "../components/preloader/Preloader";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import SideCart from "../components/sideCart/sideCart";
const LayoutMainPage = () => {
  return (
    <>
      <Preloader />
      <header className="main_header">
        <div className="main_header_back" />
        <Navigation color="white" />
        <div className="main_header_content">
          <div>
            <Link
              to="/catalog"
              state={{ category: "aroma" }}
              className="main_header_dot"
            >
              <div />
            </Link>
            <div className="main_header_dot_text">
              <Link to="/catalog" state={{ category: "aroma" }}>
                Ароматы
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/catalog"
              state={{ category: "bedding" }}
              className="main_header_dot"
            >
              <div />
            </Link>
            <div className="main_header_dot_text">
              <Link to="/catalog" state={{ category: "bedding" }}>
                Постельное белье
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/catalog"
              state={{ category: "acсessories" }}
              className="main_header_dot"
            >
              <div />
            </Link>
            <div className="main_header_dot_text">
              <Link to="/catalog" state={{ category: "acсessories" }}>
                Акссесуары
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/catalog"
              state={{ category: "clothes" }}
              className="main_header_dot"
            >
              <div />
            </Link>
            <div className="main_header_dot_text">
              <Link to="/catalog" state={{ category: "clothes" }}>
                Одежда
              </Link>
            </div>
          </div>
          <img className="main_header_logo" src="/icons/logo.svg" />
        </div>
      </header>
      <SideCart />
      <Outlet />
      <Footer />
    </>
  );
};
export default LayoutMainPage;
