import Header from "../components/header/Header";
import ProjectDetailsCard from "../components/ProjectDetailsCard/ProjectDetailsCard";
import ProjectList from "../components/projectList/ProjectList";
import { Divider } from "../components/ui/Divider";
import { Section } from "../components/ui/Section";
import styles from "./progetti.module.css";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../contexts/useApi";

function Progetti() {
  const { projectApi } = useApi();
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => projectApi.getAllProjects(),
  });

  //passi la lista aggiornata
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
            projects={(projects as any) || []}
            update={handleUpdate}
            onDelete={handleDelete}
          />
        </Section>
      </div>
    </div>
  );
}

export default Progetti;
