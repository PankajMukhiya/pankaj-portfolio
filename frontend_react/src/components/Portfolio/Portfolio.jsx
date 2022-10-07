import React, { useEffect, useState } from "react";
import "./portfolio.css";
import GithubIcon from "@material-ui/icons/GitHub";
import PreviewIcon from "@material-ui/icons/Visibility";
import { motion } from "framer-motion";
import { client, urlFor } from "../../sanitySetup";
import MetaData from "../MetaData";
import MyLoader from "../Containers/Loader/MyLoader";
const Portfolio = () => {
  // for loading
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [fullStackPrject, setFullStackPrject] = useState([]);
  const [backEndProject, setBackEndProject] = useState([]);
  const [frontEndProject, setFrontEndProject] = useState([]);
  const [featuredProject, setFeaturedProject] = useState([]);
  const [filteredProject, setFilteredProject] = useState([]);

  // active
  const [activeFilter, setActiveFilter] = useState("Featured Project");
  // for animations
  const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    const portfolioQuery = '*[_type == "portfolio"]';
    client.fetch(portfolioQuery).then((data) => {
      setProjects(data);
    });
    const featuredProjectQuery = '*[_type == "portfolio" && important == true]';
    client.fetch(featuredProjectQuery).then((data) => {
      setFeaturedProject(data);
      setFilteredProject(data);
      setLoading(false);
    });

    const backEndProjectQuery =
      '*[_type == "portfolio" && tag =="BackEnd Project"]';
    client.fetch(backEndProjectQuery).then((data) => {
      setBackEndProject(data);
    });

    const frontEndProjectQuery =
      '*[_type == "portfolio"  && tag =="Front End Project"]';
    client.fetch(frontEndProjectQuery).then((data) => {
      setFrontEndProject(data);
    });

    const fullStackProjectQuery =
      '*[_type == "portfolio" && tag =="Full Stack Project"]';
    client.fetch(fullStackProjectQuery).then((data) => {
      setFullStackPrject(data);
    });

    
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);

    setAnimatedCard([{ y: 100, opacity: 0 }]);
    if (item === "Full Stack Project") {
      setFilteredProject(fullStackPrject);
    } else if (item === "Front End Project") {
      setFilteredProject(frontEndProject);
    } else if (item === "Back End Project") {
      setFilteredProject(backEndProject);
    } else if (item === "Featured Project") {
      setFilteredProject(featuredProject);
    } else if (item === "All") {
      setFilteredProject(projects);
    }
    setTimeout(() => {
      setAnimatedCard([{ y: 0, opacity: 1 }]);
    }, 1000);
  };
  const previewProject = (previewLink) => {
    window.open(previewLink, "_blank");
  };

  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <MetaData title="Pankaj — Projects" />
          <div className="container-fluid containerPorfolio py-5">
            <div className="row">
              <div className="col-9 mx-auto">
                <h5 className="h5tag">Portfolio</h5>
                <h2 className="h2tag mb-5">Featured Works</h2>
              </div>
              <div className="col-9 mx-auto mb-3">
                <ul className="nav">
                  {[
                    "Featured Project",
                    "Front End Project",
                    "Back End Project",
                    "Full Stack Project",
                    "All",
                  ].map((item) => {
                    return (
                      <div
                        className={`nav-item m-2 navItem ${
                          activeFilter === item ? "activeItem" : " "
                        }`}
                        key={item}
                        onClick={() => handleProjectFilter(item)}
                      >
                        {item}
                      </div>
                    );
                  })}
                </ul>
              </div>
              {/*  PROJECT INFO  ROW*/}

              {filteredProject &&
                filteredProject.map((item, index) => {
                  return (
                    <motion.div
                      animate={animatedCard}
                      transition={{ duration: 0.5, delayChildren: 0.5 }}
                      className="col-9 col-md-4 mx-auto"
                      key={index}
                    >
                      <div
                        className=" projectCol col-12 mx-auto p-3 border rounded rounded-3  mb-3  "
                      >
                        <img
                          className="projectImg "
                          src={urlFor(item.projectImage)}
                          alt="projectImg"
                        onClick={() => previewProject(item.projectPreviewLink)}
                        />

                        <div className=" infodiv d-flex flex-column justify-content-center align-items-center mt-4">
                          <h5 className="h5tag">{item.title}</h5>
                          <p className="text-muted text-center">
                            {item.description}
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ opacity: 1 }}
                          transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                            staggerChildren: 0.5,
                          }}
                          whileInView={{ opacity: 1 }}
                          className="anchorDiv px-2 d-flex justify-content-between align-items-center   "
                        >
                          <a
                            href={item.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <motion.div
                              whileHover={{ scale: [1, 1.25] }}
                              className="iconDiv d-flex justify-content-center align-items-center mx-1"
                            >
                              <GithubIcon className="icon" />
                            </motion.div>
                          </a>
                          <a
                            href={item.projectPreviewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <motion.div
                              whileHover={{ scale: [1, 1.25] }}
                              className="iconDiv d-flex justify-content-center align-items-center mx-1"
                            >
                              <PreviewIcon className="icon" />
                            </motion.div>
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Portfolio;
