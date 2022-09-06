import React, { useState } from "react";
import CssLogo from "../../public/icons/css-logo";
import HtmlLogo from "../../public/icons/html-logo";
import NextJSLogo from "../../public/icons/next-js-logo";
import Python from "../../public/icons/python-logo";
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
          <div className="mx-4">
            <FaHtml5
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className="mx-4">
            <FaCss3
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className="mx-4">
            <FaJs
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className="mx-4">
            <FaAngular
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className="mx-4">
            <FaReact
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <div className="mx-4">
            <FaGithub
              size="4rem"
              // color={`${true ? "rgb(0,0,0,.8)" : "rgb(0,0,0,.2)"}`}
            />
          </div>
          <NextJSLogo />
        </div>
      </div>
      {/* <div className={classes.sliderContainer}>
        <div className={`${classes.sliderContentWrapper} ${classes.slow}`}>
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
