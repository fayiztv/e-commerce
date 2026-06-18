import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/orders", label: "Orders" },
    { to: "/cart", label: "Cart" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Your Store
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => {
            if (
              !user &&
              (item.label === "Orders" ||
                item.label === "Cart" ||
                item.label === "Profile")
            ) {
              return null;
            }

            return (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            );
          })}

          {!user && (
            <Link
              to="/login"
              className="rounded-lg bg-black px-5 py-2 text-white"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-5 border-t px-5 py-5 items-center md:hidden">
          {navLinks.map((item) => {
            if (!user && (item.label === "Orders" || item.label === "Cart")) {
              return null;
            }

            return (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            );
          })}

          {!user && (
            <Link
              to="/login"
              className="rounded-lg bg-black px-5 py-2 text-white"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
