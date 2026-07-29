import { useState } from "react";
import type { Project, ProjectStatusEnum } from "../../api";
import styles from "./ProjectListItem.module.css";

type ProjectListItemProps = {
  project: Project;
  update: (id: number, fields: Partial<Project>) => void;
  onDelete: (id: number) => void;
};

export default function ProjectListItem({
  project,
  update,
  onDelete,
}: ProjectListItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  // We store the form data locally.
  const [draft, setDraft] = useState<Partial<Project>>({
    title: project.title,
    startDate: project.startDate,
    estimatedHours: project.estimatedHours,
    status: project.status,
  });

  const handleStartEdit = () => {
    setDraft({
      title: project.title,
      startDate: project.startDate,
      estimatedHours: project.estimatedHours,
      status: project.status,
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (project.id !== undefined) {
      update(project.id, draft);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // Helper to securely format the display of Date or string.
  const formatDateDisplay = (dateValue: Date | string | undefined): string => {
    if (!dateValue) return "-";
    if (dateValue instanceof Date) {
      return dateValue.toISOString().split("T")[0];
    }
    return String(dateValue);
  };

  // Helper to retrieve a safe value from the date input.
  const getDateInputValue = (dateValue: Date | string | undefined): string => {
    if (!dateValue) return "";
    if (dateValue instanceof Date) {
      return dateValue.toISOString().split("T")[0];
    }
    return String(dateValue);
  };

  return (
    <li className={styles.listItem}>
      {isEditing ? (
        <>
          {/* Date Input with native support for Date or string */}
          <input
            className={styles.info}
            type="date"
            value={getDateInputValue(draft.startDate)}
            onChange={(e) => {
              const val = e.target.value;
              setDraft({
                ...draft,
                // If OpenAPI requires a Date, it converts it. If it's a string/any string, it assigns an assignment.
                startDate: val ? new Date(val) : undefined,
              });
            }}
          />

          {/* Title Input */}
          <input
            className={styles.info}
            value={draft.title ?? ""}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          />

          {/* Estimated Hours Input */}
          <input
            className={styles.info}
            type="number"
            value={draft.estimatedHours ?? 0}
            onChange={(e) =>
              setDraft({
                ...draft,
                estimatedHours: e.target.value
                  ? Number(e.target.value)
                  : undefined,
              })
            }
          />

          {/* Select Status ensuring ProjectStatusEnum typing */}
          <select
            className={styles.info}
            value={(draft.status as string) ?? ""}
            onChange={(e) =>
              setDraft({
                ...draft,
                status: e.target.value as ProjectStatusEnum,
              })
            }
          >
            <option value="CREATED">CREATED</option>
            <option value="WORKING">WORKING</option>
            <option value="STANDBY">STANDBY</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="CLOSED">CLOSED</option>
          </select>

          <button onClick={handleSave}>Salva</button>
          <button onClick={handleCancel}>Annulla</button>
        </>
      ) : (
        <>
          <div className={styles.info}>
            {formatDateDisplay(project.startDate)}
          </div>
          <div className={styles.info}>{project.title ?? "-"}</div>
          <div className={styles.info}>{project.estimatedHours ?? 0} h</div>
          <div className={styles.info}>{project.status ?? "-"}</div>
          <button onClick={handleStartEdit}>Modifica</button>
          <div className={styles.info}>
            <button
              className={styles.button}
              onClick={() => {
                if (project.id !== undefined) {
                  onDelete(project.id);
                }
              }}
            >
              Elimina
            </button>
          </div>
        </>
      )}
    </li>
  );
}
