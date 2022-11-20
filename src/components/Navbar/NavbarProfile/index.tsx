import NavbarProfileDropdown from "./NavbarProfileDropdown";
import NavbarProfileIcon from "./NavbarProfileIcon";

const NavbarProfile = () => {
  return (
    <div className="dropdown-end dropdown">
      <NavbarProfileIcon />
      <NavbarProfileDropdown />
    </div>
  );
};

export default NavbarProfile;
