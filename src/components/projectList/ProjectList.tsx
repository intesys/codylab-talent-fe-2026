import styles from "./ProjectList.module.css";

import ProjectListItem from "../projectListItem/ProjectListItem";
import type { Project } from "../../api";

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
    <div className={styles.container}>
      <div className={styles.listItemHeader}>
        <div className={styles.info}>TITOLO</div>
        <div className={styles.info}>ORE STIMATE</div>
        <div className={styles.info}>STATO</div>
        <div className={styles.info}>DATA INIZIO</div>
        <div className={styles.info}>AZIONI</div>
      </div>
      <ul className={styles.list}>
        {projects.map((project, index) => {
          const projectId = project.id ?? index;
          return (
            <ProjectListItem
              key={projectId}
              id={projectId}
              title={project.title}
              estimatedHours={project.estimatedHours}
              status={project.status}
              startDate={
                project.startDate
                  ? new Date(project.startDate).toLocaleDateString("it-IT")
                  : "-"
              }
              update={update}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}
