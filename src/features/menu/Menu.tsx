import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="grid w-[1200px] gap-6 px-12 py-8 md:grid-cols-3  lg:grid-cols-4 ">
      {menu.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
