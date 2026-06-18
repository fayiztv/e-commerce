import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { loading, register, user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register({ name, email, password, phone });
    if (res.success) {
      navigate("/");
    } else {
      setMessage(res.message || "Unable to register");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">Create Account</h1>

        <p className="mb-6 text-center text-gray-500">
          Register to continue shopping
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>

            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Phone number</label>

            <input
              type="text"
              value={phone}
              maxLength={10}
              placeholder="Enter your phone number"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>

            <input
              type="password"
              value={password}
              placeholder="Create password"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {message && (
            <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-red-700">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
          >
            {loading ? "Registering account..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <NavLink to={"/login"}>
            <span className="ml-1 cursor-pointer font-medium text-black">
              Login
            </span>
          </NavLink>
        </p>
      </div>
    </div>
  );
}
