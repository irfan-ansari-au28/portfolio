import Link from "next/link";
import React from "react";

const PostItem = ({ post }) => {
  /// It should be clickable by slug
  const slug = post.slug;
  const linkPath = `/posts/${slug}`;
  return (
    <>
      {[1, 2, 3, 4, 5].map((item) => (
        <Link href={linkPath} key={item}>
          <a
            className="my-4 border-gray-200 border-solid border p-6 rounded-md flex flex-col transition-shadow hover:shadow-xl hover:transition-shadow"
            // style={{ backgroundColor: `${post.color}` }}
          >
            <div className="text-lg font-semibold">{post.title}</div>

            <div>{post.summary}</div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default PostItem;
