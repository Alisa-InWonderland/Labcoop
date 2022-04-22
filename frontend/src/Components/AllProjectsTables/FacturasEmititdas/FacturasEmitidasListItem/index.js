import React from "react";
import {Link} from "react-router-dom";
import "./style.css"


export function FacturasEmitidasListItem({project}) {


    const { code, name, client} = project;
    const { id, numFactura, fecha, importe, iva, total, cobrado } = project.facturaEmitida;

    return (
        <tr className='factura-emitida-table-row'>


            <td className="factura-emitida-td">{code}</td>
            <td className="factura-emitida-td">{name}</td>
            <td className="factura-emitida-td num-factura">
                <Link
                to={`/facturas-emitidas/${id}`}
                state={{data: project}}>
                {numFactura}
                </Link>
            </td>
            <td className="factura-emitida-td">{fecha}</td>
            <td className="factura-emitida-td">{client}</td>
            <td className="factura-emitida-td">{importe}</td>
            <td className="factura-emitida-td">{iva}</td>
            <td className="factura-emitida-td">{total}</td>
            <td className="factura-emitida-td">{cobrado}</td>
        </tr>

    );

}

