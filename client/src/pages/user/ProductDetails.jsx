import ProductCard from "../../components/user/ProductCard";

export default function ProductDetailsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">

      <div className="grid gap-10 lg:grid-cols-2">

        {/* Product Image */}
        <div>
          <div className="overflow-hidden rounded-2xl border">
            <div className="h-125 bg-gray-200"></div>
          </div>
        </div>

        {/* Product Info */}
        <div>

          <h1 className="mb-4 text-4xl font-bold">
            iPhone 16 Pro Max
          </h1>

          <p className="mb-3 text-gray-500">
            Category: Electronics
          </p>

          <p className="mb-6 text-4xl font-bold">
            ₹1,49,999
          </p>

          <div className="mb-8">
            <h2 className="mb-3 text-xl font-semibold">
              Description
            </h2>

            <p className="leading-7 text-gray-600">
              Experience cutting-edge performance and premium
              design with the latest iPhone.
            </p>
          </div>

          {/* Stock */}
          <div className="mb-8">
            <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
              In Stock
            </span>
          </div>

          {/* Quantity */}
          <div className="mb-8 flex items-center gap-4">

            <button className="rounded-lg border px-4 py-2">
              -
            </button>

            <span className="text-xl font-semibold">
              1
            </span>

            <button className="rounded-lg border px-4 py-2">
              +
            </button>

          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 md:flex-row">

            <button className="flex-1 rounded-xl bg-black py-4 text-white transition hover:bg-gray-800">
              Add To Cart
            </button>

            <button className="flex-1 rounded-xl border py-4 transition hover:bg-gray-100">
              Buy Now
            </button>

          </div>

        </div>

      </div>

      {/* Related Products */}
      <div className="mt-24">

        <h2 className="mb-10 text-3xl font-bold">
          Related Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (
            <ProductCard item={item}/>
          ))}

        </div>

      </div>

    </div>
  );
}