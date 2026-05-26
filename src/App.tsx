import { BrowserRouter, Route, Routes } from "react-router";
import Progetti from "./pages/progetti";
import Logout from "./pages/logout";
import Profilo from "./pages/profilo";

function App() {
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

export default App;
