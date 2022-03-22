import React from "react";
import {Link} from "react-router-dom";
import "./style.css"




export function ProjectListItem({project}) {

    const { id, code, name, client, manager, status, type, size, target, previousBudget, previousCoCost, previousExtExpenses, workersExpenses, managePercent, otherExpenses, margin } = project;


    return (
        <tr className='reserva-table-row'>

            <td className="reserva-td">{code}</td>
            <td className="reserva-td name">
                <Link
                to={`/projects/${id}`}
                state={{data: project}}
                >
                {name || 'no name'}
                </Link>
            </td>
            <td className="reserva-td">{client}</td>
            <td className="reserva-td">{status}</td>
            <td className="reserva-td">{type}</td>
            <td className="reserva-td">{target}</td>
            <td className="reserva-td">{previousBudget}</td>
            <td className="reserva-td">{previousCoCost}</td>
            <td className="reserva-td">{previousExtExpenses}</td>
            <td className="reserva-td">{workersExpenses}</td>
            <td className="reserva-td">{managePercent}</td>
            <td className="reserva-td">{otherExpenses}</td>
            <td className="reserva-td">{margin}</td>
        </tr>

    );

}

