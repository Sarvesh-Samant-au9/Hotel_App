import React from "react";
import "./Landing.css";
import { motion } from "framer-motion";
import { transition, animationVideo } from "./Animations/index";
import { Button } from "./Button_Link/Button";
import skyVideo from "./Video/sky.mp4";
const LandingPage = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationVideo}
      transition={transition}
    >
      <div className="hero-container mx-auto">
        <video src={skyVideo} autoPlay loop muted />
        <h1>Universal Group</h1>
        <p>Finding a room, Get affordable and high-five rooms and facilities</p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
