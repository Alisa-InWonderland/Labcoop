import React from "react";
import {Link} from "react-router-dom";
import "./style.css"




export function ProjectListItem({project}) {

    const { id, code, name, client, manager, status, area, type, size, target, startdate, enddate, comments } = project;


    return (
        <tr className='reserva-table-row'>

            <td className="reserva-td">{code}</td>
            <td className="reserva-td name">
                <Link
                to={`/projects/${id}`}
                state={{data: project}}
                >
                {name}
                </Link>
            </td>
            <td className="reserva-td">{client}</td>
            <td className="reserva-td">{manager}</td>
            <td className="reserva-td">{status}</td>
            <td className="reserva-td">{area}</td>
            <td className="reserva-td">{type}</td>
            <td className="reserva-td">{size}</td>
            <td className="reserva-td">{target}</td>
            <td className="reserva-td">{startdate}</td>
            <td className="reserva-td">{enddate}</td>
            <td className="reserva-td">{comments}</td>
        </tr>

    );

}

