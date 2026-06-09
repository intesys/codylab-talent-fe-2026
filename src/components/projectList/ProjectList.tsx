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
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className={styles.container}>
      <p>Lista progetti</p>
      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          date={project.date}
          title={project.title}
          ore={project.ore}
          percentage={project.percentage}
        />
      ))}
    </ul>
  );
}
