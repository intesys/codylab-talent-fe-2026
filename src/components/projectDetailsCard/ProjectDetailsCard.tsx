import style from "./projectDetailsCard.module.css";

type ProjectDetailsCardProps = {
  label: string;
  content: string;
};

export default function ProjectDetailsCard({
  label,
  content,
}: ProjectDetailsCardProps) {
  return (
    <div className={style.projectDetailsCardBox}>
      <div className={style.projectDetailsCard}>
        <span className={style.projectDetailsCardLabel}>{label}</span>
        <span className={style.projectDetailsCardSpan}>{content}</span>
      </div>
    </div>
  );
}
