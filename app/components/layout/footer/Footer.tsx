import { Section } from "../section/Section";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.div
      //   initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Section
        className="bg-webknit-blue text-white dark:bg-gray-900"
        id="footer"
        element="footer"
      >
        <div className="text-center">
          <a
            href="mailto:contact@webknit.co.uk"
            className="mb-8 inline-flex items-center rounded-full border border-solid border-white py-2 px-4 text-white hover:underline"
          >
            <svg
              className="mr-2 w-4"
              id="e66dc2f1-c542-49ae-8ea5-247e3035ce4c"
              data-name="Capa 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 390"
            >
              <title>email</title>
              <path
                d="M467,0H45A45.08,45.08,0,0,0,0,45V345a45.07,45.07,0,0,0,45,45H467a45.07,45.07,0,0,0,45-45V45A45.07,45.07,0,0,0,467,0Zm-6.21,30L257,233.83,51.36,30ZM30,338.79V51.07L174.48,194.31ZM51.21,360,195.78,215.43l50.66,50.22a15,15,0,0,0,21.17,0L317,216.21,460.79,360ZM482,338.79,338.21,195,482,51.21Z"
                style={{ fill: "#FFF" }}
              />
            </svg>
            contact@webknit.co.uk
          </a>

          <p className="c-footer__text u-mb-0">
            {/* Webknit 2022 */}
            <br></br>Please don’t copy, it took me ages!
          </p>
        </div>
      </Section>
    </motion.div>
  );
}
