import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
