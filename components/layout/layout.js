import React from "react";
import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <>
      <div className="md:container mx-auto min-h-screen flex flex-col bg-slate-300">
        <MainNavigation />
        <main className="flex-grow">{children}</main>
        <div className="bg-green-500">Footer</div>
      </div>
    </>
  );
};

export default Layout;
