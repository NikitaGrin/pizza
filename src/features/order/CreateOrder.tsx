import { useSelector } from "react-redux";
import Button from "../../ui/Button";

function CreateOrder() {
  const cart = useSelector((state) => state.cart);

  return (
    <form method="POST" className="grid">
      <h1>Ready to order?</h1>
      <div>
        <label>First name</label> <input name="customer" type="text" />
      </div>
      <div>
        <label>Phone number</label> <input type="text" />
      </div>
      <div>
        <label>Address</label> <input type="text" />
      </div>
      <div>
        <Button type="big">Order now from ₽{cart.totalPrice}</Button>
      </div>
    </form>
  );
}

export default CreateOrder;
