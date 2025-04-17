import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function RootLayout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
