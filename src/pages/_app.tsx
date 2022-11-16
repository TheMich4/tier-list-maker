import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </DndProvider>
  );
};

export default trpc.withTRPC(MyApp);
