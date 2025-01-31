import React, { useState } from "react";

const Certifications = ({ formData, updateFormData }) => {
  const [certifications, setCertifications] = useState(
    formData["certifications"] || [
      { courseName: "", certificateLink: "", provider: "", completionDate: "" },
    ]
  );
  const [newCertification, setNewCertification] = useState({
    courseName: "",
    certificateLink: "",
    provider: "",
    completionDate: "",
  });
  const [editingIndex, setEditingIndex] = useState(null); // Track which certification is being edited

  const handleCertificationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCertifications = certifications.map((certification, i) => {
      if (i === index) {
        return { ...certification, [name]: value };
      }
      return certification;
    });
    setCertifications(updatedCertifications);
    updateFormData("certifications", updatedCertifications);
  };

  const handleNewCertificationChange = (e) => {
    const { name, value } = e.target;
    setNewCertification((prev) => ({ ...prev, [name]: value }));
  };

  const deleteCertification = (index) => {
    const updatedCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCertifications);
    updateFormData("certifications", updatedCertifications);
  };

  const addCertification = () => {
    if (certifications.length >= 4) {
      alert("You can only add up to 4 certifications.");
      return;
    }
    if (!newCertification.courseName || !newCertification.certificateLink) {
      alert("Please fill in all fields before adding.");
      return;
    }

    const updatedCertifications = [...certifications, newCertification];
    setCertifications(updatedCertifications);
    updateFormData("certifications", updatedCertifications);

    // Reset input fields
    setNewCertification({
      courseName: "",
      certificateLink: "",
      provider: "",
      completionDate: "",
    });
  };

  const startEditing = (index) => {
    setEditingIndex(index); // Set the index of the certification being edited
  };

  const saveEdit = (index) => {
    if (!certifications[index].courseName || !certifications[index].certificateLink || !certifications[index].provider || !certifications[index].completionDate) {
      alert("Please fill in all fields before saving.");
      return;
    }
    setEditingIndex(null); // Exit edit mode
    updateFormData("certifications", certifications); // Update the form data
  };

  return (
    <div className="section-container">
      {certifications.map((certification, index) => (
        <div key={index} className="certification-entry">
          {editingIndex === index ? (
            // Edit mode
            <>
              <input
                type="text"
                placeholder="Course Name"
                name="courseName"
                value={certification.courseName}
                onChange={(e) => handleCertificationChange(index, e)}
              />
              <input
                type="url"
                placeholder="Certificate Link"
                name="certificateLink"
                value={certification.certificateLink}
                onChange={(e) => handleCertificationChange(index, e)}
              />
              <input
                type="text"
                placeholder="Provider"
                name="provider"
                value={certification.provider}
                onChange={(e) => handleCertificationChange(index, e)}
              />
              <input
                type="text"
                placeholder="Completion Date"
                name="completionDate"
                value={certification.completionDate}
                onChange={(e) => handleCertificationChange(index, e)}
              />
              <button
                className="add-project-btn"
                onClick={() => saveEdit(index)}
              >
                Save
              </button>
            </>
          ) : (
            // View mode
            <>
              <input type="text" value={certification.courseName} readOnly />
              <input
                type="text"
                value={certification.certificateLink}
                readOnly
              />
              <input type="text" value={certification.provider} readOnly />
              <input
                type="text"
                value={certification.completionDate}
                readOnly
              />

              <div className="form-card-buttons">
                <button
                  className="add-project-btn"
                  onClick={() => startEditing(index)}
                >
                  Edit
                </button>
                <button
                  className="add-project-btn"
                  onClick={() => deleteCertification(index)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
      {certifications.length < 4 && (
      <div className="certification-entry">
        <input
          type="text"
          placeholder="Course Name"
          name="courseName"
          onChange={handleNewCertificationChange}
          value={newCertification.courseName}
        />
        <input
          type="text"
          placeholder="Certificate Link"
          name="certificateLink"
          onChange={handleNewCertificationChange}
          value={newCertification.certificateLink}
        />
        <input
          type="text"
          placeholder="Provider"
          name="provider"
          onChange={handleNewCertificationChange}
          value={newCertification.provider}
        />
        <input
          type="text"
          placeholder="Completion Date"
          name="completionDate"
          onChange={handleNewCertificationChange}
          value={newCertification.completionDate}
        />
      
      <button onClick={addCertification} className="add-project-btn">
        + Add Certification
      </button>
    </div> )}
    </div>
  );
};

export default Certifications;