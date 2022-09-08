import React from "react";
import { getFeaturedPosts } from "../../../lib/posts-util";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaCopy } from "react-icons";

import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { github } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
              width={400}
              height={200}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const value = code.children[0];
      const language = code.className.split("-")[1];
      // console.log(language, "language");
      // const { language, value } = code;
      return (
        <SyntaxHighlighter
          language={language}
          style={github}
          showLineNumbers={true}
          wrapLongLines={true}
          useInlineStyles={true}
          customStyle={{
            backgroundColor: "white",
            fontSize: ".75rem",
            lineHeight: "1.2rem",
          }}
        >
          {value}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className="max-w-3xl mx-auto  mb-8">
      <PostHeader
        title={post.title}
        slug={post.slug}
        image={post.image}
        summary={post.summary}
      />
      <div
        className=" flex flex-col justify-center
       items-start "
      >
        <ReactMarkdown components={customRenderers} remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
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
