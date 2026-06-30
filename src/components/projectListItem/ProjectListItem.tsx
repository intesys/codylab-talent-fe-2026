import { useState } from "react";
import type { Project } from "../../App";
import styles from "./ProjectListItem.module.css";

type ProjectListItemProps = {
  id: number; // Aggiunto
  date: string;
  title: string;
  ore: string;
  percentage: string;
  update: (id: number, fields: Omit<Project, "id">) => void; // Aggiunto: salva le modifiche della riga
  onDelete: (id: number) => void; // Aggiunto così ogni riga sa il proprio id e può eliminarsi con questa funizone
};

//aggiunti id, onDelete e onEdit ai props passati alla funzione
export default function ProjectListItem({
  id,
  date,
  title,
  ore,
  percentage,
  update,
  onDelete,
}: ProjectListItemProps) {
  // isEditing: dice se la riga è in modalità modifica
  const [isEditing, setIsEditing] = useState(false);
  // draft: copia locale dei valori mentre l'utente sta modificando
  const [draft, setDraft] = useState<Omit<Project, "id">>({
    date,
    title,
    ore,
    percentage,
  });

  // entra in modifica ripartendo sempre dai valori attuali
  const handleStartEdit = () => {
    setDraft({ date, title, ore, percentage });
    setIsEditing(true);
  };

  // salva: passa i nuovi valori al parent ed esce dalla modalità modifica
  const handleSave = () => {
    update(id, draft);
    setIsEditing(false);
  };

  // annulla: esce senza salvare
  const handleCancel = () => {
    setIsEditing(false);
  };

  // aggiorna un singolo campo del draft mentre si scrive
  const handleChange = (field: keyof Omit<Project, "id">, value: string) => {
    setDraft({ ...draft, [field]: value });
  };

  return (
    <li className={styles.listItem}>
      {isEditing ? (
        <>
          <input
            className={styles.info}
            value={draft.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
          <input
            className={styles.info}
            value={draft.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <input
            className={styles.info}
            value={draft.ore}
            onChange={(e) => handleChange("ore", e.target.value)}
          />
          <input
            className={styles.info}
            value={draft.percentage}
            onChange={(e) => handleChange("percentage", e.target.value)}
          />
          <button onClick={handleSave}>Salva</button>
          <button onClick={handleCancel}>Annulla</button>
        </>
      ) : (
        <>
          <div className={styles.info}>{date}</div>
          <div className={styles.info}>{title}</div>
          <div className={styles.info}>{ore}</div>
          <div className={styles.info}>{percentage}%</div>
          <button className={styles.bottoncircle} onClick={handleStartEdit}> </button>
          <div className={styles.info}>
            <button className={styles.buttonDelete} onClick={() => onDelete(id)}> </button>
          </div>
          <button className={styles.buttonFilter1}> </button>
          <button className={styles.buttonDetails}>Visualizza Dettaglio </button>
          <button className={styles.buttonApply}>Applica</button>

          <div className={styles.default}>
            <button className={styles.buttonTable}></button>
            <button className={styles.buttonGraph}></button>
          </div>

          <button className={styles.buttonExport}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10.4167 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V10.4167M2.5 8.33333H17.5M8.33333 2.5V17.5M13.3333 15.8333H18.3333M15.8333 18.3333L18.3333 15.8333L15.8333 13.3333" stroke="#0F33CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> Scarica Report</button>
        </>
      )}
    </li>
  );
}
