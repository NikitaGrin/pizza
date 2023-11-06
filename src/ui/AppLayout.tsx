import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="">
      <Header />
      <main className="flex min-h-screen justify-center bg-neutral-100">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
