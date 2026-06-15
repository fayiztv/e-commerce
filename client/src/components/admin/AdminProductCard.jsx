export default function AdminProductCard() {
  return (
    <div className="flex justify-around">
      {/* Image */}
      <div>
        <div className="h-64 bg-gray-200"></div>
      </div>

      {/* Content */}
      <div className="flex justify-around">
        <div className="space-y-3 p-5">
          <h2 className="text-xl font-bold">iPhone 16 Pro Max</h2>

          <p className="text-gray-500">Electronics</p>

          <p className="font-semibold">₹149999</p>

          <p className="text-sm text-gray-500">Stock: 15</p>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Active
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <button className="flex-1 rounded-lg border py-3">View</button>

          <button className="flex-1 rounded-lg bg-blue-500 py-3 text-white">
            Edit
          </button>

          <button className="flex-1 rounded-lg bg-red-500 py-3 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
