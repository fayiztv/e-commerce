import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/admin/AdminSideBar";

export default function AdminLayout() {
  return (
    <div>
      <AdminSideBar />

      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
