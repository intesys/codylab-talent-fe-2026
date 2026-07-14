import { type ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

//obbliga a dare in input solo delle cose specifiche
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
  };

  // 3. Prende la classe corretta in base alla prop 'variant'
  const variantStyle = variantClasses[variant];
  //aggiunto props e il campo type dinamico
  return (
    <button
      className={`${styles.buttonDefault} ${variantStyle}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
