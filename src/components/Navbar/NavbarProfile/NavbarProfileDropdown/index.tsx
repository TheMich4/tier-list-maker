import { signOut, useSession } from "next-auth/react";

import Dropdown from "../../../Dropdown";
import Pages from "../../../../consts/pages";
import { useIsLoggedIn } from "../../../../hooks";
import { useRouter } from "next/router";

const NavbarProfileDropdown = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();
  const isLoggedIn = useIsLoggedIn();

  const handleLog = () => {
    if (isLoggedIn) {
      signOut();
    } else {
      router.push(Pages.login);
    }
  };

  return (
    <Dropdown>
      {isLoggedIn && (
        <>
          <li className="px-4 py-2 font-bold">{sessionData?.user?.name}</li>
          <li>
            <a
              className="justify-between"
              onClick={() => router.push(Pages.profile)}
            >
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </>
      )}
      <li>
        <a onClick={handleLog}>{isLoggedIn ? "Log out" : "Log in"}</a>
      </li>
    </Dropdown>
  );
};

export default NavbarProfileDropdown;
