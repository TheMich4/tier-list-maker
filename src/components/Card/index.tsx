import type { CardProps } from "./types";
import classNames from "classnames";

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={classNames(
        "card overflow-hidden rounded-xl border border-black/10 p-2 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
