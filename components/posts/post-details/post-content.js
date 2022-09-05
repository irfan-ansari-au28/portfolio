import React from "react";
import { getFeaturedPosts } from "../../../lib/posts-util";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

// const DUMMY_POST = {
//   slug: "rio",
//   title: "My Portfolio",
//   image: "xyz",
//   date: "2022-02-10",
//   content: "# This is a first Post",
// };

const PostContent = ({ post }) => {
  console.log(post);
  return (
    <article>
      <PostHeader title={post.title} image={post.image} />
      {/* place for jsx code */}
      <ReactMarkdown>{"# Hello, *world*!"}</ReactMarkdown>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default PostContent;
