import styles from "./ProjectList.module.css";
import ProjectListItem from "../projectListItem/ProjectListItem";
import type { Project } from "../../App";

import filterIcon from "../projectList/assets/filter-down.svg";

type ProjectListProps = {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
  onDelete: (id: number) => void;
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className={styles.container}>
      <h1 className={styles.h1}>Lista progetti</h1>

      <li className={styles.listItem}>
        <div className={styles.info}>
          Cliente <img src={filterIcon} alt="" className={styles.filterIcon} />
        </div>
        <div className={styles.info}>
          Progetto <img src={filterIcon} alt="" className={styles.filterIcon} />
        </div>
        <div className={styles.info}>
          Attività <img src={filterIcon} alt="" className={styles.filterIcon} />
        </div>
        <div className={styles.info}>
          Periodo <img src={filterIcon} alt="" className={styles.filterIcon} />
        </div>
        <div className={styles.info}>
          Utente <img src={filterIcon} alt="" className={styles.filterIcon} />
        </div>
        <div className={styles.info}>
          Gg Lavorate <img src={filterIcon} alt="" className={styles.filterIcon} />
        </div>
        <div className={styles.info}>
          Gg Vendute <img src={filterIcon} alt="" className={styles.filterIcon} />
        </div>
        <div className={styles.info}>Azioni</div>
      </li>

      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          cliente={project.cliente}
          progetto={project.progetto}
          attivita={project.attivita}
          periodo={project.periodo}
          utente={project.utente}
          ggLavorate={project.ggLavorate}
          ggVendute={project.ggVendute}
        />
      ))}
    </ul>
  );
}
