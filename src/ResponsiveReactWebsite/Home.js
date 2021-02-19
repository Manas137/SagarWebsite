import React from "react";
import "./Designs.css";
import image1 from "./Images/Homeimg.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import CommonHA from './ComonHA';

const Home = () => {
  return (
    <>
      <CommonHA 
        name="Grow Your Business with"
        imgsrc={image1}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
