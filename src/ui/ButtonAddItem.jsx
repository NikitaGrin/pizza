import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../features/cart/cartSlice";
import Button from "./Button";

function ButtonAddItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="space-x-2 md:space-x-3">
      <Button
        onClick={function () {
          dispatch(decreaseItemQuantity(item.id));
        }}
        type="round"
      >
        -
      </Button>
      <span>{useSelector(getItemQuantity(item.id))}</span>
      <Button
        onClick={function () {
          dispatch(increaseItemQuantity(item.id));
        }}
        type="round"
      >
        +
      </Button>
      <Button
        type="small"
        onClick={function () {
          dispatch(removeItem(item.id));
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default ButtonAddItem;
