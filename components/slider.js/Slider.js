import React from "react";
import CssLogo from "../../public/icons/css-logo";
import HtmlLogo from "../../public/icons/html-logo";
import NextJSLogo from "../../public/icons/next-js-logo";
import Python from "../../public/icons/python-logo";
import classes from "./slider.module.css";

export const Rectangle = () => {
  return (
    <div
      style={{
        display: "inline-block",
        height: "40px",
        width: "100px",
        border: "2px solid black",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      Rectangle
    </div>
  );
};

const Slider = () => {
  return (
    <div>
      <div className={classes.sliderContainer}>
        <div className={`${classes.sliderContentWrapper} ${classes.fast}`}>
          <Python />
          <HtmlLogo />
          <CssLogo />
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
