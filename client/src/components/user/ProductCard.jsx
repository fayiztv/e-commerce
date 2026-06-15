export default function ProductCard({item}) {
  return (
    <div
      key={item}
      className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="h-72 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-2 text-lg font-semibold">Product Name</h2>

        <p className="mb-1 text-gray-500">Electronics</p>

        <div className="mb-5 flex items-center justify-between">
          <span className="text-xl font-bold">₹999</span>

          <span className="text-sm text-green-600">In Stock</span>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 rounded-lg bg-black py-3 text-white transition hover:bg-gray-800">
            Add To Cart
          </button>

          <button className="rounded-lg border px-5 transition hover:bg-gray-100">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
