import React, { useEffect, useState } from "react";

const Achievements = ({ formData, updateFormData }) => {
  const [achievements, setAchievements] = useState(formData["achievements"]);
  const [newAchievement, setNewAchievement] = useState({
    name: "",
    year: "",
    description: "",
    image: "",
  });
  const [editingIndex, setEditingIndex] = useState(null); // Track which achievement is being edited

  useEffect(() => {
    console.log("Achievements Data:", achievements);
  }, [achievements]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...achievements, [name]: value };
    setAchievements(updatedData);
    updateFormData("achievements", updatedData);
  };

  const handleAchievementChange = (e) => {
    const { name, value } = e.target;
    if (name === "description" && value.split(" ").length > 30) return;
    setNewAchievement((prev) => ({ ...prev, [name]: value }));
  };

  const deleteAchievement = (index) => {
    const updatedAchievements = achievements.achievements.filter(
      (achievement, i) => i !== index
    );
    setAchievements({ ...achievements, achievements: updatedAchievements });
    updateFormData("achievements", { ...achievements, achievements: updatedAchievements });

    // setAchievements((prev) => ({
    //   ...prev,
    //   achievements: updatedAchievements,
    // }));

    // updateFormData("achievements", {
    //   ...achievements,
    //   achievements: updatedAchievements,
    // });
  };

  const addAchievement = () => {
    if (!newAchievement.name || !newAchievement.year || !newAchievement.description ) {
      alert("Please fill in all fields before adding.");
      return;
    }
    if (achievements.achievements.length >= 3) {
      alert("You can add up to 3 achievements only.");
      return;
    }


    const updatedAchievements = {
      ...achievements,
      achievements: [...achievements.achievements, newAchievement],
    };

    setAchievements(updatedAchievements);
    updateFormData("achievements", updatedAchievements);

    // Reset input fields
    setNewAchievement({ name: "", year: "", description: "", image: "" });
  };

  const startEditing = (index) => {
    setEditingIndex(index); // Set the index of the achievement being edited
  };

  const handleEditChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "description" && value.split(" ").length > 30) return;
    const updatedAchievements = achievements.achievements.map(
      (achievement, i) =>
        i === index ? { ...achievement, [name]: value } : achievement
    );

    setAchievements((prev) => ({
      ...prev,
      achievements: updatedAchievements,
    }));
  };

  const saveEdit = (index) => {
    setEditingIndex(null); // Exit edit mode
    updateFormData("achievements", achievements); // Update the form data
  };

  return (
    
    <div className="section-container">
      
      <div className="leetcode">
        <input
          type="text"
          placeholder="LeetCode Rating"
          onChange={handleChange}
          name="leetcoderating"
          value={achievements.leetcoderating}
        />
        <input
          type="text"
          placeholder="LeetCode Profile Link"
          onChange={handleChange}
          name="leetcodeprofileLink"
          value={achievements.leetcodeprofileLink} 
        />
        <input
          type="text"
          placeholder="LeetCode Max Rating"
          onChange={handleChange}
          name="leetcodemaxRating"
          value={achievements.leetcodemaxRating} 
        />
      </div>

      {achievements.achievements.map((achievement, index) => (
        <div key={index} className="project-entry">
          {editingIndex === index ? (
            // Edit mode
            <>
              <input
                type="text"
                placeholder="Achievement name"
                name="name"
                value={achievement.name}
                onChange={(e) => handleEditChange(e, index)}
              />
              <input
                type="text"
                placeholder="Year of achievement"
                name="year"
                value={achievement.year}
                onChange={(e) => handleEditChange(e, index)}
              />
              <input
                type="text"
                placeholder="Image link for achievement"
                name="image"
                value={achievement.image}
                onChange={(e) => handleEditChange(e, index)}
              />
              <input
                type="text"
                placeholder="Description of achievement"
                name="description"
                value={achievement.description}
                onChange={(e) => handleEditChange(e, index)}
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
              <input type="text" value={achievement.name} readOnly />
              <input type="text" value={achievement.year} readOnly />
              <input type="text" value={achievement.image} readOnly />
              <input value={achievement.description} readOnly />
              <div className="form-card-buttons">
                <button
                  className="add-project-btn"
                  onClick={() => startEditing(index)}
                >
                  Edit
                </button>
                <button
                  className="add-project-btn"
                  onClick={() => deleteAchievement(index)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
{achievements.achievements.length < 3 && (
  <form>
      <div className="project-entry">
        <input
          type="text"
          placeholder="Achievement name"
          name="name"
          onChange={handleAchievementChange}
          value={newAchievement.name}
        />
        <input
          type="text"
          placeholder="Year of achievement"
          name="year"
          onChange={handleAchievementChange}
          value={newAchievement.year}
        />
        <input
          type="text"
          placeholder="Image link for achievement"
          name="image"
          onChange={handleAchievementChange}
          value={newAchievement.image}
        />
        <input
          type="text"
          placeholder="Description of achievement"
          name="description"
          onChange={handleAchievementChange}
          value={newAchievement.description}
        />
      </div> </form>)}
      <button onClick={addAchievement} className="add-project-btn">
        + Add Achievement
      </button>
    </div>
  );
};

export default Achievements;