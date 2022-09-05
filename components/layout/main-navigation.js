import Link from "next/link";
import React from "react";
import Logo from "./logo";

const MainNavigation = () => {
  const navigation = [
    { label: "About", path: "/" },
    { label: "Portfolio", path: "/" },
    { label: "Posts", path: "/posts" },
    { label: "contact", path: "/contact" },
  ];
  return (
    <header className="h-16 flex items-center justify-between  bg-blue-300 ">
      <nav>
        <ul className="flex gap-4">
          <Link href="/">
            <a className="mr-4">
              <Logo />
            </a>
          </Link>
          {navigation.map((nav) => {
            return (
              <Link key={nav.label} href={nav.path}>
                <a className="font-semibold text-gray-400 hover:text-gray-500">
                  {nav.label}
                </a>
              </Link>
            );
          })}
        </ul>
      </nav>
      <button>Icon</button>
    </header>
  );
};

export default MainNavigation;
