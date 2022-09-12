import ExternalLink from "next/link";
import React from "react";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 my-4">
      <SocialIcons />
      <div className="flex items-center justify-center">
        <p className="text-sm text-gray-500">
          <span>&copy; Copyright {new Date().getFullYear()}</span>
          <span> by</span>
          <span className="font-semibold text-slate-900 dark:text-purple-600">
            {" "}
            phoreka
          </span>
        </p>
      </div>
      <p className="text-sm text-gray-500">
        Built with{" "}
        <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>,{" "}
        <ExternalLink href="https://tailwindcss.com/">
          Tailwind CSS
        </ExternalLink>
        . Content with{" "}
        <ExternalLink href="https://mdxjs.com/">MDX</ExternalLink>
      </p>
    </div>
  );
};

export default Footer;
