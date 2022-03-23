import React, { Fragment } from "react";
import DarkTheme from "./DarkTheme";
import Footer from "./Footer";
import MainNavibar from "./MainNav";

export default function Layout(props) {
  return (
    <Fragment>
      <MainNavibar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
