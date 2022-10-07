import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const SocialMedia = () => {
  return (
    <>
      {/* social media icons */}
      <div className="col-10 mx-auto col-md-6 d-flex justify-content-center align-items-center mb-3">
        {/* linkedIn */}
        <a
          className="socialMediaIcon mx-3 "
          href="https://www.linkedin.com/in/pankajkumarmukhiya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="linkedInIcon fs-1 " />
        </a>
        {/* github */}
        <a
          className="socialMediaIcon mx-3  "
          href="https://github.com/PankajMukhiya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="githubIcon  fs-1 " />
        </a>
        {/* instagram  */}
        <a
          className="socialMediaIcon mx-3   "
          href="https://www.instagram.com/_____p__a__n__k__a__j_____/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className=" instagramIcon fs-1 " />
        </a>
        {/* facebook */}
        <a
          className="socialMediaIcon mx-3  "
          href="https://www.facebook.com/pankajkumarmukhiya.mukhiya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="facebookIcon fs-1 " />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
