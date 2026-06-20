import { useNavigate } from "react-router-dom";
import CartOrderSummaryCard from "../../components/user/CartOrderSummaryCard";
import CartProductCard from "../../components/user/cartProductCard";
import { useCart } from "../../hooks/useCart";

export default function CartPage() {
  const navigate = useNavigate()
  const { cartProducts } = useCart();
  const isEmpty = cartProducts?.items?.length === 0;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-10 text-4xl font-bold">Shopping Cart</h1>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {isEmpty && (
            <div className="flex min-h-[60vh] flex-col items-center justify-center">
              <h2 className="mb-4 text-3xl font-bold">Your cart is empty</h2>

              <p className="mb-8 text-gray-500">
                Looks like you haven't added anything yet.
              </p>

              <button onClick={()=> navigate("/products")} className="rounded-xl bg-black px-8 py-4 text-white">
                Continue Shopping
              </button>
            </div>
          )}

          {!isEmpty &&
            cartProducts?.items?.map((item) => (
              <CartProductCard key={item?.product?._id} item={item} />
            ))}
        </div>

        {/* Order Summary */}
        {!isEmpty && <CartOrderSummaryCard items={cartProducts?.items} />}
      </div>
    </div>
  );
}
