import ExternalLink from "../link/external-link";
import Image from "next/image";
import inventoryImg from "../../public/images/portfolio/inventory.png";
import tshirtShopImg from "../../public/images/portfolio/tshirt shop.png";
import abstractImg from "../../public/images/portfolio/abstract.png";
import chatAppImg from "../../public/images/portfolio/chat-app.png";
import ivoryImg from "../../public/images/portfolio/ivory.png";
import taskManage from "../../public/images/portfolio/task-manage.png";
import teamAppImg from "../../public/images/portfolio/team-app.png";
import teamMemberImg from "../../public/images/portfolio/team-members.png";
import urlshortenerImg from "../../public/images/portfolio/url-shortner.png";
import zenDeskImg from "../../public/images/portfolio/zendesk.png";
import interviewVectorImg from "../../public/images/portfolio/interview-vector.png";

export default function ImageList() {
  return (
    <>
      <div className=" flex flex-wrap flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center mt-6 ">
        {itemData.map((image) => {
          return (
            <div
              key={image.author}
              className="ml-2 cursor-pointer flex flex-col justify-center items-stretch my-3 max-w-md w-80 h-50 relative rounded overflow-hidden border border-gray-200 hover:shadow-lg dark:border dark:border-white "
            >
              <ExternalLink href={image.extLink}>
                <Image
                  className={
                    "max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                  }
                  src={image.img}
                  alt={image.title}
                  width={320}
                  height={200}
                  objectFit="contain"
                />
                {/* <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-md  text-gray-700 ">{card.desc}</p>
                </div> */}
                {/* <div className="px-6 py-4">
                  {card.tech.map((item) => {
                    return (
                      <span
                        key={item}
                        className="inline-block my-2 bg-lime-100 px-3 py-2 text-xs  mr-2 text-gray-700 rounded-full"
                      >
                        {item}
                      </span>
                    );
                  })} */}
                {/* </div> */}
              </ExternalLink>
            </div>
          );
        })}
      </div>
    </>
  );
}

const itemData = [
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
    img: inventoryImg,
    alt: "inventory img",
    extLink: "https://inventory-five-indol.vercel.app/",
  },
  {
    id: "invent00@abc002",
    title: "E-Commerce App ",
    desc: "The tshirt Store App project is a front-end application built using  Angular and RxJS. It allows users to browse and purchase products, with features such as a dynamic product catalog, an interactive shopping cart, and a secure checkout process. Users can search and filter products, view product, and add items to cart.",
    tech: ["Angular", "RxJs", "Angular Material"],
    img: tshirtShopImg,
    alt: "tshirt store img",
    extLink: "https://tshirt-bazar-5fidc2eer-irfan-ansari-au28.vercel.app/",
  },
  {
    id: "invent00@abc003",
    title: "Interview Vector ",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: interviewVectorImg,
    alt: "interview-vector-image",
    extLink: "https://demo-d378a8.webflow.io/",
  },
  {
    id: "invent00@abc004",
    title: "Abstract ",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: abstractImg,
    alt: "abstract-image",
    extLink: "https://abstract-irfan.webflow.io/",
  },
  {
    id: "invent00@abc005",
    title: "Chat App ",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: chatAppImg,
    alt: "chat-app-image",
    extLink: "https://chatapp-f19966.webflow.io/",
  },
  {
    id: "invent00@abc006",
    title: "Ivory ",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: ivoryImg,
    alt: "ivory-image",
    extLink: "https://celebrated-daifuku-a3c4b6.netlify.app/",
  },
  {
    id: "invent00@abc007",
    title: "Task Manager ",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: taskManage,
    alt: "task-manage-image",
    extLink: "https://todo-mern-4itw.onrender.com/",
  },
  {
    id: "invent00@abc008",
    title: "Team App",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: teamAppImg,
    alt: "team-app-image",
    extLink: "https://team-app-bf1d29.webflow.io/",
  },
  {
    id: "invent00@abc009",
    title: "Team Member App",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: teamMemberImg,
    alt: "team-member-image",
    extLink: "https://zen-nobel-e1465d.netlify.app/login",
  },
  {
    id: "invent00@abc010",
    title: "URL Shortener ",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: urlshortenerImg,
    alt: "url-shortener-image",
    extLink: "https://hopeful-spence-2e68fc.netlify.app/",
  },
  {
    id: "invent00@abc011",
    title: "Zendesk Landing Page ",
    desc: "The InterviewVector project is a web application built using MERN. It allows HR managers and recruiters to schedule, organize and manage job interviews, with features such as creating interviews, scheduling them, and keeping track of interview status.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    img: zenDeskImg,
    alt: "zendesk-image",
    extLink: "https://zendesk-irfan.webflow.io/",
  },
];
