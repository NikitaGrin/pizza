import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import store from "../../store";
import { clearCart } from "../cart/cartSlice";
import { Form, Link, redirect } from "react-router-dom";

function CreateOrder() {
  const cart = useSelector((state) => state.cart);

  if (!cart.items.length)
    return (
      <div>
        <Link to="/menu">
          <span className="text-blue-500">← Back to menu</span>
        </Link>
        <p>Your cart is still empty. Start adding some pizzas</p>
      </div>
    );

  return (
    <Form method="POST" className=" m-auto grid max-w-[50rem] gap-6 px-8 py-5">
      <h1 className="text-3xl font-semibold ">Ready to order?</h1>
      <div className="grid gap-y-3 sm:grid-cols-[10rem_1fr]">
        <label>First name</label>{" "}
        <input
          className="rounded-lg px-3 py-2"
          required
          name="customer"
          type="text"
        />
      </div>
      <div className="grid gap-y-3 sm:grid-cols-[10rem_1fr]">
        <label>Phone number</label>{" "}
        <input
          className="rounded-lg px-3 py-2"
          required
          name="phone"
          type="tel"
        />
      </div>
      <div className="grid gap-y-3 sm:grid-cols-[10rem_1fr]">
        <label>Address</label>{" "}
        <input
          className="rounded-lg px-3 py-2"
          required
          name="address"
          type="text"
        />
      </div>
      <div>
        <input type="hidden" name="cart" value={JSON.stringify(cart.items)} />
        {/* <input
          type="hidden"
          name="position"
          value={`${position?.latitude},${position?.longtitude}`}
        /> */}
        <Button type="big">Order now from ₽{cart.totalPrice}</Button>
      </div>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
    position: "undefined,undefined",
  };

  const errors = {};
  /* if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you"; */
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
