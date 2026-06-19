export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          My Orders
        </h1>

        <p className="mt-2 text-gray-500">
          View and track your previous orders
        </p>

      </div>

      {/* Orders */}
      <div className="space-y-6">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="
              rounded-2xl
              border
              bg-white
              p-6
              shadow-sm
              transition
              hover:shadow-md
            "
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              {/* Left */}
              <div className="space-y-3">

                <h2 className="text-2xl font-bold">
                  Order #ORD-20260615-1234
                </h2>

                <p className="text-gray-500">
                  15 June 2026
                </p>

                <p className="text-gray-600">
                  3 Items
                </p>

                <p className="text-xl font-semibold">
                  ₹3499
                </p>

              </div>

              {/* Status */}
              <div>

                <span
                  className="
                    rounded-full
                    bg-yellow-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-yellow-700
                  "
                >
                  Pending
                </span>

              </div>

              {/* Button */}
              <div>

                <button
                  className="
                    rounded-xl
                    bg-black
                    px-6
                    py-3
                    text-white
                    transition
                    hover:bg-gray-800
                  "
                >
                  View Details
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}