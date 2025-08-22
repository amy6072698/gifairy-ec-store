import { createHashRouter, RouterProvider } from "react-router-dom";
import Notfound from "../pages/Notfound";
import { adminRoutes } from "./adminRoutes";
import { frontRoutes } from "./frontRoutes";

const router = createHashRouter([
  frontRoutes,
  adminRoutes,
  {
    path: "/not-found",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
