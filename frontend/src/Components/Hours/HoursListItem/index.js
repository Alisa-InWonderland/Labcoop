import React from "react";
import {Link} from "react-router-dom";
import "./style.css"




export function HorasList({project},{horasTrabajadoras}) {

    const { id, code, name, client } = project;
    const { trabajador, socias, numHorasAsignadas, numHorasEjecutadas, numHorasPendientes, precioHora, donePrice } = horasTrabajadoras;

    return (
        horasTrabajadoras.map( horas =>
        <tr className='reserva-table-row'>

            <td className="reserva-td">{code}</td>
            <td className="reserva-td name">
                <Link
                to={`/projects/${id}`} {`/horasTrabajadoras/${id}`}
                state={{data: project}}
                >   {name || 'no name'}
                    {horas.horasTrabajadoras}
                </Link>
            </td>

            <td className="reserva-td">{client}</td>
            <td className="reserva-td">{trabajador}</td>
            <td className="reserva-td">{socias}</td>
            <td className="reserva-td">{numHorasAsignadas}</td>
            <td className="reserva-td">{numHorasEjecutadas}</td>
            <td className="reserva-td">{numHorasPendientes}</td>
            <td className="reserva-td">{precioHora}</td>
            <td className="reserva-td">{donePrice}</td>
        </tr>

        ));


}

