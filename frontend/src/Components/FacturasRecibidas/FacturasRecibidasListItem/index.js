import React from "react";
import {Link} from "react-router-dom";
import "./style.css"




export function FacturasRecibidasListItem({project}) {

    const { code, name } = project;
    const { id, expenseType, numInvoices, date, supplier, cost, iva, irpf, total, paidOut } = project.facturaRecibida;


    return (
        <tr className='factura-recibida-table-row'>

            <td className="factura-recibida">{code}</td>
            <td className="factura-recibida">{name}</td>
            <td className="reserva-td factura-recibida-num">
                <Link
                to={`/projects/${id}`}
                state={{data: project}}
                >
                {numInvoices}
                </Link>
            </td>
            <td className="factura-recibida">{expenseType}</td>
            <td className="factura-recibida">{numInvoices}</td>
            <td className="factura-recibida">{date}</td>
            <td className="factura-recibida">{supplier}</td>
            <td className="factura-recibida">{cost}</td>
            <td className="factura-recibida">{iva}</td>
            <td className="factura-recibida">{irpf}</td>
            <td className="factura-recibida">{total}</td>
            <td className="factura-recibida">{paidOut}</td>

        </tr>

    );

}

