import styles from "./ProjectListItem.module.css";

type ProjectListItemProps = {
  date: string;
  title: string;
  ore: string;
  percentage: string;
};

export default function ProjectListItem({ date, title, ore, percentage }: ProjectListItemProps) {
  return (
    <li className={styles.listItem}>
      <div className={styles.info}>{date}</div>
      <div className={styles.info}>{title}</div>
      <div className={styles.info}>{ore}</div>
      <div className={styles.info}>{percentage}%</div>
    </li>
  );
}