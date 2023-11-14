import Link from "next/link";
import React from "react";
import FeaturedPosts from "./featured-post";
import classes from "./hero.module.css";
import Button from "./ui/button";

const Hero = () => {
  return (
    <>
      <section className="mt-16">
        <h1 className="text-5xl sm:text-7xl font-bold">
          Hi, I&apos;m <span className="dark:text-purple-600">Irfan</span>
        </h1>
        <h3 className="text-4xl my-3">Frontend Developer</h3>
        <p className="dark:text-gray-300 mb-8">
          {`I am a highly skilled front-end
          specialist developer with ${
            new Date().getFullYear() - 2020
          } years of experience in building dynamic
          and user-friendly web applications. I have a deep understanding of
          modern technologies such as the MERN stack. I have a
          proven track record of delivering high-quality and responsive web
          solutions that meet and exceed client expectations. I work with the
          JavaScript ecosystem. Welcome to my small piece of the internet, where
          I write and share about different topics related to the tech industry
          and life style.`}
        </p>
        <Link href={"/about"}>
          <Button className="bg-purple-600 text-white px-6">About me!</Button>
        </Link>
      </section>
    </>
  );
};

export default Hero;
