import styles from "./ProjectList.module.css";

import ProjectListItem from "../projectListItem/ProjectListItem";
import type { Project } from "../../App";

type ProjectListProps = {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
  onDelete: (id: number) => void; // Aggiunta il prop per la funzione
};

export default function ProjectList({
  projects,
  update,
  onDelete,
}: ProjectListProps) {
  return (
    <ul className={styles.container}>
      <h1 className={styles.h1}>Lista progetti</h1>
      <li className={styles.listItem}>
        <div className={styles.info}>DATA</div>
        <div className={styles.info}>TITOLO</div>
        <div className={styles.info}>ORE TOTALI</div>
        <div className={styles.info}>PERCENTUALE DI COMPLETAMENTO</div>
        <div className={styles.info}>AZIONI</div>{" "}
        {/* Aggiunta colonna per le azioni */}
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
          onDelete={onDelete} // Aggiunto il passaggio della funzione
        />
      ))}
    </ul>
  );
}
