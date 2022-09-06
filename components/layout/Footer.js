import Link from "next/link";
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
        Built with <Link href="https://nextjs.org/">Next.js</Link>,{" "}
        <Link href="https://tailwindcss.com/">Tailwind CSS</Link>. Content with{" "}
        <Link href="https://mdxjs.com/">MDX</Link>
      </p>
    </div>
  );
};

export default Footer;
