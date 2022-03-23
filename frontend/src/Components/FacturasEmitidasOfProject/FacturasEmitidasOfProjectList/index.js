import React from "react";
import "./style.css"
import {FacturasEmitidasOfProjectListItem} from "../FacturasEmitidasOfProjectListItem/index";
import {Link, useLocation} from "react-router-dom";



export function FacturasEmitidasOfProjectList() {


    const [state, setState] = React.useState({filter: ""});

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }

    const location = useLocation();
    const data =  location.state.data;

    function checkFacturaEmitida(data) {

        const facturaEmitidaExist = data.facturaEmitida !== null;
        return facturaEmitidaExist === undefined;

     }



    return (
        <div className="table-container">
            <section className='reservesList'>
                <h1 className="reservesList-title">Facturas Emitidas</h1>

                <div className="barra-de-busqueda-container">
                    <input
                        className="barra-de-busqueda"
                        name="project"
                        type="text"
                        onChange={getData}
                        placeholder="Busca un proyecto"
                    />

                        <button className="btn-orange">
                            <Link className="btn-orange-link" to='/facturas-emitidas/new'>Nueva factura</Link>
                        </button>


                </div>

                <div className='tablelist'>

                    <table className="factura-emitida-table">

                        <tr className='factura-emitida-table-title'>
                            <th className='factura-emitida-th'>Código</th>
                            <th className='factura-emitida-th'>Nombre Proyecto</th>
                            <th className='factura-emitida-th'>Nº Factura</th>
                            <th className='factura-emitida-th'>Fecha</th>
                            <th className='factura-emitida-th'>Cliente</th>
                            <th className='factura-emitida-th'>Importe</th>
                            <th className='factura-emitida-th'>IVA</th>
                            <th className='factura-emitida-th'>TOTAL</th>
                            <th className='factura-emitida-th'>Cobrado</th>
                        </tr>

                        {checkFacturaEmitida(data) ? <tr><td colSpan="9">No hay facturas emitidas</td></tr>

                        : data.map((project) => {

                            if (
                                project.code.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                                ) {
                                return <FacturasEmitidasOfProjectListItem key={project.id} project={project}/>;
                                }

                            if (
                                project.name.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <FacturasEmitidasOfProjectListItem key={project.id} project={project}/>;
                            }

                            if (
                                project.client.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <FacturasEmitidasOfProjectListItem key={project.id} project={project}/>;
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

