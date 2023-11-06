import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-100">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
