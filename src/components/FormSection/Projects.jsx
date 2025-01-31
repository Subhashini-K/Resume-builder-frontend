import React, { useEffect, useState } from "react";

const Projects = ({ formData, updateFormData }) => {
  const [projects, setProjects] = useState(formData["projects"]);
  const [newProject, setNewProject] = useState({
    name: "",
    github: "",
    tech: "",
    completion: "",
    description: "",
    tools: "",
  });
  const [editingIndex, setEditingIndex] = useState(null); // Track which project is being edited
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = projects.map((project, i) => {
      if (i === index) {
        return { ...project, [name]: value };
      }
      return project;
    });
    setProjects(updatedProjects);
    updateFormData("projects", updatedProjects);
  };

  const handleNewProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const addProject = () => {
    if (
      !newProject.name.trim() ||
      !newProject.github.trim() ||
      !newProject.tech.trim() ||
      !newProject.completion.trim() ||
      !newProject.description.trim() ||
      !newProject.tools.trim()
    ) {
      alert("All fields are required.");
      return;
    }

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    updateFormData("projects", updatedProjects);

    // Reset input fields
    setNewProject({
      name: "",
      github: "",
      tech: "",
      completion: "",
      description: "",
      tools: "",
    });
  };

  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    updateFormData("projects", updatedProjects);
  };

  const startEditing = (index) => {
    setEditingIndex(index); // Set the index of the project being edited
  };

  const saveEdit = (index) => {
    if (
      !projects[editingIndex].name.trim() ||
      !projects[editingIndex].github.trim() ||
      !projects[editingIndex].tech.trim() ||
      !projects[editingIndex].completion.trim() ||
      !projects[editingIndex].description.trim() ||
      !projects[editingIndex].tools.trim()
    ) {
      alert("All fields are required.");
      return;
    }
    setEditingIndex(null); // Exit edit mode
    updateFormData("projects", projects); // Update the form data
  };

  return (
    <div className="section-container">
      {projects.map((project, index) => (
        <div key={index} className="project-entry">
          {editingIndex === index ? (
            // Edit mode
            <>
              <input
                type="text"
                placeholder="Project Name"
                name="name"
                value={project.name}
                onChange={(e) => handleProjectChange(index, e)}
              />
              <input
                type="text"
                placeholder="GitHub Link"
                name="github"
                value={project.github}
                onChange={(e) => handleProjectChange(index, e)}
              />
              <input
                type="text"
                placeholder="Technologies Used"
                name="tech"
                value={project.tech}
                onChange={(e) => handleProjectChange(index, e)}
              />
              <input
                type="text"
                placeholder="Completion Date"
                name="completion"
                value={project.completion}
                onChange={(e) => handleProjectChange(index, e)}
              />
              <input
                placeholder="Project Description"
                name="description"
                value={project.description}
                onChange={(e) => handleProjectChange(index, e)}
              />
              <input
                type="text"
                placeholder="Tools Used"
                name="tools"
                value={project.tools}
                onChange={(e) => handleProjectChange(index, e)}
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
              <input type="text" value={project.name} readOnly />
              <input type="text" value={project.github} readOnly />
              <input type="text" value={project.tech} readOnly />
              <input type="text" value={project.completion} readOnly />
              <input type="text" value={project.description} readOnly />
              <input type="text" value={project.tools} readOnly />
              <div className="form-card-buttons">
                <button
                  className="add-project-btn"
                  onClick={() => startEditing(index)}
                >
                  Edit
                </button>
                <button
                  className="add-project-btn"
                  onClick={() => deleteProject(index)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      {projects.length < 3 && (
        <form>
          <div className="project-entry">
            <input
              type="text"
              placeholder="Project Name"
              name="name"
              onChange={handleNewProjectChange}
              value={newProject.name}
            />
            <input
              type="url"
              placeholder="GitHub Link"
              name="github"
              onChange={handleNewProjectChange}
              value={newProject.github}
            />
            <input
              type="text"
              placeholder="Technologies Used"
              name="tech"
              onChange={handleNewProjectChange}
              value={newProject.tech}
            />
            <input
              type="text"
              placeholder="Completion Date"
              name="completion"
              onChange={handleNewProjectChange}
              value={newProject.completion}
            />
            <input
              placeholder="Project Description"
              name="description"
              onChange={handleNewProjectChange}
              value={newProject.description}
            />
            <input
              type="text"
              placeholder="Tools Used"
              name="tools"
              onChange={handleNewProjectChange}
              value={newProject.tools}
            />
          </div>{" "}
        </form>
      )}
      {projects.length < 3 && (
        <button onClick={addProject} className="add-project-btn">
          + Add Project
        </button>
      )}
    </div>
  );
};

export default Projects;
