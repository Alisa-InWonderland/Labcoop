import React from "react";
import "./style.css"
import {HoursListItem} from "../Hours";
import {Link} from "react-router-dom";



export function HoursListItem({projects},{horasTrabajadoras}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    function checkHorasTrabajadoras(horasTrabajadoras){
        const projectHours = projects.find(item => item.horasTrabajadoras.length === 0);
        const horasTrabajadorasExist = horasTrabajadoras.find(item => item.horasTrabajadoras.length === 0);
        return horasTrabajadorasExist + projectHours === undefined;
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

                        <button className="btn-orange">
                            <Link className="btn-orange-link" to='/projects/new'>Nuevo proyecto</Link>
                        </button>


                </div>

                <div className='tablelist'>

                    <table className="reserva-table">

                        <tr className='reserva-table-title'>
                            <th className='reserva-th'>CODI</th>
                            <th className='reserva-th'>NOM</th>
                            <th className='reserva-th'>TRABAJADORAS</th>
                            <th className='reserva-th'>SOCIAS</th>
                            <th className='reserva-th'>ASIGNADAS</th>
                            <th className='reserva-th'>EJECUTADAS</th>
                            <th className='reserva-th'>PENDIENTES</th>
                            <th className='reserva-th'>PRECIO/HORA</th>
                            <th className='reserva-th'>TOTAL</th>


                        </tr>

                        {checkHorasTrabajadoras(horasTrabajadoras) ? <tr><td colSpan="9">No hay horas trabajadas</td></tr>

                            : projects.filter(horasTrabajadoras => horasTrabajadoras.numHorasEjecutadas.length !== 0).map((horasTrabajadoras) => {
                            if (
                                horasTrabajadoras.trabajador.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <HorasTrabajadorasListItem key={horasTrabajadoras.id} project={project}/>;
                            }
                            if (
                                horasTrabajadoras.client.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <HorasTrabajadorasListItem key={project.id} project={project}/>;
                            }
                            if (
                                horasTrabajadoras.numHorasEjecutadas.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <HorasTrabajadorasListItem key={project.id} project={project}/>;
                            }
                            if (
                                horasTrabajadoras.numHorasPendientes.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <PHorasTrabajadorasListItem key={project.id} project={project}/>;
                            }
                            if (
                                horasTrabajadoras.numHorasAsignadas.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <HorasTrabajadorasListItem key={project.id} project={project}/>;
                            }
                            if (
                                horasTrabajadoras.precioHora.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <HorasTrabajadorasListItem key={project.id} project={project}/>;
                            }
                            if (
                                project.name.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <ProjectListItem key={project.id} project={project}/>;
                            }
                            if (
                                project.status.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <ProjectListItem key={project.id} project={project}/>;
                            }
                            if (
                                project.comments.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <ProjectListItem key={project.id} project={project}/>;
                            }
                            if (
                                project.area.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <ProjectListItem key={project.id} project={project}/>;
                            }

                            return "";
                        })}}

                    </table>

                </div>

            </section>

        </div>
    );
}

