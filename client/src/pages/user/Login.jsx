import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Sign in to your account
        </p>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <button
            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?
           <NavLink to={"/register"}>
          <span className="ml-1 cursor-pointer font-medium text-black">
            Register
          </span>
           </NavLink>
        </p>
      </div>
    </div>
  );
}