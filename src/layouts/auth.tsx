import { Outlet } from "react-router-dom";

export default function authLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
