import styles from "./ProjectList.module.css";

import ProjectListItem from "../projectListItem/ProjectListItem";

type Project = {
  id: number;
  date: string;
  title: string;
  ore: string;
  percentage: string;
};

// i campi modificabili di un progetto (l'id non si tocca)
type ProjectFields = {
  date: string;
  title: string;
  ore: string;
  percentage: string;
};

type ProjectListProps = {
  projects: Project[];
  onDelete: (id: number) => void; // Aggiunta il prop per la funzione
  onEdit: (id: number, fields: ProjectFields) => void; // Aggiunto il prop per la modifica
};

export default function ProjectList({ projects, onDelete, onEdit }: ProjectListProps) {
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
                  onDelete={onDelete} // Aggiunto il passaggio della funzione
                  onEdit={onEdit} // Aggiunto il passaggio della funzione di modifica
              />
          ))}
        </ul>
  );
}