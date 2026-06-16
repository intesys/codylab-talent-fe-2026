import styles from "./ProjectListItem.module.css";

type ProjectListItemProps = {
    id: number; // Aggiunto
    date: string;
    title: string;
    ore: string;
    percentage: string;
    onDelete: (id: number) => void; // Aggiunto così ogni riga sa il proprio id e può eliminarsi con questa funizone
};
//aggiunti id e onDelete ai props passati alla funzione
export default function ProjectListItem({ id, date, title, ore, percentage, onDelete }: ProjectListItemProps) {
    return (
        <li className={styles.listItem}>
            <div className={styles.info}>{date}</div>
            <div className={styles.info}>{title}</div>
            <div className={styles.info}>{ore}</div>
            <div className={styles.info}>{percentage}%</div>
            <div className={styles.info}><button className={styles.button} onClick={() => onDelete(id)}>Elimina</button></div>
            
        </li>
    );
}