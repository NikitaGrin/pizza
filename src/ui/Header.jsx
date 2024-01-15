import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import {
  getTotalCartQuantity,
  getTotalPrice,
} from "../features/cart/cartSlice";

function Header() {
  const name = useSelector((state) => state.user.name);
  const cart = useSelector((state) => state.cart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <header className="justify-between [&>div]:border-b-2 [&>div]:border-b-slate-50">
      <div className="flex justify-between px-6 py-8 ">
        <Link to="/">
          <h2 className="text-xl tracking-widest ">🍕 Fast React Pizza</h2>
        </Link>
        {name ? (
          name
        ) : (
          <Link to="/">
            <Button type="small">Login</Button>
          </Link>
        )}
      </div>
      {totalCartQuantity ? (
        <div className="flex justify-between bg-stone-700 px-6 py-4 text-stone-100 shadow-sm">
          <p className="uppercase">
            {totalCartQuantity} pizzas ${totalPrice}
          </p>
          <Link to="/cart">OPEN CART</Link>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
