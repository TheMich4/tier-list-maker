import type { ButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Button = ({
  children,
  className,
  disabled,
  Icon,
  iconProps,
  isLoading,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames("btn-primary btn flex gap-2", className, {
        loading: isLoading,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && (
        <FontAwesomeIcon color="white" size="lg" {...iconProps} icon={Icon} />
      )}
      {children}
    </button>
  );
};

export default Button;
