import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { loader as menuLoader } from "./features/menu/Menu";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu />, loader: menuLoader },
        { path: "/cart", element: <Cart /> },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        { path: "/order/:orderId", element: <Order />, loader: orderLoader },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
