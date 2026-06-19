import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import toast from "react-hot-toast";

export default function ProductCard({ item }) {
  const inStock = item.stock > 0;
  const navigate = useNavigate();
  const { addToCart, addingId } = useCart();

  const handleAddToCart = async (id) => {
    const res = await addToCart(id);
    res.success ? toast.success(res.message) : toast.error(res.message);
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div
        onClick={() => navigate(`/product/${item._id}`)}
        className="h-55 bg-gray-200"
      ></div>

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-2 text-lg font-semibold">{item?.name}</h2>

        <p className="mb-1 text-gray-500">{item?.category?.name}</p>

        <div className="mb-5 flex items-center justify-between">
          <span className="text-xl font-bold">₹{item.price}</span>
          {inStock ? (
            <span className="text-sm text-green-600">In Stock</span>
          ) : (
            <span className="text-sm text-red-600">Out of Stock</span>
          )}
        </div>

        <div className="flex gap-3">
          <button
            disabled={!inStock || addingId === item._id}
            onClick={() => handleAddToCart(item._id)}
            className="flex-1 rounded-lg bg-black py-3 text-white transition hover:bg-gray-800 disabled:bg-gray-400"
          >
            {addingId === item._id ? "Adding..." : "Add To Cart"}
          </button>

          <button
            onClick={() => navigate(`/product/${item._id}`)}
            className="rounded-lg border px-5 transition hover:bg-gray-100"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
