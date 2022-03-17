// import React from "react";
// import "./index.css"
// import {FacturasRecibidasListItem} from "../FacturasRecibidasListItem/index";
// import {Link} from "react-router-dom";
//
//
//
// export function FacturasRecibidasList({projects, facturasR}) {
//
//
//     const [state, setState] = React.useState({filter: ""});
//
//     function getData(val) {
//         setState({filter: val.target.value.toLowerCase()});
//     }
//
//     return (
//         <div className="table-container">
//             <section className='reservesList'>
//                 <h1 className="reservesList-title">Proyectos</h1>
//
//                 <div className="barra-de-busqueda-container">
//                     <input
//                         className="barra-de-busqueda"
//                         name="project"
//                         type="text"
//                         onChange={getData}
//                         placeholder="Busca un proyecto"
//                     />
//
//                         <button className="btn-orange">
//                             <Link className="btn-orange-link" to='/projects/new'>Nuevo proyecto</Link>
//                         </button>
//
//
//                 </div>
//
//                 <div className='tablelist'>
//
//                     <table className="reserva-table">
//
//                         <tr className='reserva-table-title'>
//                             <th className='reserva-th'>CODI</th>
//                             <th className='reserva-th'>NOM</th>
//                             <th className='reserva-th'>CLIENT</th>
//                             <th className='reserva-th'>COORDINA</th>
//                             <th className='reserva-th'>ESTAT</th>
//                             <th className='reserva-th'>AREA</th>
//                             <th className='reserva-th'>TIPUS</th>
//                             <th className='reserva-th'>MIDA</th>
//                             <th className='reserva-th'>TARGET</th>
//                             <th className='reserva-th'>INICI</th>
//                             <th className='reserva-th'>FI</th>
//                             <th className='reserva-th'>OBSERVACIONS</th>
//                         </tr>
//
//                         {projects.map((project) => {
//                             if (
//                                 project.name.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.client.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.size.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.code.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.manager.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.target.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.type.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.status.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.comments.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//                             if (
//                                 project.area.toLowerCase().indexOf(state.filter) >= 0 ||
//                                 state.filter.length === 0
//                             ) {
//                                 return <FacturasRecibidasListItem key={project.id} project={project}/>;
//                             }
//
//                             return "";
//                         })}
//
//                     </table>
//
//                 </div>
//
//             </section>
//
//         </div>
//     );
// }
//
