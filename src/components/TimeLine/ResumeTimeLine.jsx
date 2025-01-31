import { useState } from "react";
import PersonalDetails from "../FormSection/PersonalDetails";
import "./ResumeTimeline.css";

export default function Stepper({ steps,currentStep }) {
  
  
  return (
    
      <div className="steps">
        {steps.map(({ label, content }, index) => {
          return (
            <div key={label} className="stepper-container">
              <div
                className={`step-number ${
                  index <= currentStep ? "active" : ""
                }`}
              >
                {index + 1}
                {index < steps.length - 1 && (
                  <div
                    className={`step-line ${
                      index < currentStep ? "active" : ""
                    }`}
                  ></div>
                )}
              </div>
              <div className="step-label">{label}</div>
            </div>
          );
        })}
      </div>
    
  );
}