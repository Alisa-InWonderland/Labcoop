// import React from "react";
// import {Link} from "react-router-dom";
// import "./style.css"
//
//
// export function FacturasEmitidasListItem({project, facturaE}) {
//
//     const { id, code, name, client } = project;
//     const {numFactura, fecha, importe, iva, total, cobrado} = facturaE;
//
//
//     return (
//         <tr className='reserva-table-row'>
//
//             <td className="reserva-td">{code}</td>
//             <td className="reserva-td name">{name}</td>
//             <td className="reserva-td">{client}</td>
//             <td className="reserva-td">
//                 <Link
//                     to={`/facturas-emitidas/${id}`}
//                     state={{data: project}}>
//                     {numFactura}
//                 </Link>
//             </td>
//             <td className="reserva-td">{fecha}</td>
//             <td className="reserva-td">{importe}</td>
//             <td className="reserva-td">{iva}</td>
//             <td className="reserva-td">{total}</td>
//             <td className="reserva-td">{cobrado}</td>
//         </tr>
//
//     );
//
// }
//
