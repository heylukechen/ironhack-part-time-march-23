import Navbar from './components/Navbar';
import HomePage from './pages/HomePageWithNavigate';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import projectsData from './projects-data.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
          <Route path='/' element={<HomePage welcome={"Lloyd Chambrier"} />} />
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/projects' element={<ProjectsPage projectsData={projectsData} />}/>
          <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
