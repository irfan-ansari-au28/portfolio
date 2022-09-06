import NextJSLogo from "../../public/icons/next-js-logo";

import classes from "./slider.module.css";

import {
  FaAngular,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";

const Slider = () => {
  return (
    <div>
      <div className={classes.sliderContainer}>
        <div className={`${classes.sliderContentWrapper} ${classes.fast}`}>
          <div className={` mx-4 cursor-pointer opacity-30 hover:opacity-100`}>
            <FaHtml5
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className={` mx-4 cursor-pointer opacity-30 hover:opacity-100`}>
            <FaCss3
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className={` mx-4 cursor-pointer opacity-30 hover:opacity-100`}>
            <FaJs
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className={` mx-4 cursor-pointer opacity-30 hover:opacity-100`}>
            <FaAngular
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className={` mx-4 cursor-pointer opacity-30 hover:opacity-100`}>
            <FaReact
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className={` mx-4 cursor-pointer opacity-30 hover:opacity-100`}>
            <FaGithub
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          {/* <NextJSLogo /> */}
        </div>
      </div>
      {/* <div className={` mx-4 cursor-pointer opacity-30 hover:opacity-100`}>
        <div className={` mx-4 cursor-pointer opacity-30 hover:opacity-100`}>
          <Python />
          <HtmlLogo />
          <CssLogo />
          <NextJSLogo />
        </div>
      </div> */}
    </div>
  );
};

export default Slider;
