import styles from "./ProjectList.module.css";
import ProjectListItem from "../projectListItem/ProjectListItem";
import type { Project } from "../../api";

type ProjectListProps = {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
  onDelete: (id: number) => void;
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
        <div className={styles.info}>STATO</div>
        <div className={styles.info}>AZIONI</div>
      </li>

      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
          update={update}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}