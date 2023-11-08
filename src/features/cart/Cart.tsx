import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  return (
    <div className="px-8 py-6">
      <Link to="/menu">
        <span className="text-blue-500">← Back to menu</span>
      </Link>
      {!cart.items.length ? (
        <p>Your cart is still empty. Start adding some pizzas</p>
      ) : (
        <>
          <h2 className="text-xl">Your cart{user.name && `, ${user.name}`}</h2>
          {cart.items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </>
      )}
    </div>
  );
}

export default Cart;
