import Home from "../pages/front/Home";
import About from "../pages/front/About";
import Products from "../pages/front/Products";
import FrontLayout from "../layouts/front/FrontLayout";

export const frontRoutes = {
  path: "/",
  element: <FrontLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
  ],
};
