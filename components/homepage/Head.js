import React from "react";
import Head from "next/head";

export default function Head() {
  return (
    <>
      <Head>
        <title>Martin Kyalo</title>
        <meta
          name='discription'
          content='Martin Kyalo is a Fullstack Javascript Developer.'
        />
        <Script src='/public/js/splitting.min.js' />
      </Head>
    </>
  );
}
