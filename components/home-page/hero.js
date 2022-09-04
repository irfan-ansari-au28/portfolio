import React from "react";
import FeaturedPosts from "./featured-post";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={classes.hero}>
        <h1>Hi, I&apos;m Irfan</h1>
        <p>Frontend Developer</p>
        <p>
          I work with the JavaScript ecosystem. Welcome to my small piece of the
          internet, where I write and share about different topics related to
          the tech industry and life style.
        </p>
      </section>
      <FeaturedPosts />
    </>
  );
};

export default Hero;
