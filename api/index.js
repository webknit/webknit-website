"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links2
});
var import_react4 = require("@remix-run/react"), import_framer_motion3 = require("framer-motion");

// app/styles/styles.min.css
var styles_min_default = "/build/_assets/styles.min-7KA37KY2.css";

// app/root.tsx
var import_react5 = require("react");

// app/components/layout/header/headerLogo/styles/logo.css
var logo_default = "/build/_assets/logo-WRZBY2DJ.css";

// app/components/layout/header/headerLogo/HeaderLogo.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: logo_default }], Logo = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", {
    className: "c-header__logo c-logo c-logo--animate",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 508.16 319.23",
    width: "80",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", {
        points: "145.84 76.2 111.84 63.2 124.84 86.2 128.84 114.2 118.84 137.2 81.84 145.2 51.84 133.2 42.84 117.2 31.84 92.2 10.84 92.2 16.84 71.2 48.84 35.2 86.84 12.2 127.84 10.2 170.84 25.2 180.84 37.2 170.84 59.2 167.84 79.2 159.84 93.2 145.84 76.2",
        className: "c-logo__horn c-logo__horn--left"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", {
        points: "324.84 36.2 350.84 19.2 385.84 9.2 422.84 13.2 456.84 33.2 474.84 56.2 495.84 74.2 500.84 98.2 471.84 91.2 469.84 110.2 458.84 126.2 440.84 140.2 423.84 145.2 398.84 145.2 382.84 132.2 378.84 103.2 380.84 82.2 386.84 74.2 374.84 66.2 361.84 80.2 351.84 94.2 337.84 74.2 324.84 36.2",
        className: "c-logo__horn c-logo__horn--right"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", {
        points: "162.84 106.2 192.84 95.2 219.51 108.2 236.17 143.53 234.84 168.2 222.84 215.53 225.51 227.53 258.17 246.86 286.17 222.2 274.17 194.2 266.84 145.53 276.84 115.53 292.84 97.53 329.51 96.2 348.84 112.86 348.84 152.86 318.17 202.86 288.84 232.86 254.17 254.2 226.17 236.2 185.51 196.86 156.17 129.53 162.84 106.2",
        className: "c-logo__eye-sockets"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
        d: "M213.16,150.31a13,13,0,1,0-13,13A13,13,0,0,0,213.16,150.31Z",
        className: "c-logo__eye c-logo__eye--left"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
        d: "M318.26,155.76A6.51,6.51,0,1,0,329.38,149a23.05,23.05,0,0,0-39,0,6.51,6.51,0,0,0,11.13,6.76,10,10,0,0,1,16.77,0Z",
        className: "c-logo__eye c-logo__eye--right"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", {
        points: "167.84 79.2 183.51 67.53 203.51 62.86 238.84 70.86 259.51 82.86 290.84 63.53 325.51 69.53 338.34 76.7 346.34 101.7 316.84 96.2 283.84 112.2 270.84 155.7 279.34 202.7 288.84 224.7 314.34 205.2 341.84 168.2 343.84 222.2 320.84 255.2 299.84 281.2 280.84 300.2 237.34 309.7 216.34 293.2 202.84 269.2 183.34 258.2 164.84 211.7 165.84 173.2 193.34 203.2 216.34 222.7 228.84 191.2 234.84 132.2 219.84 103.2 184.34 93.7 159.84 104.2 167.84 79.2",
        className: "c-logo__face-bg"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", {
        points: "217.51 225.53 248.17 248.2 290.84 226.2 303.51 257.53 294.84 292.86 270.84 309.53 237.34 309.7 211.51 288.86 200.84 259.2 217.51 225.53",
        className: "c-logo__mouth"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", {
        points: "170.17 63.53 188.84 32.86 226.17 27.53 260.84 16.86 290.84 30.86 319.51 34.2 337.51 57.53 338.34 76.7 312.84 66.2 284.17 67.53 262.84 76.86 251.51 80.2 229.51 68.86 199.51 66.86 176.84 74.86 170.17 63.53",
        className: "c-logo__hair"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
        d: "M479.06,50.53c-6.4-11.68-38.68-62.45-108.71-47.95-22.42,4.64-37.41,14.77-47,24a45.73,45.73,0,0,0-11.89-5.22,44.82,44.82,0,0,0-24,.2,53.82,53.82,0,0,0-66.91,0,44.82,44.82,0,0,0-24-.2,46,46,0,0,0-11.9,5.22c-9.53-9.23-24.53-19.36-46.94-24-70-14.49-102.31,36.27-108.7,48C10.81,59.22,0,76.37,0,98.94a8.36,8.36,0,0,0,12.72,7.14,67.59,67.59,0,0,1,15.57-6.26c3.44,17.94,17.1,54.28,71.43,54.28V154c.48,0,1,.08,1.45.08,4.89,0,10.11-1.51,16-4.6,13.2-7,21.49-20.94,22.15-37.35.57-14-4.32-27.58-13.48-38.83a31.2,31.2,0,0,1,9.84,5.76c12,10.59,12.27,28.26,12.28,28.43h.19c-.19,1.11-.35,2.22-.48,3.34a92.88,92.88,0,0,0,.36,24c0,1.36.08,2.23.11,2.42l.25,0a112,112,0,0,0,8.43,27.19c-.55,2.52-12.5,59.22,17.79,90.48a127,127,0,0,0,22.06,18.47,58.87,58.87,0,0,0,114.82,0,126.27,126.27,0,0,0,22.07-18.47c30.29-31.25,18.34-87.94,17.78-90.48a111.64,111.64,0,0,0,8.42-27.08l.3,0c0-.22.11-1.29.14-2.94a92.9,92.9,0,0,0,.3-23.61c-.12-1.14-.3-2.26-.48-3.37h.18c0-.17.33-17.75,12.19-28.31a31.19,31.19,0,0,1,9.95-5.86c-9.16,11.26-14.05,24.84-13.5,38.84.67,16.41,8.95,30.37,22.15,37.35,5.88,3.09,11.12,4.6,16,4.6h0c.5,0,1,0,1.45-.08v.08c54.33,0,68-36.34,71.43-54.28a66.6,66.6,0,0,1,15.57,6.26,8.37,8.37,0,0,0,12.72-7.14C508.16,76.37,497.34,59.22,479.06,50.53ZM296.24,260.34c0,1.1-.06,2.18-.14,3.25-17,12.05-28.89,4.33-33.65-.14v-7.24a295.37,295.37,0,0,0,27-18.78A41.87,41.87,0,0,1,296.24,260.34ZM335.12,89.7c-20-8.86-44.79-3-58.2,14.49-30.05,39.11-7.34,96.78,3.42,119.1a286.36,286.36,0,0,1-26.26,18.4,285.93,285.93,0,0,1-26-18.2c10.72-22.17,33.65-80.08,3.52-119.3C218.09,86.56,193,80.73,172.86,90c7.83-11.12,20.13-18.07,34-18.07a54.11,54.11,0,0,1,40.57,18.23,8.36,8.36,0,0,0,13.19,0,54.28,54.28,0,0,1,40.57-18.23A41.43,41.43,0,0,1,335.12,89.7ZM177.55,106.33c13.29-7.56,31.59-3.94,40.82,8,22.76,29.66,6.22,76.3-3.58,98-22-19.63-45.06-47-50-78.44C164.78,128.39,165.91,113,177.55,106.33Zm34.37,154a42.07,42.07,0,0,1,6.78-22.91,290.8,290.8,0,0,0,27,18.78v7.34c-4.58,4.27-16.51,12.18-33.66,0C212,262.48,211.92,261.42,211.92,260.34Zm81.75-48.22c-9.84-21.77-26.19-68.19-3.47-97.74,9.2-12,27.51-15.61,40.8-8,11.21,6.37,12.43,21,12.46,26.9-4.44,29.17-24.53,54.57-42.42,72C298.59,207.62,296.12,209.91,293.67,212.12ZM201.12,37.49c7.16-2,14-.39,18.42,1.31A8.39,8.39,0,0,0,228.32,37l.18-.17a37.1,37.1,0,0,1,51.07-.07c.09.08.16.17.26.25a8.36,8.36,0,0,0,8.77,1.77c4.45-1.7,11.26-3.3,18.43-1.31a29.25,29.25,0,0,1,17.79,14.12,30.84,30.84,0,0,1,3.5,10.26,57.5,57.5,0,0,0-27.08-6.72,71.21,71.21,0,0,0-47.16,17.92,71.27,71.27,0,0,0-47.17-17.92,57.5,57.5,0,0,0-27.08,6.72,30.18,30.18,0,0,1,3.5-10.26A29.27,29.27,0,0,1,201.12,37.49Zm-150,76.75A52.76,52.76,0,0,1,45,98.52a27.33,27.33,0,0,1,14.77,6.69c6.32,5.59,10.23,14.21,14,22.56,1,2.1,1.94,4.26,3,6.39C65.43,130.55,56.83,123.89,51.09,114.24Zm71.49-2.76c-.41,10.38-5.36,19-13.24,23.21-4.18,2.21-6.75,2.68-8.17,2.68-4.17,0-7-5.3-12.12-16.53-4.31-9.48-9.19-20.23-18.2-28.18-8.43-7.44-18.74-11.22-30.64-11.22A68.42,68.42,0,0,0,18.75,85.2C26.08,62.88,51.2,60.9,59.8,60.9A76.68,76.68,0,0,1,99.86,72.44C114.7,81.87,123.2,96.46,122.58,111.48Zm24.31-44.81c-11.11-9.9-26.27-14-45.09-12.34a94.44,94.44,0,0,0-42-10.17c-2.16,0-4.27.09-6.34.23C66.27,29.4,91.73,10.14,134.41,19c18,3.74,30.17,11.62,38,18.91a48.33,48.33,0,0,0-3.66,5.58,46.57,46.57,0,0,0-5.19,31.28,59.58,59.58,0,0,0-5.3,6.88A49.67,49.67,0,0,0,146.89,66.67Zm39.73,176.6c-14.09-14.53-16.33-37.69-15.74-54.48a205.26,205.26,0,0,0,24.82,28.69c3.34,3.25,6.7,6.33,10,9.24a58.38,58.38,0,0,0-9.93,25.17C192.76,249.31,189.69,246.45,186.62,243.27Zm67.46,59.23a42.13,42.13,0,0,1-33.6-16.72,39.11,39.11,0,0,0,8.87,1c10.78,0,19.34-4.68,24.75-8.78,5.43,4.1,14,8.78,24.78,8.78a38.62,38.62,0,0,0,8.76-1A42.11,42.11,0,0,1,254.08,302.5Zm67.45-59.23c-3.08,3.18-6.14,6-9.16,8.62a58.25,58.25,0,0,0-9.94-25.17c3.31-2.91,6.67-6,10-9.24a205.26,205.26,0,0,0,24.82-28.69C337.85,205.58,335.61,228.74,321.53,243.27Zm39.72-176.6a49.59,49.59,0,0,0-11.3,15,63.12,63.12,0,0,0-5.3-6.88,47.1,47.1,0,0,0-8.86-36.86c7.79-7.29,19.91-15.17,38-18.91,42.68-8.83,68.14,10.43,80.95,25.42-2.07-.14-4.18-.23-6.34-.23a94.52,94.52,0,0,0-42,10.17C387.53,52.63,372.38,56.77,361.25,66.67Zm70.15,67.41c1-2.11,2-4.23,3-6.31,3.78-8.35,7.7-17,14-22.56a27.23,27.23,0,0,1,14.89-6.71C461.05,109.14,454,126.81,431.4,134.08Zm36.54-52.64c-11.9,0-22.21,3.78-30.63,11.22-9,8-13.9,18.7-18.2,28.18-5.1,11.24-7.95,16.53-12.12,16.53-1.43,0-4-.47-8.18-2.68-7.87-4.16-12.84-12.83-13.24-23.21-.61-15,7.89-29.61,22.72-39A76.72,76.72,0,0,1,448.36,60.9c8.59,0,33.71,2,41,24.3A68.42,68.42,0,0,0,467.94,81.44Z",
        className: "c-logo__face"
      })
    ]
  })
});

