import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type ButtonIconProps = Omit<FontAwesomeIconProps, "icon">;

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  Icon?: IconDefinition;
  iconProps?: ButtonIconProps;
  isLoading?: boolean;
}
