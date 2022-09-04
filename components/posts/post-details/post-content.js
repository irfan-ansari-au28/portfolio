import React from "react";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "rio",
  title: "My Portfolio",
  image: "xyz",
  date: "2022-02-10",
  content: "# This is a first Post",
};

const PostContent = () => {
  return (
    <article>
      <PostHeader title={DUMMY_POST.title} image={DUMMY_POST.image} />
      {/* place for jsx code */}
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
