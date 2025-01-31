import React from "react";
import "./ResumeTemplates.css";
import ResumeTemplate from "../../assets/resumeTemplate.png";
import { useNavigate } from "react-router-dom";

const ResumeTemplates = () => {
  const navigate = useNavigate();
  const template = {
    id: 1,
    name: "SECE Standard Resume",
    image: ResumeTemplate,
  };

  return (
    <div className="resume-container">
      <h2 className="resume-heading">Your Resume, Your Future !</h2>
      {/* <p className="resume-subtext">
        Currently, we offer our <strong>college-approved</strong> template. More templates coming soon!
      </p> */}

<div className="resume-card-container">
        {/* Resume Card */}
        <div className="resume-card">
          <h3 className="resume-title">{template.name}</h3>
          <img
            src={template.image}
            alt={template.name}
            className="resume-image"
          />
          <button className="resume-button" onClick={() => navigate("/form")}>Use This Template</button>
        </div>

        {/* Coming Soon Card */}
        <div className="coming-soon-card">
          <p className="coming-soon-text">
            ✨Coming Soon... ✨
          </p>
        </div>

        <div className="coming-soon-card">
          <p className="coming-soon-text">
            ✨Coming Soon... ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;

