import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AdminSideBar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Products",
      path: "/admin/products",
    },
    {
      name: "Categories",
      path: "/admin/categories",
    },
    {
      name: "Orders",
      path: "/admin/orders",
    }
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between border-b bg-white p-4 md:hidden">
        <h1 className="text-xl font-bold">
          Admin Panel
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r bg-white
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="border-b p-6">
          <h1 className="text-2xl font-bold">
            Admin Panel
          </h1>
        </div>

        {/* Links */}
        <div className="flex-1 p-4">
          <div className="space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 transition ${
                    isActive
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="border-t p-4">
          <button className="w-full rounded-lg bg-red-500 px-4 py-3 text-white transition hover:bg-red-600">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}