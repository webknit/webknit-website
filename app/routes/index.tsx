import { LinksFunction } from "@remix-run/server-runtime";

import differenceInYears from "date-fns/differenceInYears";

import { links as logoLinks } from "~/components/layout/header/headerLogo/HeaderLogo";
import { Header } from "~/components/layout/header/Header";
import { Footer } from "~/components/layout/footer/Footer";
import { Layout } from "~/components/layout/Layout";
import { Banner } from "~/components/banner/Banner";
import { Section } from "~/components/layout/section/Section";

export const links: LinksFunction = () => [...logoLinks()];

export default function Index() {
  const DOB = differenceInYears(new Date(), new Date(1986, 08, 17));

  return (
    <Layout>
      <Banner />
      <Section className="bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2>About</h2>

            <p>
              Hello, my name is Shane Prendergast. I’m a {DOB} year old
              developer who lives in Macclesfield, UK. I have a BSc (Hons) Web
              Design and Development degree from the University of Hull and I’m
              currently working at Nexer.
            </p>

            <p>
              Primarily a Front-End Developer, I also have a strong interest in
              Design and UX. At the moment I’m working with various Javascript
              frameworks and I’m passionate about creating - and constantly
              leaning about - Web Accessibility.
            </p>

            <p>
              Webknit is an online pseudonym that I have used since my time at
              university and this website is a digital collection of my life,
              both work and personal.
            </p>
          </div>

          <div>
            <h2>Experience</h2>

            <ul>
              <li className=" border-grey-100 mb-4 flex justify-between border-b border-solid pb-4">
                <a href="https://www.gathercontent.com/">Gather content</a>

                <span>Nov 2022 - Present</span>
              </li>
              <li className=" border-grey-100 mb-4 flex justify-between border-b border-solid pb-4">
                <a href="https://www.nexerdigital.com/">
                  Nexer (formerly Sigma)
                </a>

                <span>Oct 2018 - June 2022</span>
              </li>

              <li className="border-grey-100 mb-4 flex justify-between border-b border-solid pb-4">
                <a href="https://www.steinias.com/">Stein IAS</a>

                <span>Sept 2014 - Oct 2018</span>
              </li>

              <li className="border-grey-100 mb-4 flex justify-between border-b border-solid pb-4">
                <a href="https://www.steinias.com/">McCann Manchester</a>

                <span>Jan 2013 - Sept 2014</span>
              </li>

              <li className="border-grey-100 mb-4 flex justify-between border-b border-solid pb-4">
                <a href="https://www.steinias.com/">Webknit</a>

                <span>April 2011 - Present</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className="">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2>About</h2>

            <p>
              Hello, my name is Shane Prendergast. I’m a {DOB} year old
              developer who lives in Macclesfield, UK. I have a BSc (Hons) Web
              Design and Development degree from the University of Hull and I’m
              currently working at Nexer.
            </p>

            <p>
              Primarily a Front-End Developer, I also have a strong interest in
              Design and UX. At the moment I’m working with various Javascript
              frameworks and I’m passionate about creating - and constantly
              leaning about - Web Accessibility.
            </p>

            <p>
              Webknit is an online pseudonym that I have used since my time at
              university and this website is a digital collection of my life,
              both work and personal.
            </p>
          </div>

          <div>
            <h2>Experience</h2>

            <ul>
              <li className=" border-grey-100 mb-4 border-b border-solid pb-4">
                <a href="https://www.gathercontent.com/">Gather content</a>

                <span>Nov 2022 - Present</span>
              </li>

              <li className=" border-grey-100 mb-4 border-b border-solid pb-4">
                <a href="https://www.nexerdigital.com/">
                  Nexer (formerly Sigma)
                </a>

                <span>Oct 2018 - Present</span>
              </li>

              <li className="border-grey-100 mb-4 border-b border-solid pb-4">
                <a href="https://www.steinias.com/">Stein IAS</a>

                <span>Sept 2014 - Oct 2018</span>
              </li>

              <li className="border-grey-100 mb-4 border-b border-solid pb-4">
                <a href="https://www.steinias.com/">McCann Manchester</a>

                <span>Jan 2013 - Sept 2014</span>
              </li>

              <li className="border-grey-100 mb-4 border-b border-solid pb-4">
                <a href="https://www.steinias.com/">Webknit</a>

                <span>April 2011 - Present</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
