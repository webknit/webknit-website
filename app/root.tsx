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
    if (
      !isLoaded.current &&
      !htmlRef.current?.classList.contains("animate-logo")
    ) {
      htmlRef.current?.classList.add("animate-logo");
      isLoaded.current = true;
    }
  }, []);

  return (
    <html lang="en" className="h-full text-gray-900" ref={htmlRef}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <MotionConfig reducedMotion="user">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MotionConfig>
      </body>
    </html>
  );
}
