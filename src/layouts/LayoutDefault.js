import { Outlet } from "react-router-dom";
import Preloader from "../components/preloader/Preloader";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
const LayoutDefault = () => {
  return (
    <>
      <Preloader />
      <header>
        <Navigation color="black" />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
export default LayoutDefault;
