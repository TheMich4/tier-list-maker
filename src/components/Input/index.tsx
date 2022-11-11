import type { InputProps } from "./types";
import classNames from "classnames";

const Input = ({
  error,
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: InputProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type={type}
        className={classNames("input-bordered", "input", {
          ["input-error"]: error,
        })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

export default Input;
