import Dropdown from "../../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarHamburgerItem from "./NavbarHamburgerItem";
import Pages from "../../../consts/pages";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const p = [
  { name: "Homepage", href: Pages.home },
  { name: "Create Template", href: Pages.template },
  { name: "Create Tier List", href: Pages.create },
];

const NavbarHamburger = () => {
  const renderItems = () => {
    return p.map((page) => (
      <NavbarHamburgerItem name={page.name} href={page.href} key={page.name} />
    ));
  };

  return (
    <div className="dropdown">
      <button className="btn-ghost btn-square btn">
        <FontAwesomeIcon icon={faBars} color="white" size="lg" />
      </button>
      <Dropdown>{renderItems()}</Dropdown>
    </div>
  );
};

export default NavbarHamburger;
