import React, { useEffect, useState } from "react";
// import PhoneIcon from "@material-ui/icons/Phone";
// import EmailIcon from "@material-ui/icons/Email";
import * as Icon from 'react-feather'
import "./contact.css";
import { client } from "../../sanitySetup";
import { motion } from "framer-motion";
import MetaData from "../MetaData";
import MyLoader from "../Containers/Loader/MyLoader";
const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [contactsInfo, setContactsInfo] = useState([]);
  useEffect(() => {
    const contactsQuery = '*[_type == "contact"]';
    client
      .fetch(contactsQuery)
      .then((data) => {
        setContactsInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //   console.log(contactsInfo[0]);
  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <MetaData title="Pankaj — Contact" />
          {contactsInfo &&
            contactsInfo.map((item) => {
              return (
                <div
                  key={item._id}
                  className="container-fluid containerContact d-flex justify-content-center align-items-center"
                >
                  <div className="row py-5">
                    <div className="col-11 mx-auto mb-5">
                      <h3 className="h3About">Contact Us</h3>
                      <div className="col-5 col-md-3 headinUnderLineDiv"></div>
                    </div>
                    <h2 className="text-center aboutTitle">Get In Touch</h2>
                    {/* <div className="col-10 mx-auto d-flex justify-content-center align-items-center headinUnderLineDiv"></div> */}
                    <motion.div
                      whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                      transition={{ duration: 1.2, type: "tween" }}
                      className="col-9 col-md-5  mx-auto border border-1 border-primary rounded-3 d-flex justify-content-start align-items-center mt-2 py-2"
                    >
                      <Icon.Mail className="text-success  mx-1 mb-2 fs-1" />
                      <span className="mx-1 aboutDesc">
                        {contactsInfo && contactsInfo[0].email}
                      </span>
                    </motion.div>
                    <motion.div
                      whileInView={{ y: [100, 0], opacity: [0, 1] }}
                      transition={{ duration: 1.2, type: "spring" }}
                      className="col-9 col-md-5  mx-auto  border border-1 border-primary rounded-3 d-flex justify-content-start align-items-center mt-2 py-2"
                    >
                      <Icon.Phone className="text-danger-aboutIcon  mx-1 mb-2 fs-1" />
                      <span className="mx-1 aboutDesc">
                        +{contactsInfo && contactsInfo[0].phoneNo}
                      </span>
                    </motion.div>
                    <motion.div
                      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                      transition={{ duration: 1.2, type: "tween" }}
                      className="col-9 mx-auto d-flex justify-content-center align-items-center mt-4 py-2"
                    >
                      <h5 className="aboutDesc">
                        {contactsInfo && contactsInfo[0].contactDescription}
                      </h5>
                    </motion.div>
                    <div className="col-9 mx-auto d-flex justify-content-center align-items-center mt-2 py-2">
                      <a
                        className="btn btn-outline-primary mt-5 fs-2 "
                        href="mailto:mrpankajmukhiya123@gamil.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Say Hi!
                      </a>
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

export default Contact;
