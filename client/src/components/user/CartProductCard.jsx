import { useCart } from "../../hooks/useCart";

export default function CartProductCard({ item }) {
    
  const quantity = item.quantity;
  const totalPrice = item.price * quantity;
  const { updateCart, clearCartItem } = useCart();

  const handleAdd = async () => {
    await updateCart({
      product: item?.product?._id,
      quantity: quantity + 1,
    });
  };

  const handleMinus = async () => {
    await updateCart({
      product: item.product._id,
      quantity: quantity - 1,
    });
  };

  const handleRemove = async () => {
    await clearCartItem(item.product._id);
  };

  return (
    <div className="flex flex-col gap-6 rounded-2xl border p-6 shadow-sm md:flex-row">
      {/* Image */}
      <div className="h-40 w-full rounded-xl bg-gray-200 md:w-40"></div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">{item?.product?.name}</h2>

          <p className="text-gray-500">{item?.product?.category?.name}</p>

          <p className="mt-3 text-gray-500 text-m font-bold">
            ₹{item.price} × {quantity}
          </p>
          <p className="mt-3 text-xl font-bold">₹{totalPrice}</p>
        </div>

        {/* Quantity */}
        <div className="mt-6 flex items-center gap-4">
          <button
            disabled={quantity < 2}
            onClick={handleMinus}
            className="rounded-lg border px-4 py-2 disabled:bg-gray-200"
          >
            -
          </button>

          <span className="text-lg font-semibold">{quantity}</span>

          <button onClick={handleAdd} className="rounded-lg border px-4 py-2">
            +
          </button>
        </div>
      </div>

      {/* Remove */}
      <div className="flex items-center">
        <button
          onClick={handleRemove}
          className="rounded-lg border px-5 py-3 text-red-500 transition hover:bg-red-50"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
