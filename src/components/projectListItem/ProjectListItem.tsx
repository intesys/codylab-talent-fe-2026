import { useState } from "react";
import styles from "./ProjectListItem.module.css";

type ProjectFields = {
    date: string;
    title: string;
    ore: string;
    percentage: string;
};

type ProjectListItemProps = {
    id: number;
    date: string;
    title: string;
    ore: string;
    percentage: string;
    onDelete: (id: number) => void;
    onEdit: (id: number, fields: ProjectFields) => void;
};

export default function ProjectListItem({ id, date, title, ore, percentage, onDelete, onEdit }: ProjectListItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState<ProjectFields>({ date, title, ore, percentage });

    const handleStartEdit = () => {
        setDraft({ date, title, ore, percentage });
        setIsEditing(true);
    };

    // chiamata quando si invia il form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onEdit(id, draft);
        setIsEditing(false);
    };

    const handleChange = (field: keyof ProjectFields, value: string) => {
        setDraft({ ...draft, [field]: value });
    };

    return (
        <li className={styles.listItem}>
            {isEditing ? (
                <form className={styles.listItem} onSubmit={handleSubmit}>
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
                    <button type="submit">Salva</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Annulla</button>
                </form>
            ) : (
                <>
                    <div className={styles.info}>{date}</div>
                    <div className={styles.info}>{title}</div>
                    <div className={styles.info}>{ore}</div>
                    <div className={styles.info}>{percentage}%</div>

                    <button onClick={handleStartEdit}>Modifica</button>
                    <button onClick={() => onDelete(id)}>Elimina</button>
                </>
            )}
        </li>
    );
}
