import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MotionConfig } from "framer-motion";

import tailwindStylesheetUrl from "./styles/styles.min.css";
// import { getUser } from "./session.server";
import { createRef, useEffect, useRef } from "react";
import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png",
    },
    { rel: "manifest", href: "/favicon/site.webmanifest" },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Webknit",
  viewport: "width=device-width,initial-scale=1",
});

// export async function loader({ request }: LoaderArgs) {
//   return json({
//     user: await getUser(request),
//   });
// }

export default function App() {
  const htmlRef = createRef<HTMLHtmlElement>();
  const isLoaded = useRef(false);

  useEffect(() => {
    console.log(isLoaded, htmlRef);

    if (
      !isLoaded.current &&
      !htmlRef.current?.classList.contains("animate-logo")
    ) {
      htmlRef.current?.classList.add("animate-logo");
      isLoaded.current = true;
    }
  }, [isLoaded, htmlRef]);

  useEffect(() => {
    if (
      localStorage.webknitTheme === "dark" ||
      (!("webknitTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <html lang="en" className="h-full" ref={htmlRef}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full text-gray-900 dark:text-white">
        <MotionConfig reducedMotion="user">
          <Header />
          <Outlet />
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MotionConfig>
      </body>
    </html>
  );
}
