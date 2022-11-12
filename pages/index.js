import Head from "next/head";
import React from "react";
import CurrentGoals from "../components/current-goals/CurrentGoals";
import FeaturedPosts from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import Skills from "../components/skill/Skills";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>phoreka</title>
        <meta name="description" content="My personal website" />
      </Head>
      <Hero />
      <Skills />
      <FeaturedPosts posts={posts} />
      {/* Current Goals */}
      <section>
        <h2 className="text-xl font-semibold">What I&apos;m up to right now</h2>
        <CurrentGoals />
      </section>
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 10000,
  };
}

export default HomePage;
