import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

const Container = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Container;
