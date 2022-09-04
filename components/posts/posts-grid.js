import React from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={Math.random(100)} />
      ))}
    </ul>
  );
};

export default PostsGrid;
