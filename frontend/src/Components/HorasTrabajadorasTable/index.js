import React from "react";
import {Link} from "react-router-dom";

export function HorasTrabajadorasTable({project}) {
    return <table>
        <thead>
        <tr className='horas-trabajadoras-table'>
            <th className='horas-trabajadoras-th'>Cliente
            </th>
            <th className='horas-trabajadoras-th'>Trabajador</th>
            <th className='horas-trabajadoras-th'>Socias
            </th>
            <th className='horas-trabajadoras-th'>Nº Horas Asignadas
            </th>
            <th className='horas-trabajadoras-th'>Nº Horas Ejecutas</th>
            <th className='horas-trabajadoras-th'>Nº horas Pendientes
            </th>
            <th className='horas-trabajadoras-th'>Precio/Hora</th>
            <th className='horas-trabajadoras-th'>Precio Total</th>
        </tr>
        </thead>
        <tbody>
        {project.horasTrabajadoras.map( horasTrabajadoras => <tr>
                <td className='horas-trabajadoras-td'>{project.code}
                </td>
                <td className='horas-trabajadoras-td'>{project.cliente}</td>
                <td className='horas-trabajadoras-td'>{project.socias} </td>
                <td className='horas-trabajadoras-td'>{project.numHorasAsignadas}</td>
                <td className='horas-trabajadoras-td'>{project.numHorasEjecutadas}</td>
                <td className='horas-trabajadoras-td'>{project.numHorasPendientes}
                <td className='horas-trabajadoras-td'>{project.precioHora}</td>
                <td className='horas-trabajadoras-td'>{project.donePrice}</td>

                </td>
                <td className='horas-trabajadoras-td'>{horasTrabajadoras.cliente}</td>
                <td className='horas-trabajadoras-td'>{horasTrabajadoras.trabajador}
                    <Link
                        to={`/horas-trabajadoras/${horasTrabajadoras.id}`}
                        state={{data: project}}
                    >
                        {horasTrabajadoras.trabajador}
                    </Link>
                </td>
                <td className='horas-trabajadoras-td'>{horasTrabajadoras.socias}</td>
                <td className='horas-trabajadoras-td'>{horasTrabajadoras.numHorasAsignadas}</td>
                <td className='horas-trabajadoras-td'>{horasTrabajadoras.numHorasEjecutadas}</td>
                <td className='horas-trabajadoras-td'>{horasTrabajadoras.numHorasPendientes}</td>
                <td className='horas-trabajadoras-td'>{horasTrabajadoras.precioHora}</td>
                <td className='horas-trabajadoras-td'>{horasTrabajadoras.donePrice}
                </td>
            </tr>
        )
        }
        </tbody>

    </table>;
}