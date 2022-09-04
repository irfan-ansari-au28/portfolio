import Link from "next/link";
import React from "react";

const PostItem = ({ post }) => {
  /// It should be clickable by slug
  const slug = post.type;
  const linkPath = `/posts/${slug}`;
  return (
    <>
      <Link href={linkPath}>
        <a style={{ backgroundColor: `${post.color}` }}>{post.color}</a>
      </Link>
    </>
  );
};

export default PostItem;
