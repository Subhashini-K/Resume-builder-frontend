import React, {useEffect , useState } from "react";


const Education = ({formData, updateFormData}) => {
  const [educationData, setEducationData] = useState(formData["education"]);

  useEffect(()=>{
    setEducationData(formData["education"]);
  },[formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...educationData, [name]: value };
    setEducationData(updatedData);

    updateFormData("education",updatedData);
  };

  return (
    <form>
<div className="section-container">
      <input type="text" name="degree" placeholder="Degree" onChange={handleChange} value={educationData.degree} required/>
      <input type="text" name="cgpa" placeholder="CGPA" onChange={handleChange} value={educationData.cgpa} required/>
      <input type="text" name="studyYear" placeholder="Year of Study" onChange={handleChange} value={educationData.studyYear} required/>

      <input type="text" name="hscSchool" placeholder="HSC School Name" onChange={handleChange} value={educationData.hscSchool} required/>
      <input type="text" name="hscPercentage" placeholder="HSC Percentage" onChange={handleChange} value={educationData.hscPercentage} required/>
      <input type="text" name="hscYear" placeholder="HSC Year of Study" onChange={handleChange} value={educationData.hscYear} required/>

      <input type="text" name="sslcSchool" placeholder="SSLC School Name" onChange={handleChange} value={educationData.sslcSchool} required/>
      <input type="text" name="sslcPercentage" placeholder="SSLC Percentage" onChange={handleChange} value={educationData.sslcPercentage} required/>
      <input type="text" name="sslcYear" placeholder="SSLC Year of Study" onChange={handleChange} value={educationData.sslcYear} required/>
    </div>
    </form>
    
  );
};

export default Education;
