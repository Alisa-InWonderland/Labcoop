import './App.css';
/*import  { Menu } from './Components/Menu/index'*/
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {getProjects} from "./Services/getProjects";
import {API_URL} from "./Services/settings";
import {ProjectList} from "./Components/ProjectList/index";
import {ProjectForm} from "./Components/ProjectForm/index";


function App() {

  const [projects, setProjects] = useState([]);
  const [requiresUpdate, setRequiresUpdate] = useState(true);
  /*const [loggedIn, setLoggedIn] = useState(false)*/


  useEffect(() => {
    if (requiresUpdate) {
      getProjects()
          .then(setProjects)
          .then(_ => setRequiresUpdate(false));
    }
  }, [requiresUpdate])


  const addProject = (project) => {
    return fetch(API_URL,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(project)
        }
    ).then(_ => setRequiresUpdate(true))

  }

  const deleteProject = (id) => {
    fetch(`${API_URL}/delete/${id}`,
        {
          method: 'DELETE'
        }
    ).then(_ => setRequiresUpdate(true))

  }


  return (
      <div className="App">
        <main className="main">
          <Routes>
            <Route path="/projects" element={<ProjectList projects={projects} />}/>
            <Route path="/projects/:id" element={<ProjectForm addProject={addProject} deleteProject={deleteProject}/>}/>
          </Routes>
        </main>
      </div>
  );
}

export default App;