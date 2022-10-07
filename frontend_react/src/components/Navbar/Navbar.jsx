import React, { useState } from "react";
import MetaData from "../MetaData";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";
const Navbar = () => {
  const [menuBar, setMenuBar] = useState(true);
  const [navActiveItem, setNavActiveItem] = useState("");
  const activeNavbarHandler = (item) => {
    setNavActiveItem(item);
  };
  // if (document.readyState === "complete") {
  //   alert("Your page is loaded");
  // }
  return (
    <>
      <MetaData title={"Pankaj — Portfolio"} />

      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand " to="/">
            <motion.div
              className="text-uppercase ms-4 "
              whileHover={{ scaleY: 1.5 }}
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <span className="mx-1 fs-1  text-warning">p</span>
              <span className="mx-1 fs-1  text-danger">a</span>
              <span className="mx-1 fs-1  text-info">n</span>
              <span className="mx-1 fs-1 text-warning">k</span>
              <span className="mx-1 fs-1  text-danger">a</span>
              <span className="mx-1 fs-1  text-info">j</span>
            </motion.div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMenuBar(!menuBar)}
          >
            {menuBar ? (
              <span className="navbar-toggler-icon "></span>
            ) : (
              <span className="navbar-toggler-icon "></span>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {["about", "skills", "portfolio", "contact"].map(
                (item) => {
                  return (
                    <motion.li
                      className="nav-item"
                      key={item}
                      whileInView={{ opacity: 1 }}
                      whileHover={{ scaleY: 1.5, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      animate={{ rotate: 360 }}
                    >
                      <NavLink
                        onClick={() => activeNavbarHandler(item)}
                        className={`nav-link  text-uppercase px-3 ${
                          navActiveItem === item ? "activeItemNavbar" : " "
                        }`}
                        to={`/${item}`}
                      >
                        {item}
                      </NavLink>
                    </motion.li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

//
