import { ReactNode } from "react";
import style from "./typography.module.css";

type TypographyProps = {
  variant?: "h1" | "h2" | "subtitle" | "body";
  color?: string;
  children: ReactNode;
};

export function Typography({ variant = "body", color, children }: TypographyProps) {
  return (
    <span className={style[variant]} style={{ color }}>
      {children}
    </span>
  );
}