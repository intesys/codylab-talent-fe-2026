import style from "./TextField.module.css";

type TextFieldProps = {
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | false;
  min?: string;
  max?: string;
  data?: Date;
  ore?: string;
  title?: string;
  percentage?: string;
  label: string;
};

function TextField({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  label,
}: TextFieldProps) {
  return (
    <div className={style.textField}>
      <label className={style.textFieldLabel}>{label}</label>
      <input
        className={style.textFieldInput}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={style.textFieldError}>{error}</p>}
    </div>
  );
}

export default TextField;
