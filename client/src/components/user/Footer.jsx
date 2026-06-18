export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Your Store</h2>

          <p className="text-gray-400">
            Premium shopping experience for everyone.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>

          <div className="space-y-3 text-gray-400">
            <p>Email: support@yourstore.com</p>
            <p>Phone: +91 9876543211</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 Your Store. All rights reserved.
      </div>
    </footer>
  );
}
