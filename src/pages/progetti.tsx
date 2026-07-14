import React from "react";
import type { Project } from "../App";
import Header from "../components/header/Header";
import ProjectDetailsCard from "../components/ProjectDetailsCard/ProjectDetailsCard";
import ProjectList from "../components/projectList/ProjectList";
import { Divider } from "../components/ui/Divider";
import { Section } from "../components/ui/Section";
import styles from "./progetti.module.css";

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
            update={update}
            onDelete={deleteProject}
          />
        </Section>
      </div>
    </div>
  );
}

export default Progetti;
