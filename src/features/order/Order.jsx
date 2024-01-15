import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

function Order() {
  const order = useLoaderData();
  console.log(order);

  return (
    <div className="px-10 pt-8">
      <div className=" flex justify-between">
        <h1 className="text-3xl">Order #{order.id}</h1>
        <div className="flex items-center rounded-xl bg-green-400 px-3 uppercase text-slate-50">
          {order.status}
        </div>
      </div>
      <p>Estimated delivery: {order.estimatedDelivery}</p>
      <div className="mt-4">
        <h2 className="mb-1 text-xl">Your order:</h2>
        {order.cart.map((item) => (
          <div key={item.pizzaId}>
            <span>{`${item.name}, ${item.quantity}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
