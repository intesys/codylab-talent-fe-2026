import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectList from "../components/projectList/ProjectList";
import ProjectDetailsCard from "../components/projectDetailsCard/ProjectDetailsCard";
import styles from "../progetti.module.css";

function Progetti({
  projects,
  update,
  deleteProject,
}: {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
  deleteProject: (id: number) => void;
}) {
  return (
    <div>
      <Header />
      <div className={styles.dettaglioProgetti}>
        <ProjectDetailsCard label="Giornate Lavorate" content="120" />
        <ProjectDetailsCard label="Giornate vendute" content="360" />
        <ProjectDetailsCard label="% consumate" content="33%" />
        <ProjectDetailsCard label="Giornate residue" content="240" />
      </div>

      <ProjectList
        projects={projects}
        update={update}
        onDelete={deleteProject}
      />
    </div>
  );
}

export default Progetti;
