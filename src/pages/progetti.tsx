import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectList from "../components/projectList/ProjectList";
import styles from "./progetti.module.css";


function Progetti({
  projects,
  update,
  deleteProject,
}: {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
  deleteProject: (id: number) => void;
}) {
  //passi la lista aggiornata
  return (
    <div>
      <Header />
            <div className={styles.containerProgetti}>
                <div className={styles.projectSelect}>seleziona progetto</div>
                <div className={styles.divider}></div>
                <ProjectList  projects={projects}    update={update}     onDelete={deleteProject} />
        </div>
    </div>
  );
}

export default Progetti;