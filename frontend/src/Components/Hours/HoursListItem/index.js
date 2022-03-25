import React from "react";
import {Link} from "react-router-dom";
import "./style.css";




export function HoursListItem({project}) {

    const { code, name, client, horasTrabajadoras } = project;

    return (
        horasTrabajadoras.map( horasTrabajador =>
        <tr className='reserva-table-row'>
            <td className="reserva-td">{code}</td>
            <td className="reserva-td">{name}</td>
            <td className="reserva-td">{client}</td>
            <td className="reserva-td">{horasTrabajador.trabajador}</td>
            <td className="reserva-td">{horasTrabajador.socias}</td>
            <td className="reserva-td">{horasTrabajador.numHorasAsignadas}</td>
            <td className="reserva-td">{horasTrabajador.numHorasEjecutadas}</td>
            <td className="reserva-td">{horasTrabajador.numHorasPendientes}</td>
            <td className="reserva-td">{horasTrabajador.precioHora}</td>
            <td className="reserva-td">{horasTrabajador.donePrice}</td>
        </tr>

        ));


}

