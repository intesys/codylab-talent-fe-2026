import "./TextField.css";

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
};

function TextField({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: TextFieldProps) {
  return (
    <div className="text-field">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-field-error">{error}</p>}
    </div>
  );
}

export default TextField;
