import React from "react";
import "./style.css"
import {FacturasEmitidasListItem} from "../FacturasEmitidasListItem/index";
import {Link} from "react-router-dom";



export function FacturasEmitidasList({projects}) {


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

                        <button className="btn-orange">
                            <Link className="btn-orange-link" to='/projects/new'>Nuevo proyecto</Link>
                        </button>


                </div>

                <div className='tablelist'>

                    <table className="reserva-table">

                        <tr className='reserva-table-title'>
                            <th className='reserva-th'>Código</th>
                            <th className='reserva-th'>Nombre Proyecto</th>
                            <th className='reserva-th'>Nº Factura</th>
                            <th className='reserva-th'>Fecha</th>
                            <th className='reserva-th'>Cliente</th>
                            <th className='reserva-th'>Importe</th>
                            <th className='reserva-th'>IVA</th>
                            <th className='reserva-th'>TOTAL</th>
                            <th className='reserva-th'>Cobrado</th>
                        </tr>

                        {projects.map((project) => {

                            if (
                                project.code.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <FacturasEmitidasListItem key={project.id} project={project}/>;
                            }

                            return "";
                        })}

                    </table>

                </div>

            </section>

        </div>
    );
}

