import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  element?: string;
}

export function Section({ className, children, id, element }: Props) {
  const allowedTags = ["div", "section", "footer", "header", "aside"];
  const checkTag = () => {
    const el = allowedTags.includes(element ?? "") ? element : "div";
    return el as string;
  };

  return React.createElement(checkTag(), {
    children: children,
    id: id,
    className: `py-8 md:py-16 ${className ? className : ""}`,
  });
  // <tag id={id} className={`py-8 md:py-12 ${className}`}>
  //   {children}
  // </tag>
}
