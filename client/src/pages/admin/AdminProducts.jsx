import { useNavigate } from "react-router-dom";

export default function AdminProducts() {
  const navigate = useNavigate();

  function handleAddClick() {
    navigate(`new`);
  }

  function handleEditClick() {
    navigate(`:id`);
  }
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>

          <p className="mt-2 text-gray-500">Manage your products</p>
        </div>

        <button
          onClick={handleAddClick}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Add Product
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="
              overflow-hidden
              rounded-2xl
              border
              bg-white
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            {/* Image */}
            <div className="h-64 bg-gray-200"></div>

            {/* Content */}
            <div className="space-y-4 p-5">
              <div>
                <h2 className="text-xl font-bold">iPhone 16 Pro Max</h2>

                <p className="text-gray-500">Electronics</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">₹1,49,999</span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                  Active
                </span>
              </div>

              <div className="text-gray-500">Stock: 12</div>

              <div className="flex gap-3">
                <button
                  onClick={handleEditClick}
                  className="
                    flex-1
                    rounded-lg
                    bg-blue-500
                    py-3
                    text-white
                    transition
                    hover:bg-blue-600
                  "
                >
                  Edit
                </button>

                <button
                  className="
                    flex-1
                    rounded-lg
                    bg-red-500
                    py-3
                    text-white
                    transition
                    hover:bg-red-600
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
