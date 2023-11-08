import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../features/cart/cartSlice";
import Button from "./Button";

function ButtonAddItem({ item }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="space-x-3">
      <Button
        onClick={function () {
          dispatch(decreaseItemQuantity(item));
        }}
        type="round"
      >
        -
      </Button>
      <span>{items.find((el) => el.id === item.id)?.quantity}</span>
      <Button
        onClick={function () {
          dispatch(increaseItemQuantity(item));
        }}
        type="round"
      >
        +
      </Button>
      <Button
        type="small"
        onClick={function () {
          dispatch(removeItem(item));
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default ButtonAddItem;
