import styles from "./ProjectListItem.module.css";

import dotsIcon from "../projectList/assets/dots.svg";

type ProjectListItemProps = {
  cliente: string;
  progetto: string;
  attivita: string;
  periodo: string;
  utente: string;
  ggLavorate: string;
  ggVendute: string;
};

export default function ProjectListItem({
  cliente,
  progetto,
  attivita,
  periodo,
  utente,
  ggLavorate,
  ggVendute,
}: ProjectListItemProps) {
  return (
    <li className={styles.listItem}>
      <div className={styles.info}>{cliente}</div>
      <div className={styles.info}>{progetto}</div>
      <div className={styles.info}>{attivita}</div>
      <div className={styles.info}>{periodo}</div>
      <div className={styles.info}>{utente}</div>
      <div className={styles.info}>{ggLavorate}</div>
      <div className={styles.info}>{ggVendute}</div>
      <div className={styles.info}>
        <img src={dotsIcon} alt="Azioni" className={styles.dotsIcon} />
      </div>
    </li>
  );
}
