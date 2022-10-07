import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../sanitySetup";
import MetaData from "../MetaData";
import "./skills.css";
import { motion } from "framer-motion";
import MyLoader from "../Containers/Loader/MyLoader";
const Skills = () => {
  const [loading, setLoading] = useState("true");
  const [skillsData, setSkillsData] = useState([]);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);
  useEffect(() => {
    const skillsQuery = '*[_type == "skillsExpriences"]';
    client.fetch(skillsQuery).then((data) => {
      setSkillsData(data);
      setLoading(false);
    });
  }, []);
  // console.log(skillsData[0].stack[0]);
  let skillImages;
  let stackIfo;
  let expriences;
  skillsData &&
    skillsData.map((item) => {
      skillImages = item.skillImgGallery;
      stackIfo = item.stack;
      expriences = item.exprience;
      return { skillImages, stackIfo, expriences };
    });

  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <MetaData title="Pankaj — Skills & Experience" />
          {skillsData &&
            skillsData.map((item) => {
              return (
                <div
                  className="container-fluid skillsContainer py-5"
                  key={item._id}
                >
                  <div className="row ">
                    <h1 className="text-center h3About">Skills & Experience</h1>
                    <div className="underlineMakerDiv "></div>
                    <div className="col-9 col-md-7 mx-auto mt-3">
                      {/* img row  */}
                      <div className="row py-3">
                        {skillImages &&
                          skillImages.map((item) => {
                            return (
                              <div
                                className="col-3 mx-auto my-2 rounded-circle d-flex justify-content-center align-items-center bg-dark"
                                style={{ width: "7rem", height: "7rem" }}
                                key={item._key}
                              >
                                <img
                                  src={urlFor(item)}
                                  alt={`${item._key}`}
                                  style={{ width: "5rem" }}
                                />
                              </div>
                            );
                          })}
                      </div>
                      {/* description row */}
                      <motion.div
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1.2, type: "tween" }}
                        className="row"
                      >
                        <div className="col-12 mx-auto d-flex justify-content-center align-items-center">
                          <p className="skillPtagColor ">
                            {skillsData && skillsData[0].fistDescription}
                          </p>
                        </div>
                        <div className="col-12 mx-auto d-flex justify-content-center align-items-center">
                          <p className="skillPtagColor">
                            {skillsData && skillsData[0].secondDescription}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                    <div className="col-9 col-md-4 mx-auto mt-3">
                      {/* developerROLE row */}
                      {stackIfo &&
                        stackIfo.map((stackItem) => {
                          return (
                            <div className="row mb-3" key={stackItem._key}>
                              <div className="col mb-3">
                                {/* stack Name */}
                                <h4 className="skillH4Tag">
                                  {stackItem.stackName}
                                </h4>
                                <div
                                  className=" progress  "
                                  style={{ height: "3px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: `${stackItem.skillPercentage}`,
                                      backgroundColor: `${stackItem.backgrounColor}`,
                                    }}
                                    aria-valuenow={stackItem.skillPercentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      {/* experience Row */}
                      {expriences &&
                        expriences.map((exprienceItem) => {
                          return (
                            <motion.div
                              whileInView={{ y: [100, 0], opacity: [0, 1] }}
                              transition={{ duration: 1, type: "spring" }}
                              className="row mb-2"
                              key={exprienceItem._key}
                            >
                              <div className="col-12 p-3 border border-success">
                                <h4 className="exprienceH4Tag">
                                  {exprienceItem.exprienceStackName}
                                </h4>
                                <h6 className="text-muted fs-5">
                                  {exprienceItem.companyName}{" "}
                                </h6>
                                <p className="text-muted">
                                  {exprienceItem.expriencedYear}
                                </p>
                                <p className=" skillPtagColor">
                                  {exprienceItem.expriencedDescription}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};

export default Skills;
