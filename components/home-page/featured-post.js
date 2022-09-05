import React from "react";
import PostsGrid from "../posts/posts-grid";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className="py-8">
      <h2 className="text-xl font-semibold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
