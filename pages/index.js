import Head from "next/head";
import React from "react";
import FeaturedPosts from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import Skills from "../components/skill/Skills";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>phoreka's Portfolio</title>
        <meta name="description" content="My personal website" />
      </Head>
      <Hero />
      <Skills />
      <FeaturedPosts posts={posts} />
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
