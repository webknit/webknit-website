import { LinksFunction } from "@remix-run/server-runtime";

import differenceInYears from "date-fns/differenceInYears";

import { links as logoLinks } from "~/components/layout/header/headerLogo/HeaderLogo";
import { Header } from "~/components/layout/header/Header";
import { Footer } from "~/components/layout/footer/Footer";
import { Layout } from "~/components/layout/Layout";
import { Banner } from "~/components/banner/Banner";
import { Section } from "~/components/layout/section/Section";

export const links: LinksFunction = () => [...logoLinks()];

export default function About() {
  const DOB = differenceInYears(new Date(), new Date(1986, 08, 17));

  return (
    <Layout>
      <Banner />
      <Section className="bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <h2>About</h2>
        </div>
      </Section>
    </Layout>
  );
}
