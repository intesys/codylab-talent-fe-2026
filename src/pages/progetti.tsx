import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectList from "../components/projectList/ProjectList";

function Progetti({
  projects,
  update,
  deleteProject,
}: {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
  deleteProject: (id: number) => void;
}) {
  //passi la lista aggiornata
  return (
    <div>
      <Header />
      <ProjectList
        projects={projects}
        update={update}
        onDelete={deleteProject}
      />
    </div>
  );
}

export default Progetti;
