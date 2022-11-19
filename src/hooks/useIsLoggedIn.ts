import { useMemo } from "react";
import { useSession } from "next-auth/react";

const useIsLoggedIn = () => {
  const { status } = useSession();

  const isLoggedIn = useMemo(() => status === "authenticated", [status]);

  return isLoggedIn;
};

export default useIsLoggedIn;