// app/components/layout/nav/nav.tsx
var import_framer_motion = require("framer-motion"), import_react2 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime");
function Nav() {
  let activeClassName = "ml-2 sm:ml-6 dark:text-white underline", [darkMode, setDarkMode] = (0, import_react2.useState)(!1), variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" }
  };
  return (0, import_react2.useEffect)(() => {
    document.documentElement.classList.contains("dark") ? setDarkMode(!0) : setDarkMode(!1);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("nav", {
    className: "flex items-center",
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
      className: "ml-2 w-8 sm:ml-6",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        className: "relative h-[35px] w-[35px] overflow-hidden",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", {
          className: "h-[32px] w-[32px]",
          onClick: () => {
            darkMode ? document.documentElement.classList.remove("dark") : document.documentElement.classList.add("dark"), setDarkMode(!darkMode), document.documentElement.classList.remove("animate-logo"), setTimeout(() => {
              document.documentElement.classList.add("animate-logo");
            }, 100);
          },
          "aria-label": `Turn on ${darkMode ? "dark" : "light"} mode`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_framer_motion.motion.span, {
              animate: darkMode ? "open" : "closed",
              variants,
              className: "absolute top-0 left-0",
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", {
                className: "w-full",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0003 21.4194C13.0123 21.4194 10.5813 18.9874 10.5813 15.9994C10.5813 13.0114 13.0123 10.5804 16.0003 10.5804C18.9883 10.5804 21.4193 13.0114 21.4193 15.9994C21.4193 18.9874 18.9883 21.4194 16.0003 21.4194M16.0003 8.64136C11.9423 8.64136 8.64233 11.9414 8.64233 15.9994C8.64233 20.0574 11.9423 23.3574 16.0003 23.3574C20.0573 23.3574 23.3583 20.0574 23.3583 15.9994C23.3583 11.9414 20.0573 8.64136 16.0003 8.64136",
                    fill: "white"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0004 7.08447C16.5364 7.08447 16.9704 6.64946 16.9704 6.11446V3.34546C16.9704 2.81046 16.5364 2.37646 16.0004 2.37646C15.4644 2.37646 15.0304 2.81046 15.0304 3.34546V6.11446C15.0304 6.64946 15.4644 7.08447 16.0004 7.08447",
                    fill: "white"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.11559 15.0298H3.34559C2.81059 15.0298 2.37659 15.4648 2.37659 15.9998C2.37659 16.5348 2.81059 16.9688 3.34559 16.9688H6.11559C6.65159 16.9688 7.08459 16.5348 7.08459 15.9998C7.08459 15.4648 6.65159 15.0298 6.11559 15.0298",
                    fill: "white"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0004 24.9146C15.4644 24.9146 15.0304 25.3496 15.0304 25.8846V28.6536C15.0304 29.1886 15.4644 29.6236 16.0004 29.6236C16.5364 29.6236 16.9704 29.1886 16.9704 28.6536V25.8846C16.9704 25.3496 16.5364 24.9146 16.0004 24.9146",
                    fill: "white"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.6542 15.0298H25.8842C25.3492 15.0298 24.9152 15.4648 24.9152 15.9998C24.9152 16.5348 25.3492 16.9688 25.8842 16.9688H28.6542C29.1902 16.9688 29.6242 16.5348 29.6242 15.9998C29.6242 15.4648 29.1902 15.0298 28.6542 15.0298",
                    fill: "white"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22.9896 9.97995C23.2376 9.97995 23.4856 9.88495 23.6756 9.69595L24.7036 8.66795C25.0816 8.28995 25.0816 7.67495 24.7036 7.29595C24.3246 6.91795 23.7106 6.91795 23.3316 7.29595L22.3036 8.32495C21.9256 8.70295 21.9256 9.31695 22.3036 9.69595C22.4926 9.88495 22.7416 9.97995 22.9896 9.97995",
                    fill: "white"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.32507 9.69593C8.51407 9.88493 8.76207 9.97993 9.01107 9.97993C9.25907 9.97993 9.50707 9.88493 9.69607 9.69593C10.0751 9.31693 10.0751 8.70293 9.69607 8.32493L8.66807 7.29693C8.28907 6.91893 7.67507 6.91893 7.29707 7.29693C6.91807 7.67493 6.91807 8.28993 7.29707 8.66793L8.32507 9.69593Z",
                    fill: "white"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.32507 22.3043L7.29707 23.3313C6.91807 23.7093 6.91807 24.3243 7.29707 24.7023C7.48607 24.8923 7.73407 24.9873 7.98207 24.9873C8.23007 24.9873 8.47807 24.8923 8.66807 24.7023L9.69607 23.6753C10.0751 23.2973 10.0751 22.6833 9.69607 22.3043C9.31807 21.9253 8.70307 21.9253 8.32507 22.3043",
                    fill: "white"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23.6752 22.3043C23.2962 21.9253 22.6822 21.9253 22.3032 22.3043C21.9252 22.6833 21.9252 23.2973 22.3042 23.6753L23.3322 24.7023C23.5212 24.8923 23.7692 24.9873 24.0182 24.9873C24.2662 24.9873 24.5142 24.8923 24.7032 24.7023C25.0822 24.3243 25.0822 23.7093 24.7032 23.3313L23.6752 22.3043Z",
                    fill: "white"
                  })
                ]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_framer_motion.motion.span, {
              animate: darkMode ? "closed" : "open",
              variants,
              className: "absolute top-0 left-0",
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", {
                className: "w-full",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993",
                  fill: "#0026FF"
                })
              })
            })
          ]
        })
      })
    })
  });
}

