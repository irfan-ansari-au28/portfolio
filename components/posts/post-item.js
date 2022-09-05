import Link from "next/link";
import React from "react";

const PostItem = ({ post }) => {
  /// It should be clickable by slug
  const slug = post.slug;
  const linkPath = `/posts/${slug}`;
  return (
    <>
      <Link href={linkPath}>
        <a style={{ backgroundColor: `${post.color}` }}>{post.title}</a>
      </Link>
    </>
  );
};

export default PostItem;
