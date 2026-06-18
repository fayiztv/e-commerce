import ProductCard from "../../components/user/ProductCard";
import { useShop } from "../../hooks/useShop";

export default function ProductsPage() {
  const { products, categories } = useShop()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Page Title */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>

        <select className="rounded-lg border px-4 py-2 outline-none">
          <option>Latest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar */}
        <div className="w-full rounded-2xl border p-6 lg:w-64">
          <h2 className="mb-5 text-xl font-semibold">Filters</h2>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="mb-3 font-medium">Categories</h3>

            <div className="space-y-3">
              {categories?.map((item) => (
                <label key={item._id} className="flex gap-2">
                  <input type="checkbox" />
                  {item.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {products?.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
