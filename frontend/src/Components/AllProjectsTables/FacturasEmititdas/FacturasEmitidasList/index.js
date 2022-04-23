import React from "react";
import "./style.css"
import {FacturasEmitidasListItem} from "../FacturasEmitidasListItem";



export function FacturasEmitidasList({projects}) {


    const [state, setState] = React.useState({filter: ""});
    const tableTitles = ['Código Proyecto', 'Nombre Proyecto', 'Nº Factura', 'Fecha', 'Cliente', 'Importe', 'IVA', 'Total', 'Cobrado'];

    function getData(val) {
        setState({filter: val.target.value.toLowerCase()});
    }


    function checkFacturaEmitida(projects) {
        const facturaEmitidaExist = projects.find(item => item.facturaEmitida !== null);
        return facturaEmitidaExist === undefined;
     }


    return (
        <div className="table-container">
            <section className='reservesList'>
                <h1 className="reservesList-title">Facturas Emitidas</h1>

                <div className="barra-de-busqueda-container-facturasE">
                    <input
                        className="barra-de-busqueda"
                        name="project"
                        type="text"
                        onChange={getData}
                        placeholder="Busca un proyecto"
                    />

                </div>

                <div className='tablelist'>

                    <table className="factura-emitida-table">

                        <tr className='factura-emitida-table-title'>
                            {tableTitles.map((item, index) =>  <th className='factura-emitida-th' key={index}>{item}</th>)}
                        </tr>

                        {checkFacturaEmitida(projects) ? <tr><td colSpan="9">No hay facturas emitidas</td></tr>

                        : projects.filter(project => project.facturaEmitida !== null).map((project) => {

                            if (
                                project.code.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                                ) {
                                return <FacturasEmitidasListItem key={project.id} project={project}/>;
                                }

                            if (
                                project.name.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <FacturasEmitidasListItem key={project.id} project={project}/>;
                            }

                            if (
                                project.client.toLowerCase().indexOf(state.filter) >= 0 ||
                                state.filter.length === 0
                            ) {
                                return <FacturasEmitidasListItem key={project.id} project={project}/>;
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

