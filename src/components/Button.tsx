import styles from './Button.module.css';
import React from 'react';

//obbliga a dare in input solo delle cose specifiche
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function SingleButton({ variant = 'primary', children, type = 'button', ...props }: ButtonProps) {
  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary
  };


// 3. Prende la classe corretta in base alla prop 'variant'
  const variantStyle = variantClasses[variant];
//aggiunto props e il campo type dinamico
  return (
      <button className={`${styles.buttonDefault} ${variantStyle}`} type={type} {...props}>
        {children}
      </button>
  );
}