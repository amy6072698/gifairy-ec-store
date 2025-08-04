import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const FrontLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28 md:pt-[158px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FrontLayout;
