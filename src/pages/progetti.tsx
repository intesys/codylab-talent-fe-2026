import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import ProjectList from "../components/projectList/ProjectList";

const products = [
  {
    date: "DATE",
    title: "TITOLO",
    ore: "ORE TOTALI",
    percentage: "COMPLETAMENTO",
    id: 1,
  },
  {
    date: "2023-10-02",
    title: "Progetto Talent",
    ore: "50",
    percentage: "50",
    id: 2,
  },
  {
    date: "2023-10-03",
    title: "Controllo sicurezza",
    ore: "8",
    percentage: "80",
    id: 3,
  },
  {
    date: "2023-10-04",
    title: "Configurazione Server",
    ore: "12",
    percentage: "100",
    id: 4,
  },
  {
    date: "2023-10-05",
    title: "UI/UX Design App",
    ore: "30",
    percentage: "25",
    id: 5,
  },
  {
    date: "2023-10-06",
    title: "Ottimizzazione SEO",
    ore: "15",
    percentage: "70",
    id: 6,
  },
  {
    date: "2023-10-07",
    title: "Meeting Revisione",
    ore: "2",
    percentage: "100",
    id: 7,
  },
  {
    date: "2023-10-08",
    title: "Bug Fixing API",
    ore: "20",
    percentage: "40",
    id: 8,
  },
  {
    date: "2023-10-09",
    title: "Analisi Database",
    ore: "18",
    percentage: "90",
    id: 9,
  },
  {
    date: "2023-10-10",
    title: "Deploy Produzione",
    ore: "4",
    percentage: "100",
    id: 10,
  },
];

function Progetti() {
  const [projects, setProjects] = useState(products);

  useEffect(() => {
    const localData = localStorage.getItem("progetti");
    if (localData) {
      const progettiNuovi = JSON.parse(localData);
      setProjects(JSON.parse(localData));
      setProjects([...products, ...progettiNuovi]);
    }
  }, []);

  return (
    <div>
      <Header />
      <ProjectList projects={projects} />
    </div>
  );
}

export default Progetti;
