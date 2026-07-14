import { useQuery } from "@tanstack/react-query";
import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectDetailsCard from "../components/ProjectDetailsCard/ProjectDetailsCard";
import ProjectList from "../components/projectList/ProjectList";
import { Divider } from "../components/ui/Divider";
import { Section } from "../components/ui/Section";
import styles from "./progetti.module.css";

const MOCK_PROJECTS: Project[] = [
  { id: 1, cliente: "Acme Corp", progetto: "Alpha", attivita: "Design", periodo: "01/06-15/06/25", utente: "m.bianchi", ggLavorate: "5", ggVendute: "15" },
  { id: 2, cliente: "Acme Corp", progetto: "Alpha", attivita: "Dev Backend", periodo: "01/06-30/06/25", utente: "l.rossi", ggLavorate: "12", ggVendute: "20" },
  { id: 3, cliente: "Beta Srl", progetto: "Beta v2", attivita: "Testing", periodo: "10/06-20/06/25", utente: "a.verdi", ggLavorate: "8", ggVendute: "10" },
];

function Progetti({
  update,
  deleteProject,
}: {
  update: (id: number, fields: Partial<Project>) => void;
  deleteProject: (id: number) => void;
}) {
  const progetti = useQuery({
    queryKey: ["progetti"],
    staleTime: Infinity, // con i dati finti evita refetch che azzererebbero le mutation
    queryFn: async (): Promise<Project[]> => {
      await new Promise((r) => setTimeout(r, 500));
      return MOCK_PROJECTS;
    },
  });

  return (
    <div>
      <Header />
      <div className={styles.containerProgetti}>
        <Section>
          <div className={styles.projectSelect}>seleziona progetto</div>
        </Section>
        <Divider />
        <Section>
          <div className={styles.projectDetailsbox}>
            <div className={styles.dettaglioProgetti}>
              <ProjectDetailsCard label="Giornate Lavorate" content="120" />
              <ProjectDetailsCard label="Giornate vendute" content="360" />
              <ProjectDetailsCard label="% consumate" content="33%" />
              <ProjectDetailsCard label="Giornate residue" content="240" />
            </div>
          </div>

          {progetti.isPending ? (
            <div className={styles.spinnerContainer}>
              <div className={styles.spinner} />
            </div>
          ) : progetti.isError ? (
            <div className={styles.error}>
              Errore: {progetti.error.message}
            </div>
          ) : (
            <ProjectList
              projects={progetti.data}
              update={update}
              onDelete={deleteProject}
            />
          )}
        </Section>
      </div>
    </div>
  );
}

export default Progetti;