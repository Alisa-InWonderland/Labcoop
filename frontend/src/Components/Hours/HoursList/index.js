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
        const horasExists = projects.find(item => item.horasTrabajadoras.length === 0);
        return horasExists === undefined;
    }

    return (
        <div className="table-container">
            <section className='reservesList'>
                <h1 className="reservesList-title">Horas trabajadas</h1>

                <div className="barra-de-busqueda-container-hours">
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
                            <th className='reserva-th'>Código Proyecto</th>
                            <th className='reserva-th'>Nombre Proyecto</th>
                            <th className='reserva-th'>Cliente</th>
                            <th className='reserva-th'>Trabajador</th>
                            <th className='reserva-th'>Socia</th>
                            <th className='reserva-th'>Horas asignadas</th>
                            <th className='reserva-th'>Horas ejecutadas</th>
                            <th className='reserva-th'>Horas pendientes</th>
                            <th className='reserva-th'>Precio hora</th>
                            <th className='reserva-th'>Total</th>
                        </tr>

                        {checkHorasTrabajadoras(projects) ? <tr><td colSpan="9">No hay horas trabajadas</td></tr>

                            : projects.filter(project => project.horasTrabajadoras.length !== 0).map((project) => {
                            if (
                                project.name.toLowerCase().indexOf(state.filter) >= 0 ||
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

