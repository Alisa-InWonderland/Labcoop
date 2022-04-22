import './App.css';
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {getProjects} from "./Services/getProjects";
import {API_URL} from "./Services/settings";
import {FormTabs} from "./Components/ProjectDetails/Forms/FormTabs/index";
import Sidebar from "./Components/Sidebar/index";
import {FacturasEmitidasList} from "./Components/AllProjectsTables/FacturasEmititdas/FacturasEmitidasList";
import {FacturaEmitidaForm} from "./Components/ProjectDetails/Forms/FacturaEmitidaForm/index";
import {FacturaRecibidaForm} from "./Components/ProjectDetails/Forms/FacturaRecibidaForm/index";
import {FacturasRecibidasList} from "./Components/AllProjectsTables/FacturasRecibidas/FacturasRecibidasList";
import {HoursList} from "./Components/AllProjectsTables/Hours/HoursList";
import {getFacturasR} from "./Services/getFacturasR";
import {getFacturasE} from "./Services/getFacturasE";
import {getHours} from "./Services/getHours";
import {HorasForm} from "./Components/ProjectDetails/Forms/HorasForm";
import {ProjectList} from "./Components/AllProjectsTables/Projects/ProjectList";
import {ProjectForm} from "./Components/ProjectDetails/Forms/ProjectForm";


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

     useEffect(() => {
         if (requiresUpdate) {
             getFacturasR()
                 .then(setProjects)
                 .then(_ => setRequiresUpdate(false));
        }
     }, [requiresUpdate])

    useEffect(() => {
        if (requiresUpdate) {
            getHours()
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
      <div className="App" id="grid">

          <Sidebar/>

            <main className="main" id= "areaB">

              <Routes>
                  <Route path="/projects" element={<ProjectList projects={projects} />}/>
                  <Route path="/projects/:id" element={<FormTabs addProject={addProject} deleteProject={deleteProject}/>}/>
                  <Route path="/projects/new" element={<ProjectForm addProject={addProject} deleteProject={deleteProject}/>}/>
                  <Route path="/facturas-recibidas" element={<FacturasRecibidasList projects={projects}/>}/>
                  <Route path="/facturas-recibidas/:id" element={<FacturaRecibidaForm addProject={addProject} projects={projects}/>}/>
                  <Route path="/facturas-recibidas/new" element={<FacturaRecibidaForm addProject={addProject} />}/>
                  <Route path="/facturas-emitidas" element={<FacturasEmitidasList projects={projects}/>}/>
                  <Route path="/facturas-emitidas/:id" element={<FacturaEmitidaForm addProject={addProject} />}/>
                  <Route path="/facturas-emitidas/new" element={<FacturaEmitidaForm addProject={addProject} />}/>
                  <Route path="/horas" element={<HoursList projects={projects}/>}/>
                  <Route path="/horas/:id" element={<HorasForm addProject={addProject} />}/>
                  <Route path="/horas/new" element={<HorasForm addProject={addProject} />}/>
              </Routes>

            </main>
      </div>
  );
}

export default App;
