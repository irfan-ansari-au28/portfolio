/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/home-page/ui/button";

const Error = () => {
  return (
    <div>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className>
                <h1 className="mb-2 text-gray-800 font-bold text-2xl dark:bg-white dark:rounded-sm dark:p-4">
                  Looks like you&apos;ve found the doorway to the great nothing
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Link href={"/"}>
                  <Button className="bg-purple-600 text-white px-6 my-4">
                    Take me there!
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img src={"/images/404/404-2.png"} alt="error" />
            </div>
          </div>
        </div>
        <div>
          <img src="/images/404/404-3.png" alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Error;
