import React, { useEffect, useState } from "react";
import PersonalDetails from "../FormSection/PersonalDetails";
import Education from "../FormSection/Education";
import Projects from "../FormSection/Projects";
import Skills from "../FormSection/Skills";
import Achievements from "../FormSection/Achievements";
import Certifications from "../FormSection/Certifications";
import ResumeTimeline from "../TimeLine/ResumeTimeLine";
import "./Form.css";
import { InfinitySpin } from "react-loader-spinner";

const Form = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  const [formData, setFormData] = useState(
    {
      "personalDetails": {
       "name":"SUBHASHINI K",
        "phone":"9362019190",
        "email":"subhashini.k2023cse@sece.ac.in",
        "linkedinurl" : "https://www.linkedin.com/in/subhashinik01/",
        "linkedin" : "Subhashini K",
        "githuburl":"https://github.com/Subhashini-K",
        "github" : "Subhashini-K"
      },
      "education": {
        "degree" : "B.E[CSE]",
        "cgpa": "9.1",
        "studyYear":"2023-2027",
        "hscSchool":"St.Joseph's Mat.Hr.Sec school",
        "hscPercentage":"92%",
        "hscYear":"2022",
        "sslcSchool":"St.Joseph's Mat.Hr.Sec school",
        "sslcPercentage":"94%",
        "sslcYear":"2020"
      },
    
      "projects": [
        {
          "name": "STRATOCAST",
          "github": "https://github.com/Subhashini-K/Weather-App---My-First-React-Project",
          "tech": "React",
          "completion": "Jan-2025",
          "description": "StratoCast is a simple App built using React and the OpenWeatherMap API. It allows users to search for the current weather conditions of any city worldwide.",
          "tools": "VSCode, React ,Vite , Node.js , REST API, Postman, Git, GitHub"
        },
        {
          "name": "STRATOCAST",
          "github": "https://github.com/Subhashini-K/Weather-App---My-First-React-Project",
          "tech": "React",
          "completion": "Jan-2025",
          "description": "StratoCast is a simple App built using React and the OpenWeatherMap API. It allows users to search for the current weather conditions of any city worldwide.",
          "tools": "VSCode, React ,Vite , Node.js , REST API, Postman, Git, GitHub"
        },
        {
          "name": "STRATOCAST",
          "github": "https://github.com/Subhashini-K/Weather-App---My-First-React-Project",
          "tech": "React",
          "completion": "Jan-2025",
          "description": "StratoCast is a simple App built using React and the OpenWeatherMap API. It allows users to search for the current weather conditions of any city worldwide.",
          "tools": "VSCode, React ,Vite , Node.js , REST API, Postman, Git, GitHub"
        }
      ],
      
      "skills": {
        "languages":"C,C++,Java",
        "frameworks":"HTML5,CSS3,React.js,Express.js,Node.js",
        "tools":"VScode,git,github",
        "database":"mysql,mongodb",
        "coreConcepts":"OOPS,DSA,DBMS",
        "softSkills":"communication,leadership,collaboration"
      },
    
      "achievements": {
        "leetcoderating": "1460",
        "leetcodeprofileLink": "https://leetcode.com/u/subhashini01/",
        "leetcodemaxRating": "1470",
        "achievements": [
          {
            "name": "TECHFUSION - 2024",
            "year":  "April 2024",
            "description": "Won first place in SECE – TECH domain at Techfusion hackathon held at our college on 26th April 2024",
            "image": "https://drive.google.com/file/d/1FyC8MQNyEocYEsWacBGa2KWcstGPwjMA/view"
          },
          {
            "name": "TECHFUSION - 2024",
            "year":  "April 2024",
            "description": "Won first place in SECE – TECH domain at Techfusion hackathon held at our college on 26th April 2024",
            "image": "https://drive.google.com/file/d/1FyC8MQNyEocYEsWacBGa2KWcstGPwjMA/view"
          }
          
        ]
      },
      "certifications": [
        {
          "courseName": "Dsa using Java",
          "certificateLink": "https://drive.google.com/file/d/1yIqH10fqdK9PIotypv_SBbK_WIrkPEmw/view",
          "provider": "NPTEL",
          "completionDate": "2025"
        },
        {
          "courseName": "Dsa using Java",
          "certificateLink": "https://drive.google.com/file/d/1yIqH10fqdK9PIotypv_SBbK_WIrkPEmw/view",
          "provider": "NPTEL",
          "completionDate": "2025"
        },
        {
          "courseName": "Dsa using Java",
          "certificateLink": "https://drive.google.com/file/d/1yIqH10fqdK9PIotypv_SBbK_WIrkPEmw/view",
          "provider": "NPTEL",
          "completionDate": "2025"
        },
        {
          "courseName": "Dsa using Java",
          "certificateLink": "https://drive.google.com/file/d/1yIqH10fqdK9PIotypv_SBbK_WIrkPEmw/view",
          "provider": "NPTEL",
          "completionDate": "2025"
        }
      ]
    }
    
  );

  const updateFormData = (section, sectionData) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: Array.isArray(prevData[section])
        ? sectionData // Directly replace if it's an array
        : {
            ...prevData[section], // Keep existing data for that section
            ...sectionData, // Update only the new values
          },
    }));
  };

  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  const sections = [
    {
      id: 0,
      name: "Personal Details",
      heading: "Introduce yourself to the world – your journey begins here !",
      component: (
        <PersonalDetails formData={formData} updateFormData={updateFormData} />
      ),
    },
    {
      id: 1,
      name: "Education",
      heading:
        "Showcase your academic milestones – your knowledge, your pride !",
      component: (
        <Education formData={formData} updateFormData={updateFormData} />
      ),
    },
    {
      id: 2,
      name: "Projects",
      heading: " Highlight your innovations – let your work speak for itself !",
      component: (
        <Projects formData={formData} updateFormData={updateFormData} />
      ),
    },
    {
      id: 3,
      name: "Skills",
      heading:
        "Tell the world what you’re best at – your skills are your superpowers !",
      component: <Skills formData={formData} updateFormData={updateFormData} />,
    },
    {
      id: 4,
      name: "Achievements",
      heading: "Add the spark! Your accolades deserve the spotlight !",
      component: (
        <Achievements formData={formData} updateFormData={updateFormData} />
      ),
    },
    {
      id: 5,
      name: "Certifications",
      heading:
        "Seal the deal with your qualifications – prove your expertise ! ",
      component: (
        <Certifications formData={formData} updateFormData={updateFormData} />
      ),
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    const form = document.querySelector("form"); // Get the current form
  
    if (form && !form.checkValidity()) {
      form.reportValidity(); // Show validation errors if invalid
      return; // Stop navigation
    }
  
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };
  

  const handleSave = async() => {
    const form = document.querySelector("form");
  
    if (form && !form.checkValidity()) {
      form.reportValidity(); // Ensure the last step is valid before downloading
      return;
    }
  
    console.log("Saving Data:", formData);
    // API call or logic to save the form data
    setLoading(true); // Set loading to true before API call
    // API call to save the form data
    await fetch("http://localhost:3000/generate-resume", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.blob())
      .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error generating PDF:", error));
      setLoading(false); // Set loading to false after API call
  };
  

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const steps = [
    {
      label: "Personal Details",
    },
    {
      label: "Education details",
    },
    {
      label: "Projects",
    },
    {
      label: "Skills",
    },
    {
      label: "Achievements",
    },
    {
      label: "Certifications",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="spinner">
          <InfinitySpin
            visible={true}
            width="200"
            color="#ff004f"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div className="form-container">
          <h1 className="form-heading">{sections[currentSection].name}</h1>
          <h3 className="form-heading">{sections[currentSection].heading}</h3>
          <div className="form">
            <ResumeTimeline steps={steps} currentStep={currentSection} />
            <div className="form-card">
              {sections[currentSection].component}
            </div>
          </div>

          <div className="form-buttons">
            <div className="buttons">
              {currentSection != 0 ? (
                <button className="prev-btn" onClick={prevSection}>
                  Prev
                </button>
              ) : (
                <></>
              )}

              {/* <button className="save-btn">Save</button> */}

              {currentSection == sections.length - 1 ? (
                <button className="next-btn" onClick={handleSave}>
                  Download Resume
                </button>
              ) : (
                <button className="next-btn" onClick={nextSection}>
                  Save & Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
