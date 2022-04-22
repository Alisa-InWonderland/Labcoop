import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

export function FacturasEmitidasTable({project}) {

    const isCobrado = () => project.facturaEmitida.cobrado ? 'Sí' : 'No';
    return <>
        <div className="btn-facturaE-wrapper">
        <button className="btn-orange btn-facturaE">
            <Link
                className="btn-link-facturaE"
                to={`/facturas-emitidas/new`}
                state={{data: project}}>
                Nueva factura
            </Link>
        </button>
        </div>

        <table>
            <thead>
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
            </thead>

            <tbody>
                <tr className='factura-emitida-table-row'>

                    <td className="factura-emitida-td">{project.code}</td>
                    <td className="factura-emitida-td">{project.name}</td>
                    <td className="factura-emitida-td num-factura">
                        <Link
                            to={`/facturas-emitidas/${project.facturaEmitida.id}`}
                            state={{data: project}}>
                            {project.facturaEmitida.numFactura}
                        </Link>
                    </td>
                    <td className="factura-emitida-td">{project.facturaEmitida.fecha}</td>
                    <td className="factura-emitida-td">{project.client}</td>
                    <td className="factura-emitida-td">{project.facturaEmitida.importe}</td>
                    <td className="factura-emitida-td">{project.facturaEmitida.iva}</td>
                    <td className="factura-emitida-td">{project.facturaEmitida.total}</td>
                    <td className="factura-emitida-td">{isCobrado()}</td>
                </tr>
        </tbody>
    </table>

    </>
}