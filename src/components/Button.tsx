import "./Button.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
};

function Button({ type = "button", onClick, children }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
}

export default Button;
