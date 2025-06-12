import { Outlet } from "react-router-dom";

export default function defaultLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>

      <footer className="flex items-center justify-center">
        <p>©{new Date().getFullYear()} by beko</p>
      </footer>
    </div>
  );
}
