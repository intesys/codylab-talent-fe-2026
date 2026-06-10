import styles from "./ProjectList.module.css";
import ProjectListItem from "../projectListItem/ProjectListItem";

type Project = {
  id: number;
  date: string;
  title: string;
  ore: string;
  percentage: string;
};

type ProjectListProps = {
  projects: Project[];
  onDelete: (id: number) => void; // Aggiunta il prop per la funzione
};

export default function ProjectList({ projects, onDelete }: ProjectListProps) {
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
                onDelete={onDelete} // Aggiunto il passaggio della funzione
            />
        ))}
      </ul>
  );
}