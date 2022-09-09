import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getFeaturedPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const allPosts = getFeaturedPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
