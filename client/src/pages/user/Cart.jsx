export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-10 text-4xl font-bold">Shopping Cart</h1>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {/* <div className="flex min-h-[60vh] flex-col items-center justify-center">
            <h2 className="mb-4 text-3xl font-bold">Your cart is empty</h2>

            <p className="mb-8 text-gray-500">
              Looks like you haven't added anything yet.
            </p>

            <button className="rounded-xl bg-black px-8 py-4 text-white">
              Continue Shopping
            </button>
          </div> */}

          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex flex-col gap-6 rounded-2xl border p-6 shadow-sm md:flex-row"
            >
              {/* Image */}
              <div className="h-40 w-full rounded-xl bg-gray-200 md:w-40"></div>

              {/* Product Details */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Product Name</h2>

                  <p className="text-gray-500">Electronics</p>

                  <p className="mt-3 text-xl font-bold">₹999</p>
                </div>

                {/* Quantity */}
                <div className="mt-6 flex items-center gap-4">
                  <button className="rounded-lg border px-4 py-2">-</button>

                  <span className="text-lg font-semibold">1</span>

                  <button className="rounded-lg border px-4 py-2">+</button>
                </div>
              </div>

              {/* Remove */}
              <div className="flex items-center">
                <button className="rounded-lg border px-5 py-3 text-red-500 transition hover:bg-red-50">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="h-fit rounded-2xl border p-8 shadow-sm lg:w-96">
          <h2 className="mb-8 text-2xl font-bold">Order Summary</h2>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹1499</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹1499</span>
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl bg-black py-4 text-white transition hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
