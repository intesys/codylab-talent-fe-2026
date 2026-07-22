import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectDetailsCard from "../components/ProjectDetailsCard/ProjectDetailsCard";
import ProjectList from "../components/projectList/ProjectList";
import { Divider } from "../components/ui/Divider";
import { Section } from "../components/ui/Section";
import styles from "./progetti.module.css";
import { useMutation } from "@tanstack/react-query";
import { useApi } from "../contexts/useApi";
import { ProjectStatusEnum } from "../api";

function Progetti({
  projects,
}: {
  projects: Project[];
  update: (id: number, fields: Partial<Project>) => void;
  deleteProject: (id: number) => void;
}) {
  const { projectApi } = useApi();

  const updateMutation = useMutation({
    mutationFn: (params: { id: number; fields: Omit<Project, "id"> }) =>
      projectApi.updateProject({
        projectId: params.id,
        project: {
          // ⚠️ MAPPATURA DA CONFERMARE COL TEAM (form -> backend)
          title: params.fields.title,
          estimatedHours: Number(params.fields.ore),
          startDate: new Date(params.fields.date),
          endDate: new Date(params.fields.date),
          status: ProjectStatusEnum.Created,
        },
      }),
    onError: (error: Error) => {
      console.error("Errore update progetto:", error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => projectApi.deleteProject({ projectId: id }),
    onError: (error: Error) => {
      console.error("Errore delete progetto:", error);
    },
  });

  const handleUpdate = (id: number, fields: Partial<Project>) => {
    updateMutation.mutate({ id, fields: fields as Omit<Project, "id"> });
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  return (
    <div>
      <Header />
      <div className={styles.containerProgetti}>
        <Section>
          <div className={styles.projectSelect}>seleziona progetto</div>
        </Section>
        <Divider />
        <Section>
          <div className={styles.projectDetailsbox}>
            <div className={styles.dettaglioProgetti}>
              <ProjectDetailsCard label="Giornate Lavorate" content="120" />
              <ProjectDetailsCard label="Giornate vendute" content="360" />
              <ProjectDetailsCard label="% consumate" content="33%" />
              <ProjectDetailsCard label="Giornate residue" content="240" />
            </div>
          </div>
          <ProjectList
            projects={projects}
            update={handleUpdate}
            onDelete={handleDelete}
          />
        </Section>
      </div>
    </div>
  );
}

export default Progetti;
