import { LinksFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";

import differenceInYears from "date-fns/differenceInYears";

import { links as logoLinks } from "~/components/layout/header/headerLogo/HeaderLogo";
import { Header } from "~/components/layout/header/Header";
import { Footer } from "~/components/layout/footer/Footer";
import { Layout } from "~/components/layout/Layout";
import { HomeBanner } from "~/components/banner/HomeBanner";
import { Section } from "~/components/layout/section/Section";
import DividerList from "~/components/dividerList/DividerList";

export const links: LinksFunction = () => [...logoLinks()];

export default function Index() {
  //const DOB = differenceInYears(new Date(), new Date(1986, 08, 17));
  const DOB = "23";

  return <HomeBanner />;
}
