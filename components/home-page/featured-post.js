import React from "react";
import PostsGrid from "../posts/posts-grid";

// const posts = [
//   {
//     color: "purple",
//     type: "minivan",
//     registration: new Date("2017-01-03"),
//     capacity: 7,
//   },
//   {
//     color: "red",
//     type: "station wagon",
//     registration: new Date("2018-03-03"),
//     capacity: 5,
//   },
//   {
//     color: "green",
//     type: "station wagon",
//     registration: new Date("2018-03-03"),
//     capacity: 5,
//   },
// ];

const FeaturedPosts = ({ posts }) => {
  return (
    <section>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
