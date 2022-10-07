import React from "react";
import "./footer.css";
import SocialMedia from "./SocialMedia";
const Footer = () => {
  return (
    <>
      <div className="container-fluid text-light  d-flex justify-content-center align-items-center">
        <div className="row footerRow  d-flex justify-content-center align-items-center">
          {/*  */}
          <SocialMedia />
          {/*  */}
          <div className="col-10 mx-auto col-md-6">
            <p className="text-center fs-5" style={{ color: "#64ffda" }}>
              @2022 PANKAJ All right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
