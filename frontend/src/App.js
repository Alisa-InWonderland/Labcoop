import './App.css';

import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {getProjects} from "./Services/getProjects";
import {API_URL} from "./Services/settings";
import {ProjectList} from "./Components/Projects/ProjectList/index";
import {ProjectForm} from "./Components/ProjectForm/index";
// import {Menu} from "./Components/Menu/index"
import {Index} from "./Components/Sidebar";
import {FacturasEmitidasList} from "./Components/FacturasEmitidas/FacturasEmitidasList";
// import {FacturasRecibidasList} from "./Components/FacturasRecibidas/FacturasRecibidasList";
// import {HorasList} from "./Components/Hours/HoursList";
// import {getFacturasR} from "./Services/getFacturasR";
import {getFacturasE} from "./Services/getFacturasE";

function App() {

  const [projects, setProjects] = useState([]);
  const [requiresUpdate, setRequiresUpdate] = useState(true);


  useEffect(() => {
    if (requiresUpdate) {
      getProjects()
          .then(setProjects)
          .then(_ => setRequiresUpdate(false));
    }
  }, [requiresUpdate])

    useEffect(() => {
        if (requiresUpdate) {
            getFacturasE()
                .then(setProjects)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])
    //
    // useEffect(() => {
    //     if (requiresUpdate) {
    //         getFacturasR()
    //             .then(setFacturasR)
    //             .then(_ => setRequiresUpdate(false));
    //     }
    // }, [requiresUpdate])


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
       <Index/>
        <main className="main">
          <Routes>

            <Route path="/projects" element={<ProjectList projects={projects} />}/>
            {/*<Route path="/facturas-recibidas" element={<FacturasRecibidasList projects={projects} facturasR={facturasR}/>}/>*/}
              <Route path="/facturas-emitidas" element={<FacturasEmitidasList projects={projects}/>}/>
            {/*<Route path="/horas" element={<HorasList projects={projects} horas={horas}/>}/>*/}
            <Route path="/projects/:id" element={<ProjectForm addProject={addProject} deleteProject={deleteProject}/>}/>
            {/*<Route path="/facturas-emitidas/:id" element={<FacturaEmitidaForm addFacturaE={addFacturaE} deleteFacturaE={deleteFacturaE}/>}/>*/}
            <Route path="/projects/new" element={<ProjectForm addProject={addProject} deleteProject={deleteProject}/>}/>
          </Routes>
        </main>

      </div>
  );
}

export default App;