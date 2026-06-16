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
