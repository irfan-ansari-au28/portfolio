import Link from "next/link";
import React from "react";
import Logo from "./logo";

const MainNavigation = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul
          style={{
            maxWidth: "80%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <li style={{ listStyleType: "none", marginRight: "10px" }}>
            <Link href="/posts">Posts</Link>
          </li>
          <li style={{ listStyleType: "none" }}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
