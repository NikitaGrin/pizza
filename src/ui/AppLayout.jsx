import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Spinner />}
      <Header />
      <main className="min-h-screen bg-neutral-100">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
