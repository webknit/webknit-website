import { LinksFunction } from "@remix-run/server-runtime";

import differenceInYears from "date-fns/differenceInYears";

import { links as logoLinks } from "~/components/layout/header/headerLogo/HeaderLogo";
import { Header } from "~/components/layout/header/Header";
import { Footer } from "~/components/layout/footer/Footer";
import { Layout } from "~/components/layout/Layout";

import { Section } from "~/components/layout/section/Section";
import { Banner } from "~/components/banner/Banner";

export const links: LinksFunction = () => [...logoLinks()];

export default function About() {
  // const DOB = differenceInYears(new Date(), new Date(1986, 08, 17));

  return (
    <Layout>
      <Banner text="About" />
    </Layout>
  );
}
