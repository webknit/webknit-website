import { AnimatePresence, motion, Variants } from "framer-motion";

import { Logo } from "../layout/header/headerLogo/HeaderLogo";
import { Section } from "../layout/section/Section";

const itemAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 0.5 },
  viewport: { once: true },
};

export function Banner() {
  return (
    <Section className="dark:bg-gray-800">
      <h1 className="mx-auto mb-16 max-w-[80%] text-center text-2xl dark:text-white md:text-5xl">
        Hello, I'm Shane Prendergast. <br></br>
        <span className="mt-8 block font-gtreg text-3xl text-gray-600 dark:text-white">
          I make things online.
        </span>
      </h1>

      <div className="container mx-auto grid grid-cols-1 items-center gap-4 dark:text-white md:grid-cols-2 lg:grid-cols-5">
        <motion.div
          className="relative order-4 hover:z-10 sm:order-4 lg:order-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="border-grey-100 relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-green-50 px-4 dark:border-none  dark:bg-indigo-900 sm:min-h-[200px] lg:min-h-[200px]">
            <div className="text-center">
              <svg
                className="c-ql__icon mx-auto mb-4 w-1/5 sm:w-1/3 "
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 167.52 109.22"
              >
                <path
                  data-v-523492f0=""
                  d="M37.18 10h44.55a61 61 0 018.88-5.84A75.85 75.85 0 0199.36 0H37.18a5 5 0 100 10z"
                  fill="#a798c9"
                ></path>{" "}
                <path
                  data-v-523492f0=""
                  d="M65.68 76.55c-.27-.7-.52-1.4-.77-2.11H21a5 5 0 100 10h48.45a62.12 62.12 0 01-3.77-7.89zM21 34.78h43.43c.36-1.09.75-2.16 1.18-3.21a60.32 60.32 0 013.25-6.75H21a5 5 0 100 10z"
                  fill="#6dc4cb"
                ></path>{" "}
                <path
                  data-v-523492f0=""
                  d="M90.85 105a65 65 0 01-8.44-5.75H37.18a5 5 0 100 9.95H99.4a70.15 70.15 0 01-8.55-4.2z"
                  fill="#a798c9"
                ></path>{" "}
                <path
                  data-v-523492f0=""
                  d="M61.56 53.83c0-1.43 0-2.82.11-4.2H4.2c-2.32 0-4.2 2.23-4.2 5s1.88 5 4.2 5h57.56c-.13-1.93-.2-3.85-.2-5.8z"
                  fill="#ed6a60"
                ></path>{" "}
                <path
                  data-v-523492f0=""
                  d="M154.41 75q-2 0-7 2.91l-2.62 1.9a22.61 22.61 0 01-5.75 2.33 30.61 30.61 0 01-8.52 1.16q-9.61 0-18.5-6.41a25.12 25.12 0 01-7.42-9.17 29 29 0 01-2.92-13.18 29 29 0 012.92-13.18 24.57 24.57 0 017.28-9q9.18-6.55 18.64-6.55 10.18 0 16.31 4.95c3.2 2.14 5.68 3.2 7.43 3.2q4.5 0 10.19-7.86a13.93 13.93 0 003.07-8.1c0-2.58-1.26-4.88-3.79-6.92q-1.46-1-4.08-2.62l-3.49-2a48.91 48.91 0 00-10.7-4.3A48.69 48.69 0 00131.55 0q-14.42 0-28.69 7.86A55.37 55.37 0 0089.39 18a47.27 47.27 0 00-9.69 15.28 54 54 0 00-3.78 20.6 56.21 56.21 0 003.86 21.05 48 48 0 009.83 15.87 60.25 60.25 0 0013.47 10.49 59.13 59.13 0 0014.56 6.11 55.57 55.57 0 0014 1.82 47.72 47.72 0 0014.36-2.33q7.42-2.33 9.83-3.78l5-3.06a22.93 22.93 0 004.59-3.64 7.06 7.06 0 002-5.1c0-2-1.07-4.75-3.2-8.15q-5.3-8.16-9.81-8.16z"
                  fill="#3d5afe"
                ></path>
              </svg>
              <h2 className="mb-0 font-gtreg text-base ">Chasing Challenges</h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="order-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="border-grey-100 relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-red-50 px-4 dark:border-none dark:bg-indigo-900 sm:min-h-[200px] lg:min-h-[250px]">
            <div className="text-center">
              <img
                src="http://rideforthechild.co.uk/wp-content/themes/RFTC/img/logo.svg"
                alt="Ride for the child loog"
                className="mb-4 inline-block w-1/5 sm:w-1/3"
              />
              <h2 className="mb-0 font-gtreg text-base">Ride for the Child</h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="order-1 sm:order-1 lg:order-3"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="border-grey-100 relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-purple-50 px-4 dark:border-none dark:bg-indigo-900 sm:min-h-[200px] lg:min-h-[300px]">
            <div className="text-center">
              <svg
                stroke="currentColor"
                fill="#000000"
                strokeWidth="0"
                viewBox="0 0 16 16"
                focusable="false"
                className="mb-4 inline-block w-1/5 sm:w-1/3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"></path>
              </svg>
              <h2 className="mb-0 font-gtreg text-base">Black Diamond</h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="order-3 sm:order-4"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="border-grey-100 relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-blue-50 px-4 dark:border-none dark:bg-indigo-900 sm:min-h-[200px] lg:min-h-[250px]">
            <div className="text-center">
              <svg
                className="mb-4 inline-block w-1/5 sm:w-1/3"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 172.17 122.75"
              >
                <path
                  d="M112.42 7.7a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z"
                  fill="#00ade1"
                ></path>
                <path
                  d="M117.2 8.4v28.84a2.49 2.49 0 002.66 2.28h7.44v33.42a2.69 2.69 0 005.32 0v-35.7A2.49 2.49 0 00130 35h-7.44V8.4a2.69 2.69 0 00-5.32 0z"
                  fill="#fb6590"
                ></path>
                <ellipse
                  cx="109.72"
                  cy="103.42"
                  rx="2.66"
                  ry="2.29"
                  fill="#00ade1"
                ></ellipse>
                <ellipse
                  cx="100.95"
                  cy="109.43"
                  rx="2.66"
                  ry="2.29"
                  fill="#fb6590"
                ></ellipse>
                <path
                  d="M112.42 42.75a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z"
                  fill="#339b74"
                ></path>
                <ellipse
                  cx="109.76"
                  cy="78.44"
                  rx="2.66"
                  ry="2.29"
                  fill="#339b74"
                ></ellipse>
                <path
                  d="M109.76 82.55a2.49 2.49 0 00-2.66 2.29v10.52a2.69 2.69 0 005.32 0V84.84a2.49 2.49 0 00-2.66-2.29z"
                  fill="#fed800"
                ></path>
                <path
                  d="M132.62 78.82a2.69 2.69 0 00-5.32 0v29.76a2.69 2.69 0 005.32 0z"
                  fill="#00db82"
                ></path>
                <path
                  d="M98.28 102.76a2.69 2.69 0 005.32 0V92.23a2.69 2.69 0 00-5.32 0z"
                  fill="#339b74"
                ></path>
                <ellipse
                  cx="129.92"
                  cy="114.87"
                  rx="2.66"
                  ry="2.29"
                  fill="none"
                ></ellipse>
                <ellipse
                  cx="140.25"
                  cy="74.56"
                  rx="2.66"
                  ry="2.29"
                  fill="#fed800"
                ></ellipse>
                <ellipse
                  cx="130.14"
                  cy="114.71"
                  rx="2.66"
                  ry="2.29"
                  fill="#fed800"
                ></ellipse>
                <ellipse
                  cx="140.25"
                  cy="98.82"
                  rx="2.66"
                  ry="2.29"
                  fill="#339b74"
                ></ellipse>
                <path
                  d="M142.91 38.87a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z"
                  fill="#339b74"
                ></path>
                <path
                  d="M142.91 81a2.69 2.69 0 00-5.32 0v10.49a2.69 2.69 0 005.32 0z"
                  fill="#00ade1"
                ></path>
                <ellipse
                  cx="150.35"
                  cy="82.34"
                  rx="2.66"
                  ry="2.29"
                  fill="#fed800"
                ></ellipse>
                <ellipse
                  cx="150.35"
                  cy="75.93"
                  rx="2.66"
                  ry="2.29"
                  fill="#00ade1"
                ></ellipse>
                <path
                  d="M153 98.75V88.22a2.68 2.68 0 00-5.31 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.29 2.29 0 001.52-2.06z"
                  fill="#339b74"
                ></path>
                <path
                  d="M152.92 33.24V22.71a2.69 2.69 0 00-5.32 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.29 2.29 0 001.53-2.06z"
                  fill="#fed800"
                ></path>
                <path
                  d="M153 40.47a2.68 2.68 0 00-5.31 0v29.76a2.68 2.68 0 005.31 0z"
                  fill="#00db82"
                ></path>
                <path
                  d="M163.19 75.2a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z"
                  fill="#fb6590"
                ></path>
                <ellipse
                  cx="100.94"
                  cy="86.28"
                  rx="2.66"
                  ry="2.29"
                  fill="#339b74"
                ></ellipse>
                <path
                  d="M98.28 79.87a2.69 2.69 0 005.32 0V50.12a2.69 2.69 0 00-5.32 0z"
                  fill="#00db82"
                ></path>
                <path
                  d="M100.94 44.17a2.5 2.5 0 002.66-2.29V22.65a2.69 2.69 0 00-5.32 0v19.23a2.5 2.5 0 002.66 2.29z"
                  fill="#fb6590"
                ></path>
                <ellipse
                  cx="119.86"
                  cy="86.22"
                  rx="2.66"
                  ry="2.29"
                  fill="#339b74"
                ></ellipse>
                <path
                  d="M53 41.9a2.69 2.69 0 00-5.32 0v28.39a2.69 2.69 0 005.32 0z"
                  fill="#339b74"
                ></path>
                <ellipse
                  cx="40.2"
                  cy="78.97"
                  rx="2.66"
                  ry="2.29"
                  fill="#fed800"
                ></ellipse>
                <path
                  d="M47.64 6.86v28.38a2.69 2.69 0 005.32 0V6.86a2.69 2.69 0 00-5.32 0z"
                  fill="#fed800"
                ></path>
                <ellipse
                  cx="50.3"
                  cy="77.59"
                  rx="2.66"
                  ry="2.29"
                  fill="#fed800"
                ></ellipse>
                <ellipse
                  cx="40.2"
                  cy="85.37"
                  rx="2.66"
                  ry="2.29"
                  fill="#339b74"
                ></ellipse>
                <path
                  d="M42.86 43.51a2.69 2.69 0 00-5.32 0v29.75a2.69 2.69 0 005.32 0z"
                  fill="#00db82"
                ></path>
                <path
                  d="M83.25 23a2.68 2.68 0 00-5.31 0v28.41a2.68 2.68 0 005.31 0z"
                  fill="#00ade1"
                ></path>
                <ellipse
                  cx="60.4"
                  cy="39.6"
                  rx="2.66"
                  ry="2.29"
                  fill="#339b74"
                ></ellipse>
                <path
                  d="M117.2 102.62a2.69 2.69 0 005.32 0V92.1a2.69 2.69 0 00-5.32 0z"
                  fill="#00ade1"
                ></path>
                <path
                  d="M119.86 42.06a2.5 2.5 0 00-2.66 2.29V74.1a2.69 2.69 0 005.32 0V44.35a2.5 2.5 0 00-2.66-2.29z"
                  fill="#fed800"
                ></path>
                <path
                  d="M78.45 14.89a3 3 0 003.76 0 2.06 2.06 0 000-3.23l-9.84-8.47A2.92 2.92 0 0072 2.9l-.2-.09-.26-.12-.27-.07-.27-.06a3.65 3.65 0 00-.66 0 2.88 2.88 0 00-2 .66l-9.83 8.47a2.06 2.06 0 000 3.23 3 3 0 003.76 0l5.56-4.79V68a2.68 2.68 0 005.31 0V10.33z"
                  fill="#f94359"
                ></path>
                <path
                  d="M88 2.52V30a2.69 2.69 0 005.32 0V2.52a2.69 2.69 0 00-5.32 0z"
                  fill="#00ade1"
                ></path>
                <path
                  d="M60.4 43.72A2.49 2.49 0 0057.74 46v29.76a2.68 2.68 0 005.31 0V46a2.49 2.49 0 00-2.65-2.28z"
                  fill="#339b74"
                ></path>
                <ellipse
                  cx="80.59"
                  cy="58.37"
                  rx="2.66"
                  ry="2.29"
                  fill="#00ade1"
                ></ellipse>
                <ellipse
                  cx="119.86"
                  cy="79.81"
                  rx="2.66"
                  ry="2.29"
                  fill="#339b74"
                ></ellipse>
                <path
                  d="M63.05 23.12a2.68 2.68 0 00-5.31 0v10.53a2.68 2.68 0 005.31 0zM93.35 103.09V74.7a2.69 2.69 0 00-5.32 0v28.39a2.08 2.08 0 00.52 1.34l1.46.86a3 3 0 00.68.09 2.5 2.5 0 002.66-2.29zM158 66.65a2.68 2.68 0 005.31 0V36.89a2.68 2.68 0 00-5.31 0z"
                  fill="#00ade1"
                ></path>
                <path
                  d="M5.31 32.4a2.49 2.49 0 00-2.65-2.29A2.49 2.49 0 000 32.4v29.75a2.49 2.49 0 002.66 2.29 2.49 2.49 0 002.65-2.29z"
                  fill="#00db82"
                ></path>
                <path
                  d="M122.47 120.3v-10.53a2.69 2.69 0 00-5.32 0v10.53a2.49 2.49 0 002.66 2.28 3 3 0 001.13-.22 2.3 2.3 0 001.53-2.06z"
                  fill="#339b74"
                ></path>
                <path
                  d="M93.34 36.89V66a2.51 2.51 0 01-2.68 2.31h-7.5V102a2.71 2.71 0 01-5.36 0V66a2.51 2.51 0 012.68-2.3H88V36.89a2.71 2.71 0 015.36 0z"
                  fill="#fb6590"
                ></path>
                <path
                  d="M112.41 120.46v-10.53a2.68 2.68 0 00-5.31 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.29 2.29 0 001.52-2.06z"
                  fill="#00db82"
                ></path>
                <ellipse
                  cx="169.51"
                  cy="87.07"
                  rx="2.66"
                  ry="2.29"
                  fill="#fb6590"
                ></ellipse>
                <path
                  d="M18.83 13v27.44a2.5 2.5 0 002.66 2.29 2.5 2.5 0 002.66-2.29V13a2.5 2.5 0 00-2.66-2.29A2.5 2.5 0 0018.83 13z"
                  fill="#fed800"
                ></path>
                <path
                  d="M28.62 29a2.49 2.49 0 002.66 2.28A2.49 2.49 0 0033.93 29V18.47a2.49 2.49 0 00-2.65-2.29 2.49 2.49 0 00-2.66 2.29zM172.05 50.8a2.69 2.69 0 00-5.32 0v28.39a2.69 2.69 0 005.32 0zM142.69 116.86v-10.53a2.68 2.68 0 00-5.31 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.29 2.29 0 001.52-2.06z"
                  fill="#339b74"
                ></path>
                <path
                  d="M100.77 1.49a2.49 2.49 0 00-2.65 2.29v10.53a2.68 2.68 0 005.31 0V3.78a2.49 2.49 0 00-2.66-2.29z"
                  fill="#fed800"
                ></path>
                <path
                  d="M132.79 2.29a2.69 2.69 0 00-5.32 0v28.38a2.69 2.69 0 005.32 0z"
                  fill="#00db82"
                ></path>
                <path
                  d="M139.91 33.84a2.5 2.5 0 002.66-2.29V12.32a2.68 2.68 0 00-5.31 0v19.23a2.5 2.5 0 002.65 2.29zM60.2 80.92a2.49 2.49 0 00-2.65 2.28v10.53a2.68 2.68 0 005.31 0V83.2a2.49 2.49 0 00-2.66-2.28z"
                  fill="#fb6590"
                ></path>
                <path
                  d="M53.08 95.22V84.69a2.69 2.69 0 00-5.32 0v10.53a2.5 2.5 0 002.66 2.29 3 3 0 001.13-.23 2.3 2.3 0 001.53-2.06z"
                  fill="#00db82"
                ></path>
                <path
                  d="M73.22 75.76a2.69 2.69 0 00-5.31 0v28.39a2.68 2.68 0 005.31 0zM8.23 67a2.5 2.5 0 002.66 2.29A2.5 2.5 0 0013.55 67V56.49a2.5 2.5 0 00-2.66-2.29 2.5 2.5 0 00-2.66 2.29z"
                  fill="#339b74"
                ></path>
                <path
                  d="M22 45.48h-8.09V26.65A2.71 2.71 0 0011 24.3a2.72 2.72 0 00-2.86 2.35V48A2.69 2.69 0 0011 50.44h8.06v19.09A2.7 2.7 0 0022 72a2.7 2.7 0 002.88-2.48V48A2.7 2.7 0 0022 45.48z"
                  fill="#00ade1"
                ></path>
                <path
                  d="M42.15 6a2.73 2.73 0 00-2-.88 2.43 2.43 0 00-2.59 2.23V26.1a2.4 2.4 0 000 .28v7.72H30.1a2.49 2.49 0 00-2.65 2.29V72.1a2.49 2.49 0 002.65 2.29 2.5 2.5 0 002.66-2.29V38.68h7.44a2.49 2.49 0 002.66-2.29V7.55A2.11 2.11 0 0042.15 6z"
                  fill="#fb6590"
                ></path>
              </svg>

              <h2 className="mb-0 font-gtreg text-base">MemoryUp</h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg order-5 sm:col-span-2 lg:col-span-1"
        >
          <div className="border-grey-100 border-grey-100 relative flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-solid bg-orange-50 px-4 dark:border-none dark:bg-indigo-900 sm:min-h-[200px] lg:min-h-[200px]">
            <div className="text-center">
              <img
                src="https://pbs.twimg.com/profile_images/1521761497340391424/g9HO4dgs_400x400.jpg"
                alt=""
                className="mb-4 inline-block w-1/5 rounded-full sm:w-1/3"
              />
              <h2 className="mb-0 font-gtreg text-base">About</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
