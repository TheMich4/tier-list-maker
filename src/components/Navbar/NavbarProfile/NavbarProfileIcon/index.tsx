import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useSession } from "next-auth/react";

const NavbarProfileIcon = () => {
  const { data } = useSession();

  return (
    <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
      <div className="!flex w-10 items-center justify-center rounded-full border-2 border-base-300 bg-black">
        {data?.user?.image ? (
          <Image
            src={data.user.image}
            alt="User avatar"
            width={36}
            height={36}
          />
        ) : (
          <FontAwesomeIcon icon={faUser} size="lg" className="text-base-300" />
        )}
      </div>
    </label>
  );
};

export default NavbarProfileIcon;
