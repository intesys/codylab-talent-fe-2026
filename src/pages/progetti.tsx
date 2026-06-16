import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectList from "../components/projectList/ProjectList";

function Progetti({
  projects,
  update,
}: {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
}) {
  //passi la lista aggiornata
  return (
    <div>
      <Header />
      <ProjectList projects={projects} update={update} />
    </div>
  );
}

export default Progetti;
