import { SessionProvider } from "next-auth/react";
import React from "react";

import DarkTheme from "../components/layout/DarkTheme";
import dark from "../styles/dark.css";
import animate from "../styles/animate.css";
import bootstrap from "../styles/bootstrap.min.css";
import fontawesome from "../styles/font-awesome.min.css";
import ionicons from "../styles/ionicons.min.css";
import peicon from "../styles/pe-icon.min.css";

import Layout from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <DarkTheme>
        <Layout>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </DarkTheme>
    </SessionProvider>
  );
}

export default MyApp;
