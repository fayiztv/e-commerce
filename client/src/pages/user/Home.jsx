export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Discover Your Next Favorite Product
          </h1>

          <p className="mb-8 max-w-2xl text-gray-600">
            Shop premium quality products with amazing deals and fast delivery.
          </p>

          <button className="rounded-lg bg-black px-8 py-4 text-white transition hover:bg-gray-800">
            Shop Now
          </button>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-10 text-center text-3xl font-bold">
          Shop By Category
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border p-10 text-center shadow-sm transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              Clothing
            </h3>
          </div>

          <div className="rounded-2xl border p-10 text-center shadow-sm transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              Electronics
            </h3>
          </div>

          <div className="rounded-2xl border p-10 text-center shadow-sm transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              Accessories
            </h3>
          </div>

        </div>

      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-center text-3xl font-bold">
            Featured Products
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl bg-white shadow transition hover:-translate-y-2"
              >

                <div className="h-60 bg-gray-200"></div>

                <div className="p-5">

                  <h3 className="mb-2 text-lg font-semibold">
                    Product Name
                  </h3>

                  <p className="mb-4 text-gray-500">
                    ₹999
                  </p>

                  <button className="w-full rounded-lg bg-black py-3 text-white">
                    Add To Cart
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-10 text-center text-3xl font-bold">
          Why Choose Us
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">
              Fast Delivery
            </h3>

            <p className="text-gray-500">
              Get your products delivered quickly and safely.
            </p>
          </div>

          <div className="rounded-2xl border p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">
              Secure Payments
            </h3>

            <p className="text-gray-500">
              Shop confidently with secure transactions.
            </p>
          </div>

          <div className="rounded-2xl border p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">
              Premium Quality
            </h3>

            <p className="text-gray-500">
              We offer only trusted and quality products.
            </p>
          </div>

        </div>

      </section>

      {/* Newsletter */}
      <section className="bg-black py-20 text-white">

        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">

          <h2 className="mb-4 text-3xl font-bold">
            Stay Updated
          </h2>

          <p className="mb-8 text-gray-300">
            Subscribe to receive exclusive offers and updates.
          </p>

          <div className="flex w-full max-w-xl flex-col gap-4 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-4 py-4 border"
            />

            <button className="rounded-lg bg-white px-8 py-4 text-black">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}