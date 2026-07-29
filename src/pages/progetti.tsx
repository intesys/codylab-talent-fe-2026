import Header from "../components/header/Header";
import ProjectDetailsCard from "../components/ProjectDetailsCard/ProjectDetailsCard";
import ProjectList from "../components/projectList/ProjectList";
import { Divider } from "../components/ui/Divider";
import { Section } from "../components/ui/Section";
import styles from "./progetti.module.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../contexts/useApi";
import type { Project } from "../api";

function Progetti() {
  const { projectApi } = useApi();
  const queryClient = useQueryClient();

  // Consulta da lista
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => projectApi.getAllProjects(),
  });

  // Mutation para deletar
  const deleteMutation = useMutation({
    mutationFn: (projectId: number) =>
      projectApi.deleteProject({ projectId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  // Mutation para atualizar
  const updateMutation = useMutation({
    mutationFn: ({
      id,
      fields,
    }: {
      id: number;
      fields: Partial<Project>;
    }) => {
      const existingProject = projects?.find((p) => p.id === id);
      const updatedProject: Project = {
        ...existingProject,
        ...fields,
      };
      return projectApi.updateProject({
        projectId: id,
        project: updatedProject,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const handleUpdate = (id: number, fields: Partial<Project>) => {
    updateMutation.mutate({ id, fields });
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
            projects={projects || []}
            update={handleUpdate}
            onDelete={handleDelete}
          />
        </Section>
      </div>
    </div>
  );
}

export default Progetti;