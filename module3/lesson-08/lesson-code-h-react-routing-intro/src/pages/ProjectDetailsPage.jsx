import projectsData from './../projects-data.json';
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
 
function ProjectDetailsPage(props) {
    const [project, setProject] = useState(null);
  //1. Add a state variable to contain the project details
  // 2. Add a useEffect that is going to find the project from our list of projects using the projectId
  const { projectId } = useParams();
  console.log('projectId -->', projectId);

  useEffect(() => {
    console.log(projectsData)
    const oneProject = projectsData.find((project) => project._id === projectId)
    console.log('oneProject', oneProject)

    if(oneProject) {
        setProject(oneProject)
    }
    
  }, [projectId])
  
  return (
    <div>
      <h1>Project Details</h1>

      {!project && <h3>Project not found!</h3>}
      {project && <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                </div>}
      
      <Link to="/projects">Back</Link>
    </div>
  )
}
 
export default ProjectDetailsPage;