import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

// Lines below are required for Next.js to work with fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import font from "../config/font";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <SessionProvider session={session}>
        <Head>
          <title>tier-list-maker</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={`${font.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </DndProvider>
  );
};

export default trpc.withTRPC(MyApp);
