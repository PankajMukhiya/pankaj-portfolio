import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../sanitySetup";
import MetaData from "../MetaData";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CakeIcon from "@material-ui/icons/Cake";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SchoolIcon from "@material-ui/icons/School";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import "./about.css";
import { motion } from "framer-motion";
import MyLoader from "../Containers/Loader/MyLoader";
const About = () => {
  const [loading, setLoading] = useState(true);
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const aboutsQuery = '*[_type == "about"]';
    client.fetch(aboutsQuery).then((data) => {
      setAbouts(data);
      setLoading(false);
    });
  }, []);
  // console.log(abouts[0]);
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
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <MetaData title="Pankaj — About" />
          {abouts &&
            abouts.map((item) => {
              return (
                <div className="container-fluid containerAbout" key={item._id}>
                  <div className="row">
                    <div className="col-12 col-md-8 mb-2">
                      <div className="row">
                        <div className="col-11 mx-auto">
                          <motion.h3
                            animate={{ x: 80 }}
                            transition={{
                              type: "spring",
                              repeat: Infinity,
                              repeatType: "mirror",
                              repeatDelay: 0.5,
                            }}
                            className="h3About"
                          >
                            About Me
                          </motion.h3>
                        </div>
                        <div className="col-2 ms-5 headinUnderLineDiv"></div>
                        <motion.div
                          variants={scaleVariants}
                          whileInView={scaleVariants.whileInView}
                          className="col-11 mx-auto mt-3"
                        >
                          <p className="aboutTitle">
                            {abouts && abouts[0].title}
                          </p>
                        </motion.div>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 1, type: "tween" }}
                          className="col-11 mx-auto mt-1"
                        >
                          <p className="aboutDesc">
                            {abouts && abouts[0].fistDescription}
                          </p>
                        </motion.div>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 1.5, type: "spring" }}
                          className="col-11 mx-auto mt-1"
                        >
                          <p className="aboutDesc">
                            {abouts && abouts[0].secondDescription}
                          </p>
                        </motion.div>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 2, type: "keyframes" }}
                          className="col-11 mx-auto mt-1"
                        >
                          <p className="aboutDesc">
                            {abouts && abouts[0].thirdDescription}
                          </p>
                        </motion.div>
                        <div className="col-11 mx-auto mt-1">
                          <p className="aboutTitle">
                            Here are a few technologies I've working with
                            recently :
                          </p>
                        </div>
                        <div className="col-6 mx-auto d-flex justify-content-start ">
                          <p className="aboutDesc">
                            <ArrowRightIcon className="fs-1" /> JavaScript
                            (ES6+)
                          </p>
                        </div>
                        <div className="col-6 mx-auto ">
                          <p className="aboutDesc">
                            <ArrowRightIcon className="fs-1" /> React
                          </p>
                        </div>
                        <div className="col-6 mx-auto d-flex justify-content-start">
                          <p className="aboutDesc">
                            <ArrowRightIcon className="fs-1 " /> Nodejs
                          </p>
                        </div>
                        <div className="col-6 mx-auto ">
                          <p className="aboutDesc">
                            <ArrowRightIcon className="fs-1" /> Sanity
                          </p>
                        </div>
                        <div className="col-6 mx-auto d-flex justify-content-start">
                          <p className="aboutDesc">
                            <ArrowRightIcon className="fs-1" /> MongoDb
                          </p>
                        </div>
                        <div className="col-6 mx-auto ">
                          <p className="aboutDesc">
                            <ArrowRightIcon className="fs-1" /> Redux
                          </p>
                        </div>
                        <div className="col-6 mx-auto d-flex justify-content-start">
                          <p className="aboutDesc">
                            <ArrowRightIcon className="fs-1" /> Bootstrap
                          </p>
                        </div>
                        <div className="col-6 mx-auto ">
                          <p className="aboutDesc">
                            <ArrowRightIcon className="fs-1" /> Firebase
                          </p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-9 col-md-5 mx-auto d-flex justify-content-start align-items-center">
                          <p>
                            <CakeIcon className="text-danger-aboutIcon  mx-1 mb-2 fs-1" />
                          </p>

                          <p className="ptagAbout  mx-1">Birthday: </p>
                          <p className="text-muted mx-1 ptagAbout">
                            {abouts && abouts[0].birthdate}
                          </p>
                        </div>
                        <div className="col-9 col-md-5 mx-auto  d-flex justify-content-start align-items-center">
                          <p>
                            <DateRangeIcon className="text-danger-aboutIcon  mx-1 mb-2 fs-1" />
                          </p>

                          <p className="ptagAbout  mx-1">Age: </p>
                          <p className="text-muted mx-1 ptagAbout">
                            {abouts && abouts[0].age}
                          </p>
                        </div>
                        <div className="col-9 col-md-5 mx-auto d-flex justify-content-start align-items-center">
                          <p>
                            <MenuBookIcon className="text-danger-aboutIcon  mx-1 mb-2 fs-1" />
                          </p>

                          <p className="ptagAbout  mx-1">Study: </p>
                          <p className="text-muted mx-1 ptagAbout">
                            {abouts && abouts[0].study}
                          </p>
                        </div>
                        <div className="col-9 col-md-5 mx-auto d-flex justify-content-start align-items-center">
                          <p>
                            <SchoolIcon className="text-danger-aboutIcon  mx-1 mb-2 fs-1" />
                          </p>

                          <p className="ptagAbout  mx-1">Degree: </p>
                          <p className="text-muted mx-1 ptagAbout ">
                            {abouts && abouts[0].degree}
                          </p>
                        </div>
                        <div className="col-12 col-md-5 mx-auto  d-flex justify-content-start align-items-center">
                          <p>
                            <EmailIcon className="text-danger-aboutIcon  mx-1 mb-2 fs-1" />
                          </p>

                          <p className="ptagAbout  mx-1">Mail: </p>
                          <p className="text-muted mx-1 ptagAbout">
                            {abouts && abouts[0].email}
                          </p>
                        </div>
                        <div className="col-9 col-md-5 mx-auto  d-flex justify-content-start align-items-center">
                          <p>
                            <PhoneIcon className="text-danger-aboutIcon  mx-1 mb-2 fs-1" />
                          </p>

                          <p className="ptagAbout  mx-1">Phone: </p>
                          <p className="text-muted mx-1 ptagAbout">
                            +{abouts && abouts[0].phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 0.9 }}
                      animate={{ scale: 0.9 }}
                      transition={{
                        ease: "anticipate",
                        duration: 1,
                        type: "spring",
                        damping: 3,
                      }}
                      className="col-9 col-md-4 mx-auto d-flex justify-content-center align-items-center"
                      //   style={{ border: "3px solid tomato" }}
                    >
                      <img
                        className="aboutImage rounded"
                        style={{
                          width: "18rem",
                          height: "25rem",
                          border: "10px solid tomato",
                        }}
                        src={abouts && urlFor(abouts[0].aboutImage)}
                        alt="aboutImg"
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};

export default About;
