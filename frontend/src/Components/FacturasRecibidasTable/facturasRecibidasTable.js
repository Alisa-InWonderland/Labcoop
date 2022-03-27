import React from "react";
import {Link, useParams} from "react-router-dom";

export function FacturasRecibidasTable({project}) {

    return <>
        <div className="btn-facturaE-wrapper">
        <button className="btn-orange btn-facturaE">
            <Link
                className="btn-link-facturaE"
                to={`/facturas-recibidas/new`}
                state={{data: project}}>
                Nueva factura
            </Link>
        </button>
        </div>

        <table>
            <thead>
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
            </thead>
            <tbody>
            {project.facturasRecibidas.map(factura => <tr>
                    <td className='facturas-recibidas-td'>{project.code}
                    </td>
                    <td className='facturas-recibidas-td'>{project.name}</td>
                    <td className='facturas-recibidas-td'>{factura.expenseType} </td>
                    <td className='facturas-recibidas-td num-factura'>

                        <Link
                            to={`/facturas-recibidas/${factura.id}`}
                            state={{data: project}}
                        >
                            {factura.numInvoices}
                        </Link>
                    </td>
                    <td className='facturas-recibidas-td'>{factura.date}</td>
                    <td className='facturas-recibidas-td'>{factura.supplier}
                    </td>
                    <td className='facturas-recibidas-td'>{factura.cost}</td>
                    <td className='facturas-recibidas-td'>{factura.iva}</td>
                    <td className='facturas-recibidas-td'>{factura.irpf}</td>
                    <td className='facturas-recibidas-td'>{factura.total}</td>
                    <td className='facturas-recibidas-td'>{factura.paidOut}
                    </td>
                </tr>
            )
            }
            </tbody>

        </table>
    </>
}