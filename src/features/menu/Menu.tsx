import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu: any = useLoaderData();

  return (
    <div className="flex justify-center">
      <div className="grid w-[1200px] gap-8 px-12 py-8 md:grid-cols-3  lg:grid-cols-4 ">
        {menu.map((item: any) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
