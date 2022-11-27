import { Children, ReactNode } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

interface Props {
  children?: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
