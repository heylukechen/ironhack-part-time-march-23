import { useState, useEffect } from "react";
// import projectsData from "./../projects-data.json";
 
function ProjectsPage({ projectsData }) {
  const [projects, setProjects] = useState([]);
 
  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setProjects(projectsData);
  }, [projectsData]);
 
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, i) => {
       
          return (
            <div key={project.id} className={i%2 === 0 ? "redBackground" : "regularBackground"} >
             { project.name[0] === "T" ? <h3>{project.name}</h3> : <h2>{project.name.toUpperCase()}</h2>}
              <p>{project.technologies}</p>
            </div>
          );
      })}
    </div>
  );
}
 
export default ProjectsPage;