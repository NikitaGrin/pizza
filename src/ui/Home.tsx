import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { Link } from "react-router-dom";

function Home() {
  const name = useSelector((state) => state.user.name);

  return (
    <div className=" px-16 py-20">
      <h1 className="text-center text-4xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <div className="mt-5 text-center">
        {name ? (
          <Link to="/menu">
            <Button type="small">continue</Button>
          </Link>
        ) : (
          <CreateUser />
        )}
      </div>
    </div>
  );
}

export default Home;
