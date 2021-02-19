import React from "react";
import "./Designs.css";
import image1 from "./Images/aboutpic.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CommonHA from "./ComonHA";

const About = () => {
  return (
    <>
      <CommonHA
        name="Welcome to About Page"
        imgsrc={image1}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
