import { BrowserRouter, Routes, Route } from "react-router";
import Logout from "./pages/logout";
import Profilo from "./pages/profilo";
import Progetti from "./pages/progetti";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/progetti" element={<Progetti />} />
        <Route path="/profilo" element={<Profilo />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
