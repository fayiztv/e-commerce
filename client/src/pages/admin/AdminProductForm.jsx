export default function AdminProductForm() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Product Details
        </h1>

        <p className="mt-2 text-gray-500">
          Product information
        </p>
      </div>

      {/* Form */}
      <div className="rounded-2xl bg-white p-8 shadow-sm">

        <div className="grid gap-6 md:grid-cols-2">

          {/* Name */}
          <div>
            <label className="mb-2 block font-medium">
              Product Name
            </label>

            <input
              type="text"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
              placeholder="Enter product name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select className="w-full rounded-xl border px-4 py-3 outline-none">

              <option>
                Electronics
              </option>

              <option>
                Clothing
              </option>

            </select>
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block font-medium">
              Price
            </label>

            <input
              type="number"
              className="w-full rounded-xl border px-4 py-3 outline-none"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="mb-2 block font-medium">
              Stock
            </label>

            <input
              type="number"
              className="w-full rounded-xl border px-4 py-3 outline-none"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block font-medium">
              Status
            </label>

            <select className="w-full rounded-xl border px-4 py-3">

              <option>
                Active
              </option>

              <option>
                Inactive
              </option>

            </select>
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block font-medium">
              Product Image
            </label>

            <input
              type="file"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

        </div>

        {/* Description */}
        <div className="mt-6">

          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            rows="6"
            className="w-full rounded-xl border px-4 py-3 outline-none"
            placeholder="Enter product description"
          />

        </div>

        {/* Preview */}
        <div className="mt-8">

          <h2 className="mb-4 text-xl font-semibold">
            Product Image Preview
          </h2>

          <div className="h-72 w-72 overflow-hidden rounded-2xl border bg-gray-100">

            {/* image */}

          </div>

        </div>

        {/* Button */}
        <div className="mt-10 flex justify-end">

          <button
            className="
            rounded-xl
            bg-black
            px-8
            py-4
            text-white
            transition
            hover:bg-gray-800
          "
          >
            Save Product
          </button>

        </div>

      </div>

    </div>
  );
}