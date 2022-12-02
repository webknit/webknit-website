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

  return (
    <Layout>
      {/* <HomeBanner /> */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2>About</h2>

            <p className="mb-0">
              Hello, my name is Shane Prendergast. I’m a {DOB} year old
              developer who lives in Macclesfield, UK. I have a BSc (Hons) Web
              Design and Development degree from the University of Hull and I’m
              currently working at Gather Content.
            </p>

            <p className="mb-0">
              Primarily a Front-End Developer, I also have a strong interest in
              Design and UX. At the moment I’m working with various Javascript
              frameworks and I’m passionate about creating - and constantly
              leaning about - Web Accessibility.
            </p>

            <p className="mb-0">
              Webknit is an online pseudonym that I have used since my time at
              university and this website is a digital collection of my life,
              both work and personal.
            </p>
          </div>

          <div>
            <h2>Experience</h2>

            {/* <DividerList
              items={[
                {
                  text: "Gather content",
                  textLink: "https://www.gathercontent.com/",
                  sideText: "Nov 2022 - Present",
                },
                {
                  text: "Nexer (formerly Sigma)",
                  textLink: "https://www.nexerdigital.com/",
                  sideText: "Oct 2018 - June 2022",
                },
                {
                  text: "Stein IAS",
                  textLink: "https://www.steinias.com/",
                  sideText: "Sept 2014 - Oct 2018",
                },
                {
                  text: "McCann Manchester",
                  textLink: "https://www.gathercontent.com/",
                  sideText: "Jan 2013 - Sept 2014",
                },
                {
                  text: "Webknit",
                  textLink: "https://www.webknit.co.uk",
                  sideText: "April 2011 - Present",
                },
              ]}
            /> */}
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="">
            <h2 className="">Work</h2>

            <div className="border-grey-100 mb-6 border-b border-solid pb-6">
              <h3>
                <a href="https://fed-now.vercel.app/">FedNow Explorer</a>
              </h3>

              <p className="mb-0">
                Funky site for the Federal Reserve. React, Next.js, Custom
                Google maps, user journey, resource library.
              </p>
            </div>

            <div className="border-grey-100 mb-6 border-b border-solid pb-6">
              <h3>
                <a href="https://black-diamond.vercel.app/">Black Diamond</a>
              </h3>

              <p className="mb-0">
                Statistics and streaks from a range of football leagues for the
                purposes of finding the best odds in betting markets.
              </p>
            </div>

            <div className="border-grey-100 mb-6 border-b border-solid pb-6">
              <h3>
                <a href="https://memoryup.webknit.co.uk/">MemoryUp</a>
              </h3>

              <p className="mb-0">
                Following my personal success with{" "}
                <a href="https://fetest.webknit.co.uk/">FEtest</a> I decided to
                made a fully fledged application that allowed users to create
                their own Questions.
              </p>
            </div>

            <div className="grid grid-cols-2">
              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="https://www.royalroms.com/">RoyalRoms</a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="http://www.smartbow.webknit.co.uk/">Smartbow</a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="https://westernislescruises.co.uk/">
                      Westnern Isles Cruises
                    </a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="http://www.beardrevered.com/">Beardrevered</a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="http://nickandsteph.webknit.co.uk/">
                      Nick &amp; Steph
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="o-flex__col o-flex__col--6">
            <h2 className="u-mb-8">Play</h2>

            <div className="border-grey-100 mb-6 border-b border-solid pb-6">
              <h3>
                <a href="http://rideforthechild.co.uk/">Ride For The Child</a>
              </h3>

              <p className="mb-0">
                In September 2016 I cycled 3200 miles across America over a
                period of 28 days. I raised over £12k for children with deafness
                or cancer. The website was a central hub of information.
              </p>
            </div>

            <div className="border-grey-100 mb-6 border-b border-solid pb-6">
              <h3>
                <a href="https://chasingchallenges.webknit.co.uk/">
                  Chasing Challenges
                </a>
              </h3>

              <p className="mb-0">
                Create and showcase challenges using synced activities from the
                world’s most popular human tracking service, Strava.
              </p>
            </div>

            <div className="border-grey-100 mb-6 border-b border-solid pb-6">
              <h3>
                <a href="http://lifeinnumbers.webknit.co.uk/">
                  Life In Numbers
                </a>
              </h3>

              <p className="mb-0">
                A project which outputs some interesting facts digits based on a
                users DOB.
              </p>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="https://password-generator-webknit.vercel.app/">
                      Password generator
                    </a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="https://calculate-rust.vercel.app/">Calculate</a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="https://click-me-webknit.vercel.app/">Click me</a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="http://paceyourself.webknit.co.uk">
                      Pace Yourself
                    </a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="http://won.webknit.co.uk/">Worthy Of Note</a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="http://sass-variable-generator.webknit.co.uk/#/">
                      Sass Variable Generator
                    </a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="https://places.webknit.co.uk/">Places</a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="http://fetest.webknit.co.uk/">FEtest</a>
                  </h3>
                </div>
              </div>

              <div className="border-grey-100 mb-6 border-b border-solid pb-6">
                <div className="">
                  <h3 className="mb-0 text-base">
                    <a href="http://moustache.webknit.co.uk/">Moustache</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
