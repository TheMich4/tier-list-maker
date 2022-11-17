import NavbarHamburger from "./NavbarHamburger";
import NavbarProfile from "./NavbarProfile";
import Pages from "../../consts/pages";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push(Pages.home);
  };

  return (
    <div className="navbar mb-8 flex justify-between rounded-xl bg-neutral shadow-xl">
      <NavbarHamburger />

      <a
        className="btn-ghost btn text-xl normal-case text-base-200"
        onClick={handleTitleClick}
      >
        tier-list-maker
      </a>

      <NavbarProfile />
    </div>
  );
};

export default Navbar;
