// src/components/Cart.jsx
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, increment, decrement } = useCart();

  const total = cart.reduce(
    (acc, item) =>
      acc +
      (item.price
        ? item.price / 100
        : item?.variantsV2?.pricingModels?.[0]?.price / 100 || 0) *
        item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b">
              <div>
                <h4 className="font-medium text-lg">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  ₹
                  {item.price
                    ? item.price / 100
                    : item?.variantsV2?.pricingModels?.[0]?.price / 100 || "N/A"}
                  {" "}x {item.quantity}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <button onClick={() => decrement(item.id)} className="px-2 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increment(item.id)} className="px-2 bg-gray-200 rounded">+</button>
                <button onClick={() => removeItem(item.id)} className="ml-2 text-red-500 text-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-4 text-xl font-bold">
            Total: ₹{total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
