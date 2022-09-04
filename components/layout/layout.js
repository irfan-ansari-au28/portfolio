import React from "react";
import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ marginLeft: "auto", marginRight: "auto", padding: "60px" }}>
        <MainNavigation />
        <main style={{ maxWidth: "1200px" }}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
