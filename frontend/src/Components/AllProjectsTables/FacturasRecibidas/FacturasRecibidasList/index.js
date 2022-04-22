import React from "react";
import "./style.css"
import {FacturasRecibidasListItem} from "../FacturasRecibidasListItem";
import {Link} from "react-router-dom";



export function FacturasRecibidasList({projects}) {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    function checkFacturaRecibida(projects) {
        const facturaRecibidaExist = projects.find(item => item.facturasRecibidas.length === 0);
        return facturaRecibidaExist === undefined;
    }


    return (
        <div className="table-container">
            <section className='facturas-recibidas-list'>
                <h1 className="facturas-recibidas-list-title">Facturas Recibidas</h1>

                <div className="barra-de-busqueda-container-facturasR">
                    <input
                        className="barra-de-busqueda"
                        name="project"
                        type="text"
                        onChange={getData}
                        placeholder="Busca un proyecto"
                    />

                </div>

                <div className='tablelist'>

                    <table className="facturas-recibidas-table">

                        <tr className='facturas-recibidas-table-title'>
                            <th className='facturas-recibidas-th'>Código Proyecto
                            </th>
                            <th className='facturas-recibidas-th'>Nombre Proyecto</th>
                            <th className='facturas-recibidas-th'>Tipo gasto
                            </th>
                            <th className='facturas-recibidas-th'>Nº Factura
                            </th>
                            <th className='facturas-recibidas-th'>Fecha</th>
                            <th className='facturas-recibidas-th'>Proveedor
                            </th>
                            <th className='facturas-recibidas-th'>Importe</th>
                            <th className='facturas-recibidas-th'>IVA</th>
                            <th className='facturas-recibidas-th'>IRPF</th>
                            <th className='facturas-recibidas-th'>TOTAL</th>
                            <th className='facturas-recibidas-th'>Pagado
                            </th>
                        </tr>


                        {checkFacturaRecibida(projects) ? <tr><td colSpan="9">No hay facturas recibidas</td></tr>

                            : projects.filter(project => project.facturasRecibidas.length !== 0).map((project) => {

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

