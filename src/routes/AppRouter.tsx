import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "../pages/Notfound";
import { adminRoutes } from "./AdminRoutes";
import { frontRoutes } from "./FrontRoutes";


const router = createBrowserRouter([
  frontRoutes,
  adminRoutes,
  {
    path: "*",
    element: <Notfound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
