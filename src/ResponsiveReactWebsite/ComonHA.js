import React from "react";
import "./Designs.css";
import image1 from "./Images/Homeimg.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const CommomHA = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h2>
                    {props.name}  
                    <strong className="brand_name"> Technical </strong>
                  </h2>
                  <p className="my_3">
                    We are building beautiful applications for website
                  </p>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header_img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated "
                    alt="CommomHA_img"
                    width="300"
                    height="200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommomHA;
