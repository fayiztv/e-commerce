import CartOrderSummaryCard from "../../components/user/CartOrderSummaryCard";
import { useCart } from "../../hooks/useCart";
import ShippingAddress from "../../components/user/ShippingAddress";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartProducts } = useCart();
  const { user } = useAuth();

  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: user?.phone || "",
  });
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-10 text-4xl font-bold">Checkout</h1>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Left */}
        <div className="space-y-8 lg:col-span-2">
          {/* Shipping Address */}
          <ShippingAddress
            shippingAddress={shippingAddress}
            setShippingAddress={setShippingAddress}
          />

          {/* Order Items */}
          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Order Items</h2>

            <div className="space-y-5">
              {cartProducts?.items?.map((item) => (
                <div
                  key={item?.product?._id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <h3 className="font-semibold">{item?.product?.name}</h3>

                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="font-bold">₹{item.price * item.quantity}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Payment Method</h2>

            <label className="flex items-center gap-3">
              <input type="radio" checked readOnly />

              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Right */}
        <div>
          <CartOrderSummaryCard
            items={cartProducts?.items}
            isOrder={true}
            shippingAddress={shippingAddress}
          />
        </div>
      </div>
    </div>
  );
}
