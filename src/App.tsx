import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  // Il client della cache di React Query (lo stesso creato in main.tsx).
  // Serve per aggiornare i dati della query "progetti" dopo ogni mutation.
  const queryClient = useQueryClient();

  // --- CREA (ex addProject) ---
  const addMutation = useMutation({
    mutationFn: async (project: Project): Promise<Project> => {
      // TEMPORANEO: nessun server reale, simula la creazione.
      await new Promise((r) => setTimeout(r, 300));
      return project;
    },
    onSuccess: (nuovoProgetto) => {
      // Aggiunge il nuovo progetto alla lista in cache
      queryClient.setQueryData<Project[]>(["progetti"], (old = []) => [
        ...old,
        nuovoProgetto,
      ]);
    },
  });

  // --- MODIFICA (ex updateProject) ---
  const updateMutation = useMutation({
    mutationFn: async (vars: { id: number; fields: Partial<Project> }) => {
      await new Promise((r) => setTimeout(r, 300));
      return vars;
    },
    onSuccess: ({ id, fields }) => {
      queryClient.setQueryData<Project[]>(["progetti"], (old = []) =>
        old.map((project) =>
          project.id === id ? { ...project, ...fields } : project,
        ),
      );
    },
  });

  // --- ELIMINA (ex deleteProject) ---
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await new Promise((r) => setTimeout(r, 300));
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<Project[]>(["progetti"], (old = []) =>
        old.filter((project) => project.id !== id),
      );
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route
            path="/add-new-project"
            // .mutate accetta un solo argomento: qui è il Project da creare
            element={<AddNewProject add={addMutation.mutate} />}
          />
          <Route
            index
            element={
              <Progetti
                // update riceve (id, fields): li impacchetto in un oggetto
                // perché .mutate accetta un solo argomento
                update={(id, fields) => updateMutation.mutate({ id, fields })}
                deleteProject={deleteMutation.mutate}
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