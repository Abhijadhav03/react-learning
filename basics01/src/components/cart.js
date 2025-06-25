import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, restaurantInfo } = useCart();

  const totalPrice = cart.reduce((acc, item) => {
    const price = item.price / 100 || item.variantsV2?.pricingModels?.[0]?.price / 100 || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Cart</h1>
      {restaurantInfo && (
        <>
          <p><strong>Restaurant:</strong> {restaurantInfo.name}</p>
          <p><strong>Location:</strong> {restaurantInfo.locality}</p>
        </>
      )}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => {
            const price =
              item.price / 100 || item.variantsV2?.pricingModels?.[0]?.price / 100 || 0;
            return (
              <li key={item.id}>
                {item.name} — {item.quantity} x RS {price}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            );
          })}
        </ul>
      )}
      <h2>Total: RS {totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
