import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { Auth } from "./components/auth/Auth";
import AddNewProject from "./pages/AddNewProject";
import Logout from "./pages/logout";
import Profilo from "./pages/profilo";
import Progetti from "./pages/progetti";
import Login from "./login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApiProvider } from "./contexts/ApiProvider";

const queryClient = new QueryClient();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/"
              element={
                isAuthenticated ? <Auth /> : <Navigate to="/login" replace />
              }
            />

            <Route path="/" element={<Auth />}>
              <Route
                path="/add-new-project"
                element={<AddNewProject add={() => {}} />}
              />
              <Route index element={<Progetti />} />
              <Route path="/profilo" element={<Profilo />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </QueryClientProvider>
  );
}
