import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main><Footer />
    </>
  );
};

export default SharedLayout;
