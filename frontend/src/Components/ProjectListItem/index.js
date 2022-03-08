import React from "react";
import {Link} from "react-router-dom";
import "../ProjectList/style.css"




export function ProjectListItem({project, deleteProject, loggedIn}) {

    const { id, code, name, client, manager, status, type, size, target, startdate, enddate } = project;


    return (
        <>
            <div className="experience-card">
                <div>
                    <Link to={`/projects/${id}`} state={{data: project}}>
                        <p className="image" alt="Image of Experience">{code}</p>
                    </Link>
                </div>

                <table className="experience-table">
                    <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{client}</td>
                        <td>{manager}</td>
                        <td>{status}</td>
                        <td>{type}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    );

}

