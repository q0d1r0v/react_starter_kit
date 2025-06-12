import { Outlet } from "react-router-dom";

export default function defaultLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
