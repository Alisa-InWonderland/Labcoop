import React from "react";
import "./style.css"
import {ProjectListItem} from "../ProjectListItem/index";



export function ProjectList({projects, deleteProject}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    return (
            <section className='experienceCatalog'>

                <h1 className="catalog-title">Proyectos</h1>

                <div className="barra-de-busqueda-container">
                    <input
                        className="barra-de-busqueda"
                        name="project"
                        type="text"
                        onChange={getData}
                        placeholder="Busca un proyecto"
                    />

                </div>

                <div className="container-card">
                    {projects.map((project) => {
                        if (
                            project.name.toLowerCase().indexOf(state.filter) >= 0 ||
                            state.filter.length === 0
                        ) {
                            return <ProjectListItem key={project.id} project={project}
                                                   deleteProject={deleteProject}/>;
                        }
                        if (
                            project.client.toLowerCase().indexOf(state.filter) >= 0 ||
                            state.filter.length === 0
                        ) {
                            return <ProjectListItem key={project.id} project={project}
                                                    deleteProject={deleteProject} />;
                        }

                        return "";
                    })}
                </div>

            </section>
    );
}

