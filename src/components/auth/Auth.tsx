import { useState } from "react";
import { Outlet } from "react-router";
import Login from "../../login";
import { ACCESS_TOKEN_KEY } from "../../consts";

export function Auth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(ACCESS_TOKEN_KEY) !== null,
  );

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Login setIsAuthenticated={setIsAuthenticated} />
  );
}
