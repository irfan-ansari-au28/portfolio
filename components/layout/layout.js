import React from "react";
import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="md:container mx-auto min-h-screen flex flex-col"
        style={{ maxWidth: "1024px" }}
      >
        <MainNavigation />
        <main className="flex-grow">{children}</main>
        <footer className="py-6 text-center text-gray-500 text-sm">
          <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
            phoreka
          </span>
          &copy; {new Date().getFullYear()} All Rights Reversed
        </footer>
      </div>
    </>
  );
};

export default Layout;
