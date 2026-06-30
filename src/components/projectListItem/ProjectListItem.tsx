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
            <button className={styles.buttonDelete} onClick={() => onDelete(id)}>
              Elimina
            </button>
          </div>
        </>
      )}
    </li>
  );
}
