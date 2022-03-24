import React from "react";
import {Link} from "react-router-dom";

export function FacturasEmitidasTable({project}){
    return <table className="factura-emitida-table">
        <thead>
            <table >
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
            </table>
        </thead>
        <tbody>
        {project.facturasRecibidas.map( factura => <tr className='factura-emitida-table-row'>

                <td className="factura-emitida-td">{project.code}</td>
                <td className="factura-emitida-td">{project.name}</td>
                <td className="factura-emitida-td num-factura">{factura.numFactura}
                    <Link
                        to={`/facturas-emitidas/${id}`}
                        state={{data: project}}>
                        {factura.numFactura}
                    </Link>
                </td>
                <td className="factura-emitida-td">{factura.fecha}</td>
                <td className="factura-emitida-td">{factura.client}</td>
                <td className="factura-emitida-td">{factura.importe}</td>
                <td className="factura-emitida-td">{factura.iva}</td>
                <td className="factura-emitida-td">{factura.total}</td>
                <td className="factura-emitida-td">{factura.cobrado}</td>
            </tr>
            )
            }

        </tbody>
    </table>;

}