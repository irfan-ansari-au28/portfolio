/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Button from "../home-page/ui/button";
import Logo from "./logo";
import { FaFileDownload } from "react-icons/fa";

const MainNavigation = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { label: "About", path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Posts", path: "/posts" },
    { label: "Contact", path: "/contact" },
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 dark:bg-gray-600"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-200" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    }
  };

  return (
    <header className="h-16 flex items-center justify-between  ">
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <div className="text-xl font-semi-bold text-purple-700 dark:text-white">
            <Link href="/">
              {/* <a className="mr-4">
              <Logo />
            </a> */}
              phoreka.
            </Link>
          </div>
          <div className="hidden sm:block">
            {navigation.map((nav) => {
              return (
                <Link key={nav.label} href={nav.path}>
                  <a className="font-semibold text-gray-400 hover:text-gray-500 pl-3 ">
                    {nav.label}
                  </a>
                </Link>
              );
            })}
          </div>
        </ul>
      </nav>

      <div className="flex items-center justify-start">
        <a
          href="files/Irfan_I.pdf"
          // eslint-disable-next-line react/no-unknown-property
          download="Irfan's Resume.pdf"
          target={"_blank"}
        >
          <div className="mr-4">
            <FaFileDownload title="Resume" size={"2rem"} />
          </div>
        </a>
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default MainNavigation;