// app/components/layout/header/Header.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", {
    className: "border-grey-100 flex items-center justify-between border-b border-solid p-4 dark:border-none dark:bg-gray-800 md:px-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Logo, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Nav, {})
    ]
  });
}

// app/components/layout/section/Section.tsx
var import_react3 = __toESM(require("react"));
function Section({ className, children, id, element }) {
  let allowedTags = ["div", "section", "footer", "header", "aside"], checkTag = () => allowedTags.includes(element ?? "") ? element : "div";
  return import_react3.default.createElement(checkTag(), {
    children,
    id,
    className: `py-8 md:py-16 ${className || ""}`
  });
}

// app/components/layout/footer/Footer.tsx
var import_framer_motion2 = require("framer-motion"), import_jsx_runtime5 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_framer_motion2.motion.div, {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: 0.2 },
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Section, {
      className: "bg-webknit-blue text-white dark:bg-gray-900",
      id: "footer",
      element: "footer",
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
        className: "text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("a", {
            href: "mailto:contact@webknit.co.uk",
            className: "mb-8 inline-flex items-center rounded-full border border-solid border-white py-2 px-4 text-white hover:underline",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", {
                className: "mr-2 w-4",
                id: "e66dc2f1-c542-49ae-8ea5-247e3035ce4c",
                "data-name": "Capa 1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 390",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("title", {
                    children: "email"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                    d: "M467,0H45A45.08,45.08,0,0,0,0,45V345a45.07,45.07,0,0,0,45,45H467a45.07,45.07,0,0,0,45-45V45A45.07,45.07,0,0,0,467,0Zm-6.21,30L257,233.83,51.36,30ZM30,338.79V51.07L174.48,194.31ZM51.21,360,195.78,215.43l50.66,50.22a15,15,0,0,0,21.17,0L317,216.21,460.79,360ZM482,338.79,338.21,195,482,51.21Z",
                    style: { fill: "#FFF" }
                  })
                ]
              }),
              "contact@webknit.co.uk"
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", {
            className: "c-footer__text u-mb-0",
            children: [
              "\xA9 Webknit ",
              new Date().getFullYear(),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
              "Please don\u2019t copy, it took me ages!"
            ]
          })
        ]
      })
    })
  });
}

