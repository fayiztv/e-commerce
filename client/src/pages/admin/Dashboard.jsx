import AdminProductCard from "../../components/admin/AdminProductCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="mt-2 text-gray-500">Welcome back, Admin</p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">Total Products</p>

          <h2 className="mt-3 text-3xl font-bold">120</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">Categories</p>

          <h2 className="mt-3 text-3xl font-bold">8</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">Orders</p>

          <h2 className="mt-3 text-3xl font-bold">56</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">Users</p>

          <h2 className="mt-3 text-3xl font-bold">25</h2>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-4">Order ID</th>

                <th className="pb-4">Customer</th>

                <th className="pb-4">Amount</th>

                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">ORD001</td>

                <td>John</td>

                <td>₹999</td>

                <td>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                    Delivered
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-4">ORD002</td>

                <td>Alex</td>

                <td>₹1499</td>

                <td>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-600">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest Products */}

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold">Latest Products</h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
             <AdminProductCard/>
          ))}
        </div>
      </div>
    </div>
  );
}
