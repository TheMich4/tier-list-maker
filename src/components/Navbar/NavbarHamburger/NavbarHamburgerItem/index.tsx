import { useRouter } from "next/router";

const NavbarHamburgerItem = ({ name, href }) => {
  const router = useRouter();

  const handleClick = () => {
    href && router.push(href);
  };

  return (
    <li>
      <a onClick={handleClick}>{name}</a>
    </li>
  );
};
export default NavbarHamburgerItem;
