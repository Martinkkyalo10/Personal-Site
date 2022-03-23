import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' href='./styles/dark.css' />
        <link rel='stylesheet' href='./styles/animate.css' />
        <link rel='stylesheet' href='./styles/bootstrap.min.css' />
        <link rel='stylesheet' href='./styles/font-awesome.min.css' />
        <link rel='stylesheet' href='./styles/ionicons.min.css' />
        <link rel='stylesheet' href='./styles/pe-icon.min.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
