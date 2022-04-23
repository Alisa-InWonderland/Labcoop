import React from "react";
import "./style.css"
import {HoursListItem} from "../HoursListItem";
import {Link} from "react-router-dom";



export function HoursList({projects}) {

    const [state, setState] = React.useState({filter: ""});
    const tableTitles = ['Código Proyecto', 'Nombre Proyecto', 'Cliente', 'Trabajador', 'Socia', 'Horas asignadas', 'Horas ejecutadas', 'Horas pendientes', 'Precio hora', 'Total'];

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    function checkHorasTrabajadoras(projects){
        const horasExists = projects.find(item => item.horasTrabajadoras.length === 0);
        return horasExists === undefined;
    }

    return (
        <div className="table-container">
            <section className='horas-trabajadoras-List'>
                <h1 className="horas-trabajadoras-List-title">Horas trabajadas</h1>

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

                    <table className="horas-trabajadoras-table">

                        <tr className='horas-trabajadoras-table-title'>
                            {tableTitles.map((item, index) =>  <th className='horas-trabajadoras-th' key={index}>{item}</th>)}
                            {/*<th className='horas-trabajadoras-th'>Código Proyecto</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Nombre Proyecto</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Cliente</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Trabajador</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Socia</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Horas asignadas</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Horas ejecutadas</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Horas pendientes</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Precio hora</th>*/}
                            {/*<th className='horas-trabajadoras-th'>Total</th>*/}
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

