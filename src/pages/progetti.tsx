import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectList from "../components/projectList/ProjectList";

function Progetti({ projects }: { projects: Project[] }) {
  return (
    <div>
      <Header />
      <ProjectList projects={projects} />
    </div>
  );
}

export default Progetti;
