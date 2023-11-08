import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(
    (state: { cart: { items: object[] } }) => state.cart,
  );
  const user = useSelector((state: { user: { name: string } }) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className=" mx-auto max-w-[1000px] px-8 py-6">
      <Link to="/menu">
        <span className="text-blue-500">← Back to menu</span>
      </Link>
      {!cart.items.length ? (
        <p>Your cart is still empty. Start adding some pizzas</p>
      ) : (
        <>
          <h2 className="text-xl ">Your cart{user.name && `, ${user.name}`}</h2>
          {cart.items.map((item) => (
            <CartItem item={item} key={(item as any).id} />
          ))}
          <div className="m-5 space-x-4 text-right">
            <Button onClick={() => navigate("/order/new")} type="big">
              Order now
            </Button>
            <Button onClick={() => dispatch(clearCart())} type="bigSecondary">
              Clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
