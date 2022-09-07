import Image from "next/image";
import React from "react";

const PostHeader = ({ title, image, slug, summary }) => {
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <header>
      <div className="flex flex-col justify-center items-center  mt-16 mb-8">
        <Image src={imagePath} alt={title} height={460} width={768} />
      </div>
      <h1 className="text-gray-900 dark:text-gray-200 font-bold leading-tight text-4xl md:text-5xl mt-4 ">
        {title}
      </h1>
      <section className="my-6 border-y border-double py-6 italic dark:text-gray-300 ">
        <p className="text-gray-600 dark:text-gray-200">
          <span className="uppercase text-primary dark:text-primary">
            Summary ↬{" "}
          </span>
          {summary}
        </p>
      </section>
    </header>
  );
};

export default PostHeader;
