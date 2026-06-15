import { useNavigate } from "react-router-dom";
import AdminProductCard from "../../components/admin/AdminProductCard";

export default function AdminProducts() {
  const navigate = useNavigate();

  function handleAddClick() {
    navigate(`new`);
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
            <AdminProductCard/>
          </div>
        ))}
      </div>
    </div>
  );
}
