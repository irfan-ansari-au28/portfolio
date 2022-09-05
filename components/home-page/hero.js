import React from "react";
import FeaturedPosts from "./featured-post";
import classes from "./hero.module.css";
import Button from "./ui/button";

const Hero = () => {
  return (
    <>
      <section className="mt-16">
        <h1 className="text-7xl font-bold">
          Hi I&apos;m <span className="dark:text-purple-600">Irfan</span>
        </h1>
        <h3 className="text-4xl my-3">Frontend Developer</h3>
        <p className="text-gray-700 mb-8">
          I work with the JavaScript ecosystem. Welcome to my small piece of the
          internet, where I write and share about different topics related to
          the tech industry and life style.
        </p>
        <Button className="bg-purple-600 text-white px-6">Learn More!</Button>
      </section>
    </>
  );
};

export default Hero;
