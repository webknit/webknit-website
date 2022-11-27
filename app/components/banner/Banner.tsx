import { AnimatePresence, motion, Variants } from "framer-motion";
import { Link } from "@remix-run/react";

import { Logo } from "../layout/header/headerLogo/HeaderLogo";
import { Section } from "../layout/section/Section";

interface Props {
  text: string;
  sectionClasses?: string;
}

export function Banner({ text }: Props) {
  return (
    <Section className="dark:bg-gray-800">
      <h1 className="mx-auto mb-16 max-w-[80%] text-center text-2xl dark:text-white md:text-5xl">
        {text}
      </h1>
    </Section>
  );
}
