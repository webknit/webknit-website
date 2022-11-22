import { LinksFunction } from "@remix-run/server-runtime";

import { links as logoLinks } from "~/components/layout/header/headerLogo/HeaderLogo";
import { Header } from "~/components/layout/header/Header";
import { Footer } from "~/components/layout/footer/Footer";
import { Layout } from "~/components/layout/Layout";
import { Banner } from "~/components/banner/Banner";

export const links: LinksFunction = () => [...logoLinks()];

export default function Index() {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
}
