import { useNavigate } from "react-router-dom";

export default function AdminOrders() {
  const navigate = useNavigate();

  function handleViewClick() {
    navigate(`:id`);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Orders</h1>

        <p className="mt-2 text-gray-500">Manage customer orders</p>
      </div>

      {/* Orders */}
      <div className="space-y-5">
        {[1, 2, 3, 4].map((item) => (
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
            <div
              className="
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* Left */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Order #ORD-20260615-1234</h2>

                <p className="text-gray-500">Customer: John Doe</p>

                <p className="text-gray-500">3 Items</p>

                <p className="text-lg font-semibold">₹3499</p>
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

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleViewClick}
                  className="
                    rounded-lg
                    border
                    px-5
                    py-3
                    transition
                    hover:bg-gray-100
                  "
                >
                  View Details
                </button>

                <button
                  className="
                    rounded-lg
                    bg-black
                    px-5
                    py-3
                    text-white
                    transition
                    hover:bg-gray-800
                  "
                >
                  Update Status
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
