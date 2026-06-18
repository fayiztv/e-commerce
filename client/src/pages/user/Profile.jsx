import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const formattedDate = new Date(user?.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleLogout = useLogout();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-10 text-4xl font-bold">My Profile</h1>

      {/* Profile Card */}
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Avatar */}
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-200 text-4xl font-bold">
            {user?.name[0]}
          </div>

          {/* User Details */}
          <div className="flex-1">
            <h2 className="mb-3 text-3xl font-bold">{user?.name}</h2>

            <div className="space-y-3 text-gray-600">
              <p>
                <span className="font-semibold">Email:</span> {user?.email}
              </p>

              <p>
                <span className="font-semibold">Phone:</span> {user?.phone}
              </p>

              <p>
                <span className="font-semibold">Joined:</span> {formattedDate}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <button className="rounded-xl bg-black px-8 py-3 text-white transition hover:bg-gray-800">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Account Actions */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div
          onClick={() => navigate("/orders")}
          className="cursor-pointer rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="mb-2 text-xl font-semibold">My Orders</h3>

          <p className="text-gray-500">
            View your order history and track orders.
          </p>
        </div>

        <div className="cursor-pointer rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="mb-2 text-xl font-semibold">Address Book</h3>

          <p className="text-gray-500">Manage your shipping addresses.</p>
        </div>

        <div className="cursor-pointer rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="mb-2 text-xl font-semibold">Change Password</h3>

          <p className="text-gray-500">Update your account password.</p>
        </div>

        <div
          onClick={handleLogout}
          className="cursor-pointer rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="mb-2 text-xl font-semibold text-red-500">Logout</h3>

          <p className="text-gray-500">Sign out from your account.</p>
        </div>
      </div>
    </div>
  );
}
