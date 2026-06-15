// import AddCategory from "../../components/admin/AddCategory";

export default function AdminCategories() {
  return (
    <div className="space-y-8">
      {/* <AddCategory/> */}
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>

          <p className="mt-2 text-gray-500">Manage your categories</p>
        </div>

        <button className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800">
          Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Name */}
            <h2 className="mb-3 text-2xl font-bold">Electronics</h2>

            {/* Description */}
            <p className="mb-6 text-gray-500">
              Phones, laptops and accessories.
            </p>

            {/* Status */}
            <div className="mb-6">
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-600">
                Active
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 rounded-lg bg-blue-500 py-3 text-white transition hover:bg-blue-600">
                Edit
              </button>

              <button className="flex-1 rounded-lg bg-red-500 py-3 text-white transition hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
