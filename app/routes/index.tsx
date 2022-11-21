import { LinksFunction } from "@remix-run/server-runtime";

import { links as logoLinks } from "~/components/branding/logo/Logo";
import { Header } from "~/components/layout/header/Header";

export const links: LinksFunction = () => [...logoLinks()];

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}