// app/root.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), links2 = () => [
  { rel: "stylesheet", href: styles_min_default },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png"
  },
  { rel: "manifest", href: "/favicon/site.webmanifest" }
];
function App() {
  let htmlRef = (0, import_react5.createRef)(), isLoaded = (0, import_react5.useRef)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("html", {
    lang: "en",
    className: "h-full",
    ref: htmlRef,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react4.Links, {})
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("body", {
        className: "h-full text-gray-900 dark:text-white",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_framer_motion3.MotionConfig, {
          reducedMotion: "user",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Header, {}),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react4.Outlet, {}),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Footer, {}),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react4.ScrollRestoration, {}),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react4.Scripts, {}),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react4.LiveReload, {})
          ]
        })
      })
    ]
  });
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  links: () => links3
});
var import_differenceInYears = __toESM(require("date-fns/differenceInYears"));

// app/components/layout/Layout.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("main", {
      children
    })
  });
}

// app/components/banner/Banner.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Banner({ text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Section, {
    className: "dark:bg-gray-800",
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", {
      className: "mx-auto mb-16 max-w-[80%] text-center text-2xl dark:text-white md:text-5xl",
      children: text
    })
  });
}

// app/routes/about.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), links3 = () => [...links()];
function About() {
  let DOB = (0, import_differenceInYears.default)(new Date(), new Date(1986, 8, 17));
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Banner, {
      text: "About"
    })
  });
}

// app/routes/about/test.tsx
var test_exports = {};
__export(test_exports, {
  default: () => About2,
  links: () => links4
});
var import_jsx_runtime10 = require("react/jsx-runtime"), links4 = () => [...links()];
function About2() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Banner, {
      text: "About"
    })
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5
});

