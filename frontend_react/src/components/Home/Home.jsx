import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
const Home = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className="container-fluid containerHome d-flex justify-content-center align-items-center ">
        <div className="row ">
          <motion.div
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 2 }}
            className="col-9 mx-auto"
          >
            <h1 className="homeH1">Hi,</h1>
          </motion.div>
          <div className="col-9 mx-auto">
            <h1 className="homeH1 ">
              I'm <span className="mx-1 pankajLetterSize  text-warning">p</span>
              <span className="mx-1 pankajLetterSize  text-danger">a</span>
              <span className="mx-1 pankajLetterSize  text-info">n</span>
              <span className="mx-1 pankajLetterSize text-warning">k</span>
              <span className="mx-1 pankajLetterSize  text-danger">a</span>
              <span className="mx-1 pankajLetterSize  text-info">j</span>,
            </h1>
          </div>
          <motion.div
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 2 }}
            className="col-9 mx-auto"
          >
            <h1 className="homeH1 ">Web Developer</h1>
          </motion.div>
          <motion.div
            className="col-9 mx-auto"
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
          >
            <p className="text-muted fs-3">
              Full Stack Developer | Frontend Developer | Backend Developer
            </p>
          </motion.div>
          <div className="col-9 mx-auto">
            <div className="col-6 col-md-4 ">
              <NavLink
                className="nav-link homeNavlink text-center text-uppercase"
                to="/contact"
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
