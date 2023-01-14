import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getFeaturedPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <div className="mt-16">
      <AllPosts posts={posts} />
    </div>
  );
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
