import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Pages from "../../../consts/pages";
import { useIsLoggedIn } from "../../../hooks";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();

  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res as any);
    })();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      router.push(Pages.home);
    }
  }, [isLoggedIn]);

  const handleSignIn = (event: any, providerId: string) => {
    event.preventDefault();
    signIn(providerId, { redirect: false });
  };

  return (
    <div className=" flex h-screen min-h-screen items-center justify-center bg-slate-800 text-white">
      {providers &&
        Object.values(providers).map((provider: any) => {
          return (
            <div key={provider.name}>
              <button
                className="btn w-full"
                onClick={(event) => handleSignIn(event, provider.id)}
              >{`Sign in with ${provider.name}`}</button>
            </div>
          );
        })}
    </div>
  );
};

export default Login;
