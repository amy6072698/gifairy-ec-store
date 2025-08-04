import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";

export const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
};
