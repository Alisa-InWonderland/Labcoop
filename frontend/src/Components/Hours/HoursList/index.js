import React from "react";
import "./style.css"
import {HoursListItem} from "../HoursListItem";
import {Link} from "react-router-dom";



export function HoursList({projects}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    function checkHorasTrabajadoras(projects){
        return projects.find(item => item.horasTrabajadoras.length === 0);
    }

    return (
        <div className="table-container">
            <section className='reservesList'>
                <h1 className="reservesList-title">Horas trabajadas</h1>

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
                            <th className='reserva-th'>ASIGNADAS</th>
                            <th className='reserva-th'>EJECUTADAS</th>
                            <th className='reserva-th'>PENDIENTES</th>
                            <th className='reserva-th'>PRECIO/HORA</th>
                            <th className='reserva-th'>TOTAL</th>
                        </tr>

                        {checkHorasTrabajadoras(projects) ? <tr><td colSpan="9">No hay horas trabajadas</td></tr>

                            : projects.filter(project => project.horasTrabajadoras.length !== 0).map((project) => {
                            if (
                                project.name.trabajador.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <HoursListItem key={project.id} project={project}/>;
                            }
                            if (
                                project.code.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <HoursListItem key={project.id} project={project}/>;
                            }

                            return "";
                        })
                        }

                    </table>

                </div>

            </section>

        </div>
    );
}

