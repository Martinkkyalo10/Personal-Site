import React, { Fragment } from "react";
import Head from "next/head";

export default function DarkTheme({ children }) {
  return (
    <Fragment>
      <Head>
        <link rel='stylesheet' href='/css/dark.css' />
      </Head>
      {children}
    </Fragment>
  );
}
