import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import QueryStringExample from "./pages/QueryStringExample";
import { Routes, Route } from "react-router-dom";

import projectsData from './projects-data.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <HomePageWithNavigate /> } />
        <Route path="/about" element={ <AboutPage /> } />
        
        <Route
          path="/projects"
          element={ <ProjectsPage projects={projectsData} /> }
        />

        <Route path="/projects/:projectId" element={<ProjectDetailsPage />}/>
        <Route path="/example" element={ <QueryStringExample /> } />
        
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;
