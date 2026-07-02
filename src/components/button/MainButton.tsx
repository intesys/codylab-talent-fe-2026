import styles from './mainButton.module.css';

//obbliga a dare in input solo delle cose specifiche
interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
}

export function SingleButton({ variant, children }: ButtonProps) {
    // conbina ogni prop alla sua variante css
    const variantClasses = {
        primary: styles.primary,
        secondary: styles.secondary
    };


// 3. Prende la classe corretta in base alla prop 'variant'
    const variantStyle = variantClasses[variant];

    return (
        <button className={`${styles.buttonDefault} ${variantStyle}`} type="button">
            {children}
        </button>
    );
}