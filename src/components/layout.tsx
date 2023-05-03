import React from "react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

type Iprops = {
  children: ReactNode;
};

export default function Layout({ children }: Iprops) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
