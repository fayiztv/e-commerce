import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createOrderApi } from "../../services/orderServices";

export default function CartOrderSummaryCard({
  items,
  isOrder = false,
  shippingAddress,
}) {
  const subtotal = items?.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shippingFee = subtotal > 500 ? 0 : 50;

  const total = subtotal + shippingFee;

  const navigate = useNavigate();

  const handleClick = async () => {
    if (!isOrder) {
      navigate("/checkout");
    } else {
      try {
        const isAnyFieldEmpty = Object.values(shippingAddress).some(
          (value) => !value,
        );

        if (isAnyFieldEmpty) {
          toast.error("Please fill all shipping details");
          return;
        }
        const orderItems = items.map((item) => ({
          productId: item.product._id,
          quantity: item.quantity,
        }));

        const res = await createOrderApi({
          items: orderItems,
          shippingAddress,
        });
        if (res.success) {
          navigate("/orders");
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="h-fit rounded-2xl border p-8 shadow-sm lg:w-96">
      <h2 className="mb-8 text-2xl font-bold">Order Summary</h2>

      <div className="space-y-0">
        <div className="flex justify-between">
          <span>Items:</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery:</span>
          <span>50</span>
        </div>
        {shippingFee != 0 ? (
          <div className="flex justify-start mt-2">
            <p className="text-xs text-green-600">
              Free shipping on orders above ₹500
            </p>
          </div>
        ) : (
          <div className="flex justify-between">
            <span>FREE Delivery</span>
            <span className="text-green-600">-50</span>
          </div>
        )}

        <hr className="mt-5" />
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="mt-8 w-full rounded-xl bg-black py-4 text-white transition hover:bg-gray-800"
      >
        {isOrder ? "Place Order" : "Proceed to Checkout"}
      </button>
    </div>
  );
}
