import React from "react";
import "./style.css";
import { ProjectListItem } from "../ProjectListItem";
import { Link } from "react-router-dom";

export function ProjectList({ projects }) {
  const [state, setState] = React.useState({ filter: "" });
  const tableTitles = [
    "Código Proyecto",
    "Nombre Proyecto",
    "Cliente",
    "Estado",
    "Tipo",
    "Target",
    "Presupuesto prev.",
    "Gastos socias prev.",
    "Gastos ext. prev.",
    "Gasto personal",
    "% gestión",
    "Otros gastos",
    "Margen",
  ];

  function getData(val) {
    setState({ filter: val.target.value.toLowerCase() });
  }

  return (
    <div className="table-container">
      <section className="reservesList">
        <h1 className="reservesList-title">Proyectos</h1>

        <div className="barra-de-busqueda-container-project">
          <input
            className="barra-de-busqueda"
            name="project"
            type="text"
            onChange={getData}
            placeholder="Busca un proyecto"
          />

          <button className="btn-orange">
            <Link className="btn-orange-link" to="/projects/new">
              Nuevo proyecto
            </Link>
          </button>
        </div>

        <div className="tablelist">
          <table className="reserva-table">
            <tr className="reserva-table-title">
              {tableTitles.map((item, index) => (
                <th className="reserva-th" key={index}>
                  {item}
                </th>
              ))}
            </tr>

            {projects.map((project) => {
              if (
                project.name.toLowerCase().indexOf(state.filter) >= 0 ||
                state.filter.length === 0
              ) {
                return <ProjectListItem key={project.id} project={project} />;
              }

              if (
                project.client.toLowerCase().indexOf(state.filter) >= 0 ||
                state.filter.length === 0
              ) {
                return <ProjectListItem key={project.id} project={project} />;
              }

              if (
                project.code.toLowerCase().indexOf(state.filter) >= 0 ||
                state.filter.length === 0
              ) {
                return <ProjectListItem key={project.id} project={project} />;
              }

              if (
                project.type.toLowerCase().indexOf(state.filter) >= 0 ||
                state.filter.length === 0
              ) {
                return <ProjectListItem key={project.id} project={project} />;
              }
              if (
                project.status.toLowerCase().indexOf(state.filter) >= 0 ||
                state.filter.length === 0
              ) {
                return <ProjectListItem key={project.id} project={project} />;
              }

              return "";
            })}
          </table>
        </div>
      </section>
    </div>
  );
}
