import React from "react";
import "./style.css"
import {ProjectListItem} from "../ProjectListItem/index";



export function ProjectList({projects, deleteProject}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    return (
        <div className="table-container">
            <section className='reservesList'>
                <h1 className="reservesList-title">Proyectos</h1>

                <div className="barra-de-busqueda-container">
                    <input
                        className="barra-de-busqueda"
                        name="project"
                        type="text"
                        onChange={getData}
                        placeholder="Busca un proyecto"
                    />

                </div>

                <div className='tablelist'>

                    <table className="reserva-table">

                        <tr className='reserva-table-title'>
                            <th className='reserva-th'>CODI PROJECTE</th>
                            <th className='reserva-th'>NOM PROJECTE</th>
                            <th className='reserva-th'>CLIENT</th>
                            <th className='reserva-th'>PERSONA COORDINADORA</th>
                            <th className='reserva-th'>ESTAT</th>
                            <th className='reserva-th'>TIPO</th>
                            <th className='reserva-th'>TAMAÑO</th>
                            <th className='reserva-th'>TARGET</th>
                            <th className='reserva-th'>MES INICI</th>
                            <th className='reserva-th'>MES FIN</th>
                        </tr>

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

                    </table>

                </div>

            </section>

        </div>
    );
}

