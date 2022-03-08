import './App.css';
/*import  { Menu } from './Components/Menu/index'*/
import {ProjectList} from "./Components/ProjectList/index";
import {ProjectForm} from "./Components/ProjectForm/index";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {getProjects} from "./Services/getProjects";
import {API_URL} from "./services/settings";


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


  const addExperience = (project) => {
    return fetch(API_URL,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(project)
        }
    ).then(_ => setRequiresUpdate(true))

  }

  const deleteExperience = (id) => {
    fetch(`http://localhost:8080/api/experiences/delete/${id}`,
        {
          method: 'DELETE'
        }
    ).then(_ => setRequiresUpdate(true))

  }


  return (
      <div className="App">
          {/*<Menu loggedIn={loggedIn} onLoginChange={(value) => setLoggedIn(value)}/>*/}
        <main className="main">
          <Routes>
            <Route path="/projects" element={<ProjectList loggedIn={loggedIn} experiences={experiences} deleteExperience={deleteExperience}/>}/>
            <Route path="/projects/:id" element={<ProjectForm addExperience={addExperience}/>}/>
          </Routes>
        </main>
      </div>
  );
}

export default App;