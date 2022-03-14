import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/my-resumes.css'

const MyResumes = () => {
  return (
    <div className="container">
      <h3>My Resumes</h3>
      <div className="row">
        <Link to={"/create-resume"}>
          <div className="card d-flex align-items-center" style={{width:'18em',border:'2px solid blue',height:'18em'}}>
            <div className="card-body d-flex align-items-center justify-content-center">
              <h5 className="card-title">+ Create new resume</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyResumes;
