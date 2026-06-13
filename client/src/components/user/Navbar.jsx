import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900"
        >
          Your Store
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/orders">Orders</Link>

          <Link to="/cart" className="relative">
            Cart
            <span className="absolute -right-4 -top-2 rounded-full bg-black px-2 text-xs text-white">
              2
            </span>
          </Link>

          <Link
            to="/login"
            className="rounded-lg bg-black px-5 py-2 text-white"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-5 border-t px-5 py-5 md:hidden">

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/orders">Orders</Link>

          <Link to="/cart">Cart</Link>

          <Link
            to="/login"
            className="rounded-lg bg-black py-3 text-center text-white"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}