// import React from "react";
// import {Link} from "react-router-dom";
//
// export function HorasTrabajadorasTable({project}) {
//     return <table>
//         <thead>
//         <tr className='horas-trabajadoras-table'>
//             <th className='horas-trabajadoras-th'>Cliente
//             </th>
//             <th className='horas-trabajadoras-th'>Trabajador</th>
//             <th className='horas-trabajadoras-th'>Socias
//             </th>
//             <th className='horas-trabajadoras-th'>Nº Horas Asignadas
//             </th>
//             <th className='horas-trabajadoras-th'>Nº Horas Ejecutas</th>
//             <th className='horas-trabajadoras-th'>Nº horas Pendientes
//             </th>
//             <th className='horas-trabajadoras-th'>Precio/Hora</th>
//             <th className='horas-trabajadoras-th'>Precio Total</th>
//         </tr>
//         </thead>
//         <tbody>
//         {project.horasTrabajadoras.map( horasTrabajadoras => <tr>
//                 <td className='horas-trabajadoras-td'>{project.code}
//                 </td>
//                 <td className='horas-trabajadoras-td'>{project.cliente}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.socias} </td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.numHorasAsignadas}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.numHorasEjecutadas}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.numHorasPendientes}
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.precioHora}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.donePrice}</td>
//
//                 </td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.cliente}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.trabajador}
//                     <Link
//                         to={`/horas-trabajadoras/${horasTrabajadoras.id}`}
//                         state={{data: project}}
//                     >
//                         {horasTrabajadoras.trabajador}
//                     </Link>
//                 </td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.socias}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.numHorasAsignadas}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.numHorasEjecutadas}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.numHorasPendientes}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.precioHora}</td>
//                 <td className='horas-trabajadoras-td'>{project.horasTrabajadoras.donePrice}
//                 </td>
//             </tr>
//         )
//         }
//         </tbody>
//
//     </table>;
// }