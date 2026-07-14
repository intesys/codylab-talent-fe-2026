import styles from "./Section.module.css";

export const Section: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};
