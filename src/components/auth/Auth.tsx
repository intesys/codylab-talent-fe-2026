import { useState } from "react";
import { Outlet } from "react-router";
import Login from "../../login";

export function Auth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null,
  );

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Login setIsAuthenticated={setIsAuthenticated} />
  );
}
