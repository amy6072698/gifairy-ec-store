import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "../pages/Notfound";
import { adminRoutes } from "./adminRoutes";
import { frontRoutes } from "./frontRoutes";


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