// app/components/banner/HomeBanner.tsx
var import_framer_motion4 = require("framer-motion"), import_react6 = require("@remix-run/react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function HomeBanner() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Section, {
    className: "dark:bg-gray-800",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h1", {
        className: "mx-auto mb-16 max-w-[80%] text-center text-4xl dark:text-white md:text-5xl",
        children: [
          "Hello, I'm Shane Prendergast. ",
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", {
            className: "mt-8 block font-gtreg text-2xl text-gray-600 dark:text-white",
            children: "I make things online."
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
        className: "container mx-auto grid items-center gap-4 dark:text-white md:grid-cols-2 lg:grid-cols-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_framer_motion4.motion.div, {
            className: "relative",
            initial: { opacity: 0, scale: 0.5 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 0.5 },
            viewport: { once: !0 },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "https://chasingchallenges.webknit.co.uk/",
              className: "border-grey-100 dark:hover-white relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-green-50 px-4 text-gray-900 hover:border-sky-300 hover:no-underline dark:border-gray-800 dark:bg-pink-700  dark:no-underline  dark:hover:border-white sm:min-h-[200px] lg:min-h-[200px]",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
                className: "text-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", {
                    className: "c-ql__icon mx-auto mb-4 w-1/5 sm:w-1/3 ",
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 167.52 109.22",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        "data-v-523492f0": "",
                        d: "M37.18 10h44.55a61 61 0 018.88-5.84A75.85 75.85 0 0199.36 0H37.18a5 5 0 100 10z",
                        fill: "#a798c9"
                      }),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        "data-v-523492f0": "",
                        d: "M65.68 76.55c-.27-.7-.52-1.4-.77-2.11H21a5 5 0 100 10h48.45a62.12 62.12 0 01-3.77-7.89zM21 34.78h43.43c.36-1.09.75-2.16 1.18-3.21a60.32 60.32 0 013.25-6.75H21a5 5 0 100 10z",
                        fill: "#6dc4cb"
                      }),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        "data-v-523492f0": "",
                        d: "M90.85 105a65 65 0 01-8.44-5.75H37.18a5 5 0 100 9.95H99.4a70.15 70.15 0 01-8.55-4.2z",
                        fill: "#a798c9"
                      }),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        "data-v-523492f0": "",
                        d: "M61.56 53.83c0-1.43 0-2.82.11-4.2H4.2c-2.32 0-4.2 2.23-4.2 5s1.88 5 4.2 5h57.56c-.13-1.93-.2-3.85-.2-5.8z",
                        fill: "#ed6a60"
                      }),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        "data-v-523492f0": "",
                        d: "M154.41 75q-2 0-7 2.91l-2.62 1.9a22.61 22.61 0 01-5.75 2.33 30.61 30.61 0 01-8.52 1.16q-9.61 0-18.5-6.41a25.12 25.12 0 01-7.42-9.17 29 29 0 01-2.92-13.18 29 29 0 012.92-13.18 24.57 24.57 0 017.28-9q9.18-6.55 18.64-6.55 10.18 0 16.31 4.95c3.2 2.14 5.68 3.2 7.43 3.2q4.5 0 10.19-7.86a13.93 13.93 0 003.07-8.1c0-2.58-1.26-4.88-3.79-6.92q-1.46-1-4.08-2.62l-3.49-2a48.91 48.91 0 00-10.7-4.3A48.69 48.69 0 00131.55 0q-14.42 0-28.69 7.86A55.37 55.37 0 0089.39 18a47.27 47.27 0 00-9.69 15.28 54 54 0 00-3.78 20.6 56.21 56.21 0 003.86 21.05 48 48 0 009.83 15.87 60.25 60.25 0 0013.47 10.49 59.13 59.13 0 0014.56 6.11 55.57 55.57 0 0014 1.82 47.72 47.72 0 0014.36-2.33q7.42-2.33 9.83-3.78l5-3.06a22.93 22.93 0 004.59-3.64 7.06 7.06 0 002-5.1c0-2-1.07-4.75-3.2-8.15q-5.3-8.16-9.81-8.16z",
                        fill: "#3d5afe"
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", {
                    className: "mb-0 font-gtreg text-base ",
                    children: "Chasing Challenges"
                  })
                ]
              })
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_framer_motion4.motion.div, {
            className: "",
            initial: { opacity: 0, scale: 0.5 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 0.5 },
            viewport: { once: !0 },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "http://rideforthechild.co.uk/",
              className: "border-grey-100 dark:hover-white relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-red-50 px-4 text-gray-900 hover:border-sky-300 hover:no-underline dark:border-gray-800 dark:bg-cyan-700  dark:no-underline dark:hover:border-white sm:min-h-[200px] lg:min-h-[250px]",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
                className: "text-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
                    className: "mb-4 inline-block w-1/5 max-w-[300px] rounded-full dark:bg-white sm:w-1/3 lg:max-w-full",
                    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", {
                      src: "/images/RFTC.png",
                      alt: "Ride for the child loog",
                      className: "  "
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", {
                    className: "mb-0 font-gtreg text-base",
                    children: "Ride for the Child"
                  })
                ]
              })
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_framer_motion4.motion.div, {
            className: "",
            initial: { opacity: 0, scale: 0.5 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 0.7 },
            viewport: { once: !0 },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "https://black-diamond.vercel.app/",
              className: "border-grey-100 dark:hover-white relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-purple-50 px-4 text-gray-900 hover:border-sky-300 hover:no-underline dark:border-gray-800 dark:bg-emerald-700  dark:no-underline dark:hover:border-white sm:min-h-[200px] lg:min-h-[300px]",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
                className: "text-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", {
                    stroke: "currentColor",
                    fill: "#000000",
                    strokeWidth: "0",
                    viewBox: "0 0 16 16",
                    focusable: "false",
                    className: "mb-4 inline-block w-1/5 sm:w-1/3",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                      d: "M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", {
                    className: "mb-0 font-gtreg text-base",
                    children: "Black Diamond"
                  })
                ]
              })
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_framer_motion4.motion.div, {
            className: "",
            initial: { opacity: 0, scale: 0.5 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 0.3 },
            viewport: { once: !0 },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
              href: "https://memoryup.webknit.co.uk/",
              className: "border-grey-100 dark:hover-white relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-blue-50 px-4 text-gray-900 hover:border-sky-300 hover:no-underline dark:border-gray-800 dark:bg-indigo-700  dark:no-underline dark:hover:border-white sm:min-h-[200px] lg:min-h-[250px]",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
                className: "text-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", {
                    className: "mb-4 inline-block w-1/5 sm:w-1/3",
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 172.17 122.75",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M112.42 7.7a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M117.2 8.4v28.84a2.49 2.49 0 002.66 2.28h7.44v33.42a2.69 2.69 0 005.32 0v-35.7A2.49 2.49 0 00130 35h-7.44V8.4a2.69 2.69 0 00-5.32 0z",
                        fill: "#fb6590"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "109.72",
                        cy: "103.42",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "100.95",
                        cy: "109.43",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#fb6590"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M112.42 42.75a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "109.76",
                        cy: "78.44",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M109.76 82.55a2.49 2.49 0 00-2.66 2.29v10.52a2.69 2.69 0 005.32 0V84.84a2.49 2.49 0 00-2.66-2.29z",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M132.62 78.82a2.69 2.69 0 00-5.32 0v29.76a2.69 2.69 0 005.32 0z",
                        fill: "#00db82"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M98.28 102.76a2.69 2.69 0 005.32 0V92.23a2.69 2.69 0 00-5.32 0z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "129.92",
                        cy: "114.87",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "none"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "140.25",
                        cy: "74.56",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "130.14",
                        cy: "114.71",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "140.25",
                        cy: "98.82",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M142.91 38.87a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M142.91 81a2.69 2.69 0 00-5.32 0v10.49a2.69 2.69 0 005.32 0z",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "150.35",
                        cy: "82.34",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "150.35",
                        cy: "75.93",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M153 98.75V88.22a2.68 2.68 0 00-5.31 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.29 2.29 0 001.52-2.06z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M152.92 33.24V22.71a2.69 2.69 0 00-5.32 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.29 2.29 0 001.53-2.06z",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M153 40.47a2.68 2.68 0 00-5.31 0v29.76a2.68 2.68 0 005.31 0z",
                        fill: "#00db82"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M163.19 75.2a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z",
                        fill: "#fb6590"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "100.94",
                        cy: "86.28",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M98.28 79.87a2.69 2.69 0 005.32 0V50.12a2.69 2.69 0 00-5.32 0z",
                        fill: "#00db82"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M100.94 44.17a2.5 2.5 0 002.66-2.29V22.65a2.69 2.69 0 00-5.32 0v19.23a2.5 2.5 0 002.66 2.29z",
                        fill: "#fb6590"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "119.86",
                        cy: "86.22",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M53 41.9a2.69 2.69 0 00-5.32 0v28.39a2.69 2.69 0 005.32 0z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "40.2",
                        cy: "78.97",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M47.64 6.86v28.38a2.69 2.69 0 005.32 0V6.86a2.69 2.69 0 00-5.32 0z",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "50.3",
                        cy: "77.59",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "40.2",
                        cy: "85.37",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M42.86 43.51a2.69 2.69 0 00-5.32 0v29.75a2.69 2.69 0 005.32 0z",
                        fill: "#00db82"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M83.25 23a2.68 2.68 0 00-5.31 0v28.41a2.68 2.68 0 005.31 0z",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "60.4",
                        cy: "39.6",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M117.2 102.62a2.69 2.69 0 005.32 0V92.1a2.69 2.69 0 00-5.32 0z",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M119.86 42.06a2.5 2.5 0 00-2.66 2.29V74.1a2.69 2.69 0 005.32 0V44.35a2.5 2.5 0 00-2.66-2.29z",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M78.45 14.89a3 3 0 003.76 0 2.06 2.06 0 000-3.23l-9.84-8.47A2.92 2.92 0 0072 2.9l-.2-.09-.26-.12-.27-.07-.27-.06a3.65 3.65 0 00-.66 0 2.88 2.88 0 00-2 .66l-9.83 8.47a2.06 2.06 0 000 3.23 3 3 0 003.76 0l5.56-4.79V68a2.68 2.68 0 005.31 0V10.33z",
                        fill: "#f94359"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M88 2.52V30a2.69 2.69 0 005.32 0V2.52a2.69 2.69 0 00-5.32 0z",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M60.4 43.72A2.49 2.49 0 0057.74 46v29.76a2.68 2.68 0 005.31 0V46a2.49 2.49 0 00-2.65-2.28z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "80.59",
                        cy: "58.37",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "119.86",
                        cy: "79.81",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M63.05 23.12a2.68 2.68 0 00-5.31 0v10.53a2.68 2.68 0 005.31 0zM93.35 103.09V74.7a2.69 2.69 0 00-5.32 0v28.39a2.08 2.08 0 00.52 1.34l1.46.86a3 3 0 00.68.09 2.5 2.5 0 002.66-2.29zM158 66.65a2.68 2.68 0 005.31 0V36.89a2.68 2.68 0 00-5.31 0z",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M5.31 32.4a2.49 2.49 0 00-2.65-2.29A2.49 2.49 0 000 32.4v29.75a2.49 2.49 0 002.66 2.29 2.49 2.49 0 002.65-2.29z",
                        fill: "#00db82"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M122.47 120.3v-10.53a2.69 2.69 0 00-5.32 0v10.53a2.49 2.49 0 002.66 2.28 3 3 0 001.13-.22 2.3 2.3 0 001.53-2.06z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M93.34 36.89V66a2.51 2.51 0 01-2.68 2.31h-7.5V102a2.71 2.71 0 01-5.36 0V66a2.51 2.51 0 012.68-2.3H88V36.89a2.71 2.71 0 015.36 0z",
                        fill: "#fb6590"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M112.41 120.46v-10.53a2.68 2.68 0 00-5.31 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.29 2.29 0 001.52-2.06z",
                        fill: "#00db82"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", {
                        cx: "169.51",
                        cy: "87.07",
                        rx: "2.66",
                        ry: "2.29",
                        fill: "#fb6590"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M18.83 13v27.44a2.5 2.5 0 002.66 2.29 2.5 2.5 0 002.66-2.29V13a2.5 2.5 0 00-2.66-2.29A2.5 2.5 0 0018.83 13z",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M28.62 29a2.49 2.49 0 002.66 2.28A2.49 2.49 0 0033.93 29V18.47a2.49 2.49 0 00-2.65-2.29 2.49 2.49 0 00-2.66 2.29zM172.05 50.8a2.69 2.69 0 00-5.32 0v28.39a2.69 2.69 0 005.32 0zM142.69 116.86v-10.53a2.68 2.68 0 00-5.31 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.29 2.29 0 001.52-2.06z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M100.77 1.49a2.49 2.49 0 00-2.65 2.29v10.53a2.68 2.68 0 005.31 0V3.78a2.49 2.49 0 00-2.66-2.29z",
                        fill: "#fed800"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M132.79 2.29a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z",
                        fill: "#00db82"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M139.91 33.84a2.5 2.5 0 002.66-2.29V12.32a2.68 2.68 0 00-5.31 0v19.23a2.5 2.5 0 002.65 2.29zM60.2 80.92a2.49 2.49 0 00-2.65 2.28v10.53a2.68 2.68 0 005.31 0V83.2a2.49 2.49 0 00-2.66-2.28z",
                        fill: "#fb6590"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M53.08 95.22V84.69a2.69 2.69 0 00-5.32 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.3 2.3 0 001.53-2.06z",
                        fill: "#00db82"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M73.22 75.76a2.69 2.69 0 00-5.31 0v28.39a2.68 2.68 0 005.31 0zM8.23 67a2.5 2.5 0 002.66 2.29A2.5 2.5 0 0013.55 67V56.49a2.5 2.5 0 00-2.66-2.29 2.5 2.5 0 00-2.66 2.29z",
                        fill: "#339b74"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M22 45.48h-8.09V26.65A2.71 2.71 0 0011 24.3a2.72 2.72 0 00-2.86 2.35V48A2.69 2.69 0 0011 50.44h8.06v19.09A2.7 2.7 0 0022 72a2.7 2.7 0 002.88-2.48V48A2.7 2.7 0 0022 45.48z",
                        fill: "#00ade1"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
                        d: "M42.15 6a2.73 2.73 0 00-2-.88 2.43 2.43 0 00-2.59 2.23V26.1a2.4 2.4 0 000 .28v7.72H30.1a2.49 2.49 0 00-2.65 2.29V72.1a2.49 2.49 0 002.65 2.29 2.5 2.5 0 002.66-2.29V38.68h7.44a2.49 2.49 0 002.66-2.29V7.55A2.11 2.11 0 0042.15 6z",
                        fill: "#fb6590"
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", {
                    className: "mb-0 font-gtreg text-base",
                    children: "MemoryUp"
                  })
                ]
              })
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_framer_motion4.motion.div, {
            initial: { opacity: 0, scale: 0.5 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 0.2 },
            viewport: { once: !0 },
            className: " sm:col-span-2 lg:col-span-1",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react6.Link, {
              to: "/about",
              className: "border-grey-100 border-grey-100 dark:hover-white relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-orange-50 px-4 text-gray-900 hover:border-sky-300 hover:no-underline dark:border-gray-800 dark:bg-orange-700  dark:no-underline dark:hover:border-white sm:min-h-[200px] lg:min-h-[200px]",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
                className: "text-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", {
                    src: "https://pbs.twimg.com/profile_images/1521761497340391424/g9HO4dgs_400x400.jpg",
                    alt: "",
                    className: "mb-4 inline-block w-1/5 rounded-full sm:w-1/3"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", {
                    className: "mb-0 font-gtreg text-base",
                    children: "About"
                  })
                ]
              })
            })
          })
        ]
      })
    ]
  });
}

