import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Auth } from "./components/auth/Auth";
import AddNewProject from "./pages/AddNewProject";
import Logout from "./pages/logout";
import Profilo from "./pages/profilo";
import Progetti from "./pages/progetti";

export type Project = {
  id: number;
  cliente: string;
  progetto: string;
  attivita: string;
  periodo: string;
  utente: string;
  ggLavorate: string;
  ggVendute: string;
};

export default function App() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, cliente: "Acme Corp", progetto: "Alpha", attivita: "Design", periodo: "01/06-15/06/25", utente: "m.bianchi", ggLavorate: "5", ggVendute: "15" },
    { id: 2, cliente: "Acme Corp", progetto: "Alpha", attivita: "Dev Backend", periodo: "01/06-30/06/25", utente: "l.rossi", ggLavorate: "12", ggVendute: "20" },
    { id: 3, cliente: "Beta Srl", progetto: "Beta v2", attivita: "Testing", periodo: "10/06-20/06/25", utente: "a.verdi", ggLavorate: "8", ggVendute: "10" },
    { id: 4, cliente: "Beta Srl", progetto: "Beta v2", attivita: "PM", periodo: "01/06-30/06/25", utente: "m.bianchi", ggLavorate: "3", ggVendute: "5" },
    { id: 5, cliente: "Gamma SpA", progetto: "Gamma Web", attivita: "Dev Frontend", periodo: "15/06-30/06/25", utente: "l.rossi", ggLavorate: "10", ggVendute: "14" },
  ]);

  const addProject = (project: Project) => {
    setProjects((prevState) => [...prevState, project]);
  };

  const updateProject = (id: number, fields: Partial<Project>) => {
    setProjects((prevState) =>
      prevState.map((project) =>
        project.id === id ? { ...project, ...fields } : project,
      ),
    );
  };

  const deleteProject = (id: number) => {
    setProjects((prevState) => prevState.filter((project) => project.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route
            path="/add-new-project"
            element={<AddNewProject add={addProject} />}
          />
          <Route
            index
            element={
              <Progetti
                projects={projects}
                update={updateProject}
                deleteProject={deleteProject}
              />
            }
          />
          <Route path="/profilo" element={<Profilo />} />
          <Route path="/logout" element={<Logout />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
