import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectDetailsCard from "../components/ProjectDetailsCard/ProjectDetailsCard";
import ProjectList from "../components/projectList/ProjectList";
import { Divider } from "../components/ui/Divider";
import { Section } from "../components/ui/Section";
import styles from "./progetti.module.css";
import { useQuery } from "@tanstack/react-query";

function Progetti({
  update,
  deleteProject,
}: {
  update: (id: number, fields: Partial<Project>) => void;
  deleteProject: (id: number) => void;
}) {
  const {
    isPending,
    isError,
    data: queryData,
    error,
  } = useQuery<Project[]>({
    queryKey: ["progetti"],
    queryFn: async (): Promise<Project[]> => {
      return [
        {
          date: "2023-10-02",
          title: "Progetto Talent",
          ore: "50",
          percentage: "50",
          id: 2,
        },
        {
          date: "2023-10-03",
          title: "Controllo sicurezza",
          ore: "8",
          percentage: "80",
          id: 3,
        },
        {
          date: "2023-10-04",
          title: "Configurazione Server",
          ore: "12",
          percentage: "100",
          id: 4,
        },
        {
          date: "2023-10-05",
          title: "UI/UX Design App",
          ore: "30",
          percentage: "25",
          id: 5,
        },
        {
          date: "2023-10-06",
          title: "Ottimizzazione SEO",
          ore: "15",
          percentage: "70",
          id: 6,
        },
        {
          date: "2023-10-07",
          title: "Meeting Revisione",
          ore: "2",
          percentage: "100",
          id: 7,
        },
        {
          date: "2023-10-08",
          title: "Bug Fixing API",
          ore: "20",
          percentage: "40",
          id: 8,
        },
        {
          date: "2023-10-09",
          title: "Analisi Database",
          ore: "18",
          percentage: "90",
          id: 9,
        },
        {
          date: "2023-10-10",
          title: "Deploy Produzione",
          ore: "4",
          percentage: "100",
          id: 10,
        },
      ];
    },
  });

  if (isPending) {
    return (
      <div>
        <div className={styles.containerProgetti}>
          <Section>
            <div className={styles.spinnerContainer}>
              <div className={styles.spinner} />
            </div>
          </Section>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div className={styles.containerProgetti}>
          <Section>
            <div className={styles.projectSelect}>
              Errore:{" "}
              {error instanceof Error ? error.message : "Errore sconosciuto"}
            </div>
          </Section>
        </div>
      </div>
    );
  }

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
          <ProjectList
            projects={queryData || []}
            update={update}
            onDelete={deleteProject}
          />
        </Section>
      </div>
    </div>
  );
}

export default Progetti;