// app/routes/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime"), links5 = () => [...links()];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Layout, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(HomeBanner, {}),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Section, {
        className: "bg-gray-50 dark:bg-gray-800",
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
          className: "container mx-auto grid grid-cols-1 gap-16 md:grid-cols-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", {
                  children: "About"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", {
                  className: "mb-0",
                  children: [
                    "Hello, my name is Shane Prendergast. I\u2019m a ",
                    "23",
                    " year old developer who lives in Macclesfield, UK. I have a BSc (Hons) Web Design and Development degree from the University of Hull and I\u2019m currently working at Gather Content."
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", {
                  className: "mb-0",
                  children: "Primarily a Front-End Developer, I also have a strong interest in Design and UX. At the moment I\u2019m working with various Javascript frameworks and I\u2019m passionate about creating - and constantly leaning about - Web Accessibility."
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", {
                  className: "mb-0",
                  children: "Webknit is an online pseudonym that I have used since my time at university and this website is a digital collection of my life, both work and personal."
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", {
                children: "Experience"
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Section, {
        className: "bg-gray-100 dark:bg-gray-800",
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
          className: "container mx-auto grid grid-cols-1 gap-16 md:grid-cols-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
              className: "",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", {
                  className: "",
                  children: "Work"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
                  className: "border-grey-100 mb-6 border-b border-solid pb-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                        href: "https://fed-now.vercel.app/",
                        children: "FedNow Explorer"
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", {
                      className: "mb-0",
                      children: "Funky site for the Federal Reserve. React, Next.js, Custom Google maps, user journey, resource library."
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
                  className: "border-grey-100 mb-6 border-b border-solid pb-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                        href: "https://black-diamond.vercel.app/",
                        children: "Black Diamond"
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", {
                      className: "mb-0",
                      children: "Statistics and streaks from a range of football leagues for the purposes of finding the best odds in betting markets."
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
                  className: "border-grey-100 mb-6 border-b border-solid pb-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                        href: "https://memoryup.webknit.co.uk/",
                        children: "MemoryUp"
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", {
                      className: "mb-0",
                      children: [
                        "Following my personal success with",
                        " ",
                        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                          href: "https://fetest.webknit.co.uk/",
                          children: "FEtest"
                        }),
                        " I decided to made a fully fledged application that allowed users to create their own Questions."
                      ]
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
                  className: "grid grid-cols-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "https://www.royalroms.com/",
                            children: "RoyalRoms"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "http://www.smartbow.webknit.co.uk/",
                            children: "Smartbow"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "https://westernislescruises.co.uk/",
                            children: "Westnern Isles Cruises"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "http://www.beardrevered.com/",
                            children: "Beardrevered"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "http://nickandsteph.webknit.co.uk/",
                            children: "Nick & Steph"
                          })
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
              className: "o-flex__col o-flex__col--6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", {
                  className: "u-mb-8",
                  children: "Play"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
                  className: "border-grey-100 mb-6 border-b border-solid pb-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                        href: "http://rideforthechild.co.uk/",
                        children: "Ride For The Child"
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", {
                      className: "mb-0",
                      children: "In September 2016 I cycled 3200 miles across America over a period of 28 days. I raised over \xA312k for children with deafness or cancer. The website was a central hub of information."
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
                  className: "border-grey-100 mb-6 border-b border-solid pb-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                        href: "https://chasingchallenges.webknit.co.uk/",
                        children: "Chasing Challenges"
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", {
                      className: "mb-0",
                      children: "Create and showcase challenges using synced activities from the world\u2019s most popular human tracking service, Strava."
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
                  className: "border-grey-100 mb-6 border-b border-solid pb-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                        href: "http://lifeinnumbers.webknit.co.uk/",
                        children: "Life In Numbers"
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", {
                      className: "mb-0",
                      children: "A project which outputs some interesting facts digits based on a users DOB."
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
                  className: "mb-6 grid grid-cols-2 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "https://password-generator-webknit.vercel.app/",
                            children: "Password generator"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "https://calculate-rust.vercel.app/",
                            children: "Calculate"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "https://click-me-webknit.vercel.app/",
                            children: "Click me"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "http://paceyourself.webknit.co.uk",
                            children: "Pace Yourself"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "http://won.webknit.co.uk/",
                            children: "Worthy Of Note"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "http://sass-variable-generator.webknit.co.uk/#/",
                            children: "Sass Variable Generator"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "https://places.webknit.co.uk/",
                            children: "Places"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "http://fetest.webknit.co.uk/",
                            children: "FEtest"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                      className: "border-grey-100 mb-6 border-b border-solid pb-6",
                      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                        className: "",
                        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", {
                          className: "mb-0 text-base",
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", {
                            href: "http://moustache.webknit.co.uk/",
                            children: "Moustache"
                          })
                        })
                      })
                    })
                  ]
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "50e0e7ba", entry: { module: "/build/entry.client-NP4IBMDQ.js", imports: ["/build/_shared/chunk-5CIYLDNO.js", "/build/_shared/chunk-B7AP56NU.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FYISDSZE.js", imports: ["/build/_shared/chunk-HL2FCJNQ.js", "/build/_shared/chunk-ULQLKMZQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-5HEQYCMM.js", imports: ["/build/_shared/chunk-CUNCWSW3.js", "/build/_shared/chunk-47HX5G3B.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about/test": { id: "routes/about/test", parentId: "routes/about", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/about/test-OHQTDXD6.js", imports: ["/build/_shared/chunk-ULQLKMZQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-O26Y2QGJ.js", imports: ["/build/_shared/chunk-47HX5G3B.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-50E0E7BA.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/about/test": {
    id: "routes/about/test",
    parentId: "routes/about",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
