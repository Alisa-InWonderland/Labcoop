import React from "react";
import {Link} from "react-router-dom";
import "./style.css";




export function HoursListItem({project}) {

    const { id, code, name, client, horasTrabajadoras } = project;

    return (
        horasTrabajadoras.map( hora =>
        <tr className='reserva-table-row'>
            <td className="reserva-td">{code}</td>
            <td className="reserva-td">{name}</td>
            <td className="reserva-td">{client}</td>
            <td className="reserva-td">{hora.trabajador}</td>
            <td className="reserva-td">{hora.numHorasAsignadas}</td>
            <td className="reserva-td">{hora.numHorasEjecutadas}</td>
            <td className="reserva-td">{hora.numHorasPendientes}</td>
            <td className="reserva-td">{hora.precioHora}</td>
            <td className="reserva-td">{hora.donePrice}</td>
        </tr>

        ));


}

