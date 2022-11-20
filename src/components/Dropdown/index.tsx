import { DropdownProps } from "./types";

const Dropdown = ({ children }: DropdownProps) => {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
    >
      {children}
    </ul>
  );
};

export default Dropdown;
