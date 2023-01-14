import React from "react";
import Image from "next/image";
import Link from "next/link";

import ExternalLink from "../link/external-link";
import inventoryImg from "../../public/images/portfolio/inventory.png";
import tshirtShopImg from "../../public/images/portfolio/tshirt shop.png";
import interviewVectorImg from "../../public/images/portfolio/interview-vector.png";

const cardContent = [
  {
    id: "invent00@abc001",
    title: "Inventory Management App ",
    desc: "The Inventory Management App project is a full-stack application built using the MERN stack with complete authentication system. The app allows businesses to manage and track their inventory. Users can easily monitor stock levels.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
    imgUrl: inventoryImg,
    alt: "inventory img",
    extLink: "https://inventory-five-indol.vercel.app/",
  },
  {
    id: "invent00@abc002",
    title: "E-Commerce App ",
    desc: "The tshirt Store App project is a front-end application built using  Angular and RxJS. It allows users to browse and purchase products, with features such as a dynamic product catalog, an interactive shopping cart, and a secure checkout process. Users can search and filter products, view product, and add items to cart.",
    tech: ["Angular", "RxJs", "Angular Material"],
    imgUrl: tshirtShopImg,
    alt: "tshirt store img",
    extLink: "https://tshirt-bazar-5fidc2eer-irfan-ansari-au28.vercel.app/",
  },
  {
    id: "invent00@abc003",
    title: "Interview Vector ",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    imgUrl: interviewVectorImg,
    alt: "interview-vector-image",
    extLink: "https://demo-d378a8.webflow.io/",
  },
];

const Card = () => {
  const cards = [1, 2, 3];
  return (
    <>
      <div className=" flex flex flex-wrap flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center  mt-6 ">
        {cardContent.map((card) => {
          return (
            <div
              key={card.id}
              className="ml-2 cursor-pointer flex flex-col justify-center items-stretch my-3 max-w-md w-80 h-50 relative rounded overflow-hidden border border-gray-200 hover:shadow-lg dark:border dark:border-white "
            >
              <ExternalLink href={card.extLink}>
                <Image
                  src={card.imgUrl}
                  className="w-full"
                  alt={card.alt}
                  width={320}
                  height={200}
                  objectFit="contain"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-md  text-gray-700 ">{card.desc}</p>
                </div>
                <div className="px-6 py-4">
                  {card.tech.map((item) => {
                    return (
                      <span
                        key={item}
                        className="inline-block my-2 bg-lime-100 px-3 py-2 text-xs  mr-2 text-gray-700 rounded-full"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </ExternalLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
