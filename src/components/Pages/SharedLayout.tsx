import { Outlet } from "react-router-dom";
import StyledNavbar from "../StyledNavbar";
import Footer from "../Footer";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
