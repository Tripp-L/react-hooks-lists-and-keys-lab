import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> 
      {/* Map over the projects array and render a ProjectItem component for each project */}
        {projects.map((project) => (
          <ProjectItem
            key={project.id} //Using the id of the project as the key prop
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />  
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
