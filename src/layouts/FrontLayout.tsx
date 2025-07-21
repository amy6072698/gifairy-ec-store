import { Outlet } from "react-router-dom";
import Header from "../components/front/Header";
import Footer from "../components/front/Footer";

const FrontLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FrontLayout;
