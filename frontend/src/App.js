import './App.css';

import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {getProjects} from "./Services/getProjects";
import {API_URL} from "./Services/settings";
import {ProjectList} from "./Components/Projects/ProjectList/index";
import {GeneralForm} from "./Components/GeneralForm/index";
import {ProjectForm} from "./Components/ProjectForm/index";
// import {Menu} from "./Components/Menu/index"
import Sidebar from "./Components/Sidebar/index";
import {FacturasEmitidasList} from "./Components/FacturasEmitidas/FacturasEmitidasList";
import {FacturaEmitidaForm} from "./Components/FacturaEmitidaForm/index";
import {FacturasRecibidasList} from "./Components/FacturasRecibidas/FacturasRecibidasList";
import {HorasList, HoursList} from "./Components/Hours/HoursList";
import {getFacturasR} from "./Services/getFacturasR";
import {getFacturasE} from "./Services/getFacturasE";

function App() {

  const [projects, setProjects] = useState([]);
  const [facturaE, setFacturaE] = useState([]);
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

     useEffect(() => {
         if (requiresUpdate) {
             getFacturasR()
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

    // const addFacturaE = (project) => {
    //     return fetch(API_URL,
    //         {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify(project)
    //         }
    //     ).then(_ => setRequiresUpdate(true))
    //
    // }

  const deleteProject = (id) => {
    fetch(`${API_URL}/delete/${id}`,
        {
          method: 'DELETE'
        }
    ).then(_ => setRequiresUpdate(true))

  }



  return (
      <div className="App" id="grid">

       <Sidebar/>

        <main className="main" id= "areaB">
          <Routes>

            <Route path="/projects" element={<ProjectList projects={projects} />}/>
            <Route path="/facturas-recibidas" element={<FacturasRecibidasList projects={projects}/>}/>
            <Route path="/facturas-emitidas" element={<FacturasEmitidasList projects={projects}/>}/>
            <Route path="/horas" element={<HoursList projects={projects}/>}/>
            <Route path="/projects/:id" element={<ProjectForm addProject={addProject} deleteProject={deleteProject}/>}/>
            {/*<Route path="/projects/new" element={<GeneralForm addProject={addProject} deleteProject={deleteProject}/>}/>*/}
            <Route path="/facturas-emitidas/:id" element={<FacturaEmitidaForm addProject={addProject} />}/>
            <Route path="/facturas-emitidas/new" element={<FacturaEmitidaForm addProject={addProject} />}/>
          </Routes>
        </main>

      </div>
  );
}

export default App;
