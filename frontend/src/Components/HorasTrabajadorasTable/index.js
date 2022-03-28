import React from "react";
import {Link} from "react-router-dom";

export function HorasTrabajadorasTable({project}) {

    return <>
        <div className="btn-facturaE-wrapper">
            <button className="btn-orange btn-facturaE">
                <Link
                    className="btn-link-facturaE"
                    to={`/horas/new`}
                    state={{data: project}}>
                    Introducir horas
                </Link>
            </button>
        </div>

        <table>
            <thead>
                <tr className='horas-trabajadoras-table'>
                    <th className='horas-trabajadoras-th'>Código proyecto</th>
                    <th className='horas-trabajadoras-th'>Nombre proyecto</th>
                    <th className='horas-trabajadoras-th'>Cliente</th>
                    <th className='horas-trabajadoras-th'>Trabajador</th>
                    <th className='horas-trabajadoras-th'>Socias</th>
                    <th className='horas-trabajadoras-th'>Nº Horas Asignadas</th>
                    <th className='horas-trabajadoras-th'>Nº Horas Ejecutas</th>
                    <th className='horas-trabajadoras-th'>Nº horas Pendientes</th>
                    <th className='horas-trabajadoras-th'>Precio/Hora</th>
                    <th className='horas-trabajadoras-th'>Precio Total</th>
                </tr>
            </thead>

            <tbody>
            {project.horasTrabajadoras.map(horasTrabajadoras => <tr>
                    <td className='horas-trabajadoras-td'>{project.code}</td>
                    <td className='horas-trabajadoras-td'>{project.name}</td>
                    <td className='horas-trabajadoras-td'>{project.client}</td>
                    <td className='horas-trabajadoras-td num-factura'>
                        <Link
                            to={`/horas/${horasTrabajadoras.id}`}
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
                    <td className='horas-trabajadoras-td'>{horasTrabajadoras.donePrice}</td>
                </tr>
            )
            }
            </tbody>
        </table>

    </>
}