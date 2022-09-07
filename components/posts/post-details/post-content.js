import React from "react";
import { getFeaturedPosts } from "../../../lib/posts-util";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

// const DUMMY_POST = {
//   slug: "rio",
//   title: "My Portfolio",
//   image: "xyz",
//   date: "2022-02-10",
//   content: "# This is a first Post",
// };

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const img =
    "images/posts/getting-started-with-nextjs/getting-started-nextjs.png";

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    // code(code) {
    //   const { language, value } = code;
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={value}
    //     />
    //   );
    // },
  };
  return (
    <article>
      <PostHeader title={post.title} image={post.image} />

      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
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
