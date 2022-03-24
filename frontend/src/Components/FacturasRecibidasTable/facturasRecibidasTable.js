import React from "react";

export function FacturasRecibidasTable({project}) {
    return <table>
        <thead>
        <tr className='facturas-recibidas-table-title'>
            <th className='facturas-recibidas-th'>Codigo Proyecto
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
        {project.facturasRecibidas.map( factura => <tr>
            <td className='facturas-recibidas-td'>{project.code}
            </td>
            <td className='facturas-recibidas-td'>{project.name}</td>
            <td className='facturas-recibidas-td'>{factura.expenseType} </td>
            {/*<td className='facturas-recibidas-td'>Nº Factura*/}
            {/*</td>*/}
            {/*<td className='facturas-recibidas-td'>Fecha</td>*/}
            {/*<td className='facturas-recibidas-td'>Proveedor*/}
            {/*</td>*/}
            {/*<td className='facturas-recibidas-td'>Importe</td>*/}
            {/*<td className='facturas-recibidas-td'>IVA</td>*/}
            {/*<td className='facturas-recibidas-td'>IRPF</td>*/}
            {/*<td className='facturas-recibidas-td'>TOTAL</td>*/}
            {/*<td className='facturas-recibidas-td'>Pagado*/}
            {/*</td>*/}
        </tr>)}
        </tbody>

    </table>;
}