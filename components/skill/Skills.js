import React from "react";
import CssLogo from "../../public/icons/css-logo";
import HtmlLogo from "../../public/icons/html-logo";
import NextJSLogo from "../../public/icons/next-js-logo";
import Python from "../../public/icons/python-logo";
import Slider from "../slider.js/Slider";

const Skills = () => {
  return (
    <>
      <div className="flex flex-wrap text-xl font-semibold py-8">Skills</div>
      <Slider />
      {/* <div className="my-4 border-gray-200 border-solid border p-6 rounded-md flex items-center justify-between ">
        <Python />
        <HtmlLogo />
        <CssLogo />
        <NextJSLogo />
      </div> */}
    </>
  );
};

export default Skills;
