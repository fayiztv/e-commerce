export default function AdminOrderDetails() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Order Details</h1>

        <p className="mt-2 text-gray-500">Order #ORD-20260615-1234</p>
      </div>

      {/* Top Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Order Info */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold">Order Information</h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-500">Order Number</p>

              <p className="font-medium">ORD-20260615-1234</p>
            </div>

            <div>
              <p className="text-gray-500">Total Amount</p>

              <p className="font-medium">₹3499</p>
            </div>

            <div className="flex gap-3 items-center">
              <p className="text-gray-500">Status</p>

              <span className="rounded-full bg-yellow-100 px-4 py-2 text-yellow-700">
                Pending
              </span>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold">Customer Information</h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-500">Name</p>

              <p className="font-medium">John Doe</p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>

              <p className="font-medium">john@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>

              <p className="font-medium">+91 9876543210</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-bold">Products Ordered</h2>

        <div className="space-y-5">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex flex-col gap-5 rounded-xl border p-5 md:flex-row md:items-center"
            >
              {/* Image */}
              <div className="h-28 w-28 rounded-xl bg-gray-200"></div>

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">iPhone 16 Pro Max</h3>

                <p className="mt-2 text-gray-500">Electronics</p>

                <p className="mt-2">Quantity: 2</p>
              </div>

              <div className="text-xl font-bold">₹149999</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Address */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-bold">Shipping Address</h2>

        <div className="space-y-2">
          <p>John Doe</p>

          <p>ABC House, Kannur</p>

          <p>Kerala - 670142</p>

          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      {/* Update Status */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-bold">Update Order Status</h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <select className="flex-1 rounded-xl border px-4 py-3">
            <option>Pending</option>

            <option>Confirmed</option>

            <option>Processing</option>

            <option>Shipped</option>

            <option>Delivered</option>

            <option>Cancelled</option>
          </select>

          <button className="rounded-xl bg-black px-8 py-3 text-white transition hover:bg-gray-800">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
