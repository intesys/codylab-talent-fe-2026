import styles from "./ProjectList.module.css";

import ProjectListItem from "../projectListItem/ProjectListItem";
import type { Project } from "../../App";

type ProjectListProps = {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
};

export default function ProjectList({ projects, update }: ProjectListProps) {
  return (
    <ul className={styles.container}>
      <p>Lista progetti</p>

      <li className={styles.intestation}>
        <div className={styles.category}>DATA</div>
        <div className={styles.category}>TITOLO</div>
        <div className={styles.category}>ORE TOTALI</div>
        <div className={styles.category}>PERCENTUALE DI COMPLETAMENTO</div>
      </li>

      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          id={project.id} // modificato il passaggio dell'ID
          date={project.date}
          title={project.title}
          ore={project.ore}
          percentage={project.percentage}
          update={update} // Aggiunto il passaggio della funzione di modifica
        />
      ))}
    </ul>
  );
}
