import React from "react";
import Footer from "./Footer";
import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="md:container mx-auto min-h-screen flex flex-col  px-4"
        style={{ maxWidth: "1200px" }}
      >
        <MainNavigation />
        <main className="flex-grow">{children}</main>
        {/* <footer className="py-6 text-center text-gray-500 text-sm">
          <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
            phoreka
          </span>
          &copy; {new Date().getFullYear()} All Rights Reversed
        </footer> */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
