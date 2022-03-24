import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./style.css"


export function FacturasEmitidasOfProjectListItem({project}) {


    const { code, name, client} = project;
    const { id, numFactura, fecha, importe, iva, total, cobrado } = project.facturaEmitida;
    // const location = useLocation();
    // const data =  location.state;

    return (
        <tr className='factura-emitida-table-row'>


            <td className="factura-emitida-td">{code}</td>
            <td className="factura-emitida-td">{name}</td>
            <td className="factura-emitida-td num-factura">{numFactura}</td>
                {/*<Link*/}
                {/*to={`/facturas-emitidas/${id}`}*/}
                {/*state={{data: project}}>*/}

                {/*</Link>*/}

            <td className="factura-emitida-td">{fecha}</td>
            <td className="factura-emitida-td">{client}</td>
            <td className="factura-emitida-td">{importe}</td>
            <td className="factura-emitida-td">{iva}</td>
            <td className="factura-emitida-td">{total}</td>
            <td className="factura-emitida-td">{cobrado}</td>
        </tr>

    );

}

