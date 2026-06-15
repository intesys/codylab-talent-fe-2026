import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Logout from "./pages/logout";
import Profilo from "./pages/profilo";
import Progetti from "./pages/progetti";
import Login from "./login";
function Auth() {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return isAuthenticated ? <Outlet /> : <Login />;
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route index element={<Progetti />} />
        <Route path="/profilo" element={<Profilo />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
