import { lazy } from "react";

const usePages = () => {
  const Home = lazy(() => import("./Pages/Home"));
  const About = lazy(() => import("./Pages/About"));
  const Products = lazy(() => import("./Pages/Products"));
  const Error = lazy(() => import("./Pages/Error"));
  const SharedLayout = lazy(() => import("./Pages/SharedLayout"));
  const Dashboard = lazy(() => import("./Pages/Dashboard"));
  const Login = lazy(() => import("./Pages/Login"));
  const SingleProduct = lazy(() => import("./Pages/SingleProduct"));

  return {
    Home,
    About,
    Products,
    Error,
    SharedLayout,
    Dashboard,
    Login,
    SingleProduct,
  };
};

export default usePages;
