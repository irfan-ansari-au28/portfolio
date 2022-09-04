import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getFeaturedPosts } from "../../lib/posts-util";

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
