import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

function Order() {
  const order = useLoaderData();
  // console.log(order);

  return (
    <div className="pl-10 pt-8">
      <h1 className="text-3xl">Order #{order.id}</h1>
      <p>Estimated delivery: {order.estimatedDelivery}</p>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
