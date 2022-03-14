import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row m-2">
        <div className="logo d-flex align-items-center justify-content-center">
          <img src={logo} alt="logo" srcSet="" width={"80px"} height={"80px"} />
          <h1>Resume Builder</h1>
        </div>
        <div className="row my-5">
          <div className="col-3"></div>
          <div className="col-6">
            <p>
              The Best Free Online Resume Builder A Quick and Easy Way to Create
              Your Professional Resume. 30+ Professional Resume Templates Choose
              from over thirty modern and professional templates. All of which
              can be customized to your liking. Fast and Easy to Use Our resume
              builder lets you easily and quickly create a resume using our
              resume wizard.
            </p>
            <div className="d-flex justify-content-center">
            <Link to={'/my-resumes'} className="btn btn-primary p-3">CREATE A RESUME NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
