import React, { useEffect,useState } from "react";

const Skills = ({formData, updateFormData}) => {
  const [skills, setSkills] = useState(formData["skills"]);

  useEffect(()=>{
    setSkills(formData["skills"]);
  },[formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...skills, [name]: value };
    setSkills(updatedData);

    updateFormData("skills",updatedData);
  };

  return (
    <form>
<div className="section-container">
      <input type="text" name="languages" placeholder="Languages (C++, Java, etc.)" onChange={handleChange} value={skills.languages} required/>
      <input type="text" name="frameworks" placeholder="Frameworks/Technologies(HTML5,CSS3,React.js,Express.js)" onChange={handleChange} value={skills.frameworks} required/>
      <input type="text" name="tools" placeholder="Tools (VScode,Git,Github etc.)" onChange={handleChange} value={skills.tools} required/>
      <input type="text" name="coreConcepts" placeholder="Core Concepts (OOP, DSA,DBMS, etc.)" onChange={handleChange} value={skills.coreConcepts} required/>
      <input type="text" name="database" placeholder="Databases (MySQL, MongoDB, etc.)" onChange={handleChange} value={skills. database} required/>
      <input type="text" name="softSkills" placeholder="Soft Skills (Communication, Leadership, etc.)" onChange={handleChange} value={skills. softSkills} required/>
    </div>
    </form>
    
  );
};

export default Skills;
