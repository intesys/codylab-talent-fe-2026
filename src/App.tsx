import { BrowserRouter, Route, Routes } from "react-router";
import { Auth } from "./components/auth/Auth";
import Logout from "./pages/logout";
import Profilo from "./pages/profilo";
import Progetti from "./pages/progetti";
import AddNewProject from "./pages/add_new_project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/add-new-project" element={<AddNewProject />} />
          <Route path="/progetti" element={<Progetti />} />
          <Route index element={<Progetti />} />
          <Route path="/profilo" element={<Profilo />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
