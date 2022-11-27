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
import { getUser } from "./session.server";
import { createRef, useEffect, useRef } from "react";
import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

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
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
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
