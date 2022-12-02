import type {
  LinksFunction,
  LoaderArgs,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
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

import { db, auth } from "~/utils/firebase";

import {
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

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

// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "Webknit",
//   viewport: "width=device-width,initial-scale=1",
// });

// export async function loader({ request }: LoaderArgs) {
//   return json({
//     user: await getUser(request),
//   });
// }

// export const loader: LoaderFunction = async (params) => {
//   const addData = async () => {
//     const url = new URL(params.request.url);
//     let pathName = url.pathname;

//     if (pathName === "/") pathName = "home";

//     const authentication = await auth.signInAnonymously();

//     try {
//       const res = await setDoc(
//         doc(db, "webknit-pageviews", pathName),
//         {
//           count: increment(1),
//         },
//         { merge: true }
//       );

//       console.log("Document written with ID: ", res);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   if (process.env.IS_PROD == "TRUE") addData();

//   return null;
// };

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
        {/* <Meta /> */}
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
