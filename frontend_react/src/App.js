import React from "react";
import { useState } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import {
  About,
  // BlogPost,
  Contact,
  Container,
  Error,
  Footer,
  Navbar,
  Portfolio,
  Skills,
} from "./components";
import MyLoader from "./components/Containers/Loader/MyLoader";
const App = () => {
  const [loading, SetLoading] = useState(true);
  setTimeout(() => {
    SetLoading(false)
  }, 2000);
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <Navbar />
          {/* <motion.div className="progress-bar" style={{ scaleX }}></motion.div> */}
          <Routes>
            <Route exact path="/" element={<Container />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            {/* <Route exact path="/blog" element={<BlogPost />} /> */}
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
};

export default App;
