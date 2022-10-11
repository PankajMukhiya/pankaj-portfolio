import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import images from "../../assets/images";
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
          <div className="col-9 mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className=" mb-3 ">
              <NavLink
                className="nav-link homeNavlink text-center text-uppercase"
                to="/contact"
              >
                Contact Me
              </NavLink>
            </div>
            <div className="">
              <a
                href={images.MyResumePdf}
                // href="./Pankaj_Resume.pdf"
                download="Pankaj_Resume"
                // target="_blank"
              >
                <button type="button" className="homeNavlink btn btn-lg btn-block">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
