import React from "react";
import "./style.css"
import {FacturasRecibidasListItem} from "../FacturasRecibidasListItem/index";
import {Link} from "react-router-dom";



export function FacturasRecibidasList({projects}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }


    function checkFacturaRecibida(projects) {

        //project.hasOwnProperty('facturaEmitida');

        const facturaRecibidaExist = projects.find(item => item.facturaRecibida !== null);
        return facturaRecibidaExist === undefined;

    }



    return (
        <div className="table-container">
            <section className='reservesList'>
                <h1 className="reservesList-title">Facturas Recibidas</h1>

                <div className="barra-de-busqueda-container">
                    <input
                        className="barra-de-busqueda"
                        name="project"
                        type="text"
                        onChange={getData}
                        placeholder="Busca un proyecto"
                    />

                    <button className="btn-orange">
                        <Link className="btn-orange-link" to='/projects/new'>Llegada de Factura</Link>
                    </button>


                </div>

                <div className='tablelist'>

                    <table className="facturas-recibidas-table">

                        <tr className='facturas-recibidas-table-title'>
                            <th className='facturas-recibidas-th'>Código</th>
                            <th className='facturas-recibidas-th'>Nombre Proyecto</th>
                            <th className='facturas-recibidas'>Nº Factura</th>
                            <th className='facturas-recibidas'>Fecha</th>
                            <th className='facturas-recibidas'>Cliente</th>
                            <th className='facturas-recibidas'>Importe</th>
                            <th className='facturas-recibidas'>IVA</th>
                            <th className='facturas-recibidas'>TOTAL</th>
                            <th className='facturas-recibidas'>Cobrado</th>
                        </tr>

                        {checkFacturaRecibida(projects) ? <tr><td colSpan="9">No hay facturas recibidas</td></tr>

                            : projects.filter(project => project.facturaRecibida !== null).map((project) => {

                                if (
                                    project.code.toLowerCase().indexOf(state.filter) >= 0 ||
                                    state.filter.length === 0
                                ) {
                                    return <FacturasRecibidasListItem key={project.id} project={project}/>;
                                }

                                if (
                                    project.name.toLowerCase().indexOf(state.filter) >= 0 ||
                                    state.filter.length === 0
                                ) {
                                    return <FacturasRecibidasListItem key={project.id} project={project}/>;
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

