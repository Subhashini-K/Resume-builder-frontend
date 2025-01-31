import React, { useEffect,useState } from "react";

const PersonalDetails = ({ formData, updateFormData }) => {
  const [personalData, setPersonalData] = useState(formData["personalDetails"]);

  useEffect(() => {
    setPersonalData(formData["personalDetails"]);
  }, [formData]);


  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...personalData, [name]: value };
    setPersonalData(updatedData);
    updateFormData("personalDetails",updatedData);
  };

 

  return (
    <form>
    <div className="section-container">
     
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange}  value={personalData.name} required/>
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange}  value={personalData.phone}    pattern="[0-9]{10}" 
        minLength="10" 
        maxLength="10"
        required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange}  value={personalData.email}  required />
      <input type="url" name="linkedinurl" placeholder="LinkedIn URL" onChange={handleChange}  value={personalData.linkedinurl} required/>
      <input type="text" name="linkedin" placeholder="LinkedIn UserName" onChange={handleChange} value={personalData.linkedin} required/>
      <input type="url" name="githuburl" placeholder="GitHub URL" onChange={handleChange}  value={personalData.githuburl} required/>
      <input type="text" name="github" placeholder="GitHub UserName" onChange={handleChange} value={personalData.github} required/>
      </div>
      </form>
  
    
  );
};

export default PersonalDetails;
