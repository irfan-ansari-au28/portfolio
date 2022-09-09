import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section>
        <h1>About me</h1>
        <article className="prose mt-6 max-w-none">
          <p>
            Hello! I&apos;m Irfan. I&apos;m a Chemical Engineer - Web & Mobile
            Developer from India.
          </p>
          <p>
            I first had my first try at software development a few years back in
            college. Although I liked it, I kept focus on my career so I
            couldn&apos;t keep practicing.
          </p>
          <p>
            After college, I started looking for some new hobbies. By the end of
            2018 after a few months of digging around I decided to focus on web
            development. There is so much technologies to learn for both front
            and back end development, that I quickly fell in love with
            programming in general.
          </p>
          <p>
            I created this website for two main reasons. The first one is to
            showcase and share all the things I&apos;ve learned during my
            journey, and who knows?, maybe help others, that like me are
            learning. The second reason is, I always like to learn new things.
            So, I wanted this website to be the place where I can put in
            practice all the new things I learn.
          </p>
          <p>
            If you want to{" "}
            <Link href="/contact">
              <a className="text-blue-700 hover:purple underline hover:underline-offset-4">
                contact me
              </a>
            </Link>
            , go ahead and send me a message through the contact form on the
            contact page. I&apos;ll be happy to receive your feedback.
          </p>
        </article>
      </section>

      <section>
        <div className="my-8 space-y-3">
          <div className="mb-16 space-y-3">
            <h3>Current Favorite Tech Stack</h3>
            <p className="text-gray-600 dark:text-gray-200">
              This is my current favorite stack to work with
            </p>
          </div>

          <div className="space-y-3">
            <h3>Other Tech</h3>
            <p className="text-gray-600 dark:text-gray-200">
              This is some of the other technologies that I know and have work
              with
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
