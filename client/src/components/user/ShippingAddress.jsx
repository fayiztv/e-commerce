export default function ShippingAddress({
  shippingAddress,
  setShippingAddress,
}) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">Shipping Address</h2>

      <div className="space-y-4">
        <input
          type="text"
          value={shippingAddress?.address}
          placeholder="Address"
          required
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              address: e.target.value,
            })
          }
          className="w-full rounded-xl border p-4 outline-none focus:ring"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            value={shippingAddress?.city}
            placeholder="City"
            required
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                city: e.target.value,
              })
            }
            className="rounded-xl border p-4 outline-none focus:ring"
          />

          <input
            type="text"
            value={shippingAddress?.state}
            placeholder="State"
            required
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                state: e.target.value,
              })
            }
            className="rounded-xl border p-4 outline-none focus:ring"
          />
        </div>

        <input
          type="text"
          value={shippingAddress?.pincode}
          placeholder="Pincode"
          required
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              pincode: e.target.value,
            })
          }
          className="w-full rounded-xl border p-4 outline-none focus:ring"
        />

        <input
          type="text"
          value={shippingAddress?.phone}
          placeholder="Phone Number"
          required
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              phone: e.target.value,
            })
          }
          className="w-full rounded-xl border p-4 outline-none focus:ring"
        />
      </div>
    </div>
  );
}
