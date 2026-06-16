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
        <h1 className={styles.h1}>Lista progetti</h1>
        <li className={styles.listItem}>
          <div className={styles.info}>DATE</div>
          <div className={styles.info}>TITOLO</div>
          <div className={styles.info}>ORE TOTALI</div>
          <div className={styles.info}>COMPLETAMENTO</div>
          <div className={styles.info}>AZIONI</div> {/* Aggiunta colonna per le azioni */}
        </li>
        {projects.map((project) => (
            <ProjectListItem
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