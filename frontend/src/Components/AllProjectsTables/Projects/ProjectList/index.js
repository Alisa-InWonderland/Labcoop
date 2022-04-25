import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ProjectListItem } from "../ProjectListItem";
import { Link } from "react-router-dom";

export function ProjectList({ projects }) {
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

  const [state, setState] = useState({ filter: "" });

  function getData(event) {
    const value = event.target.value;
    setState({ filter: value.toLowerCase() });
  }

  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.sectionTitle}>Proyectos</h1>

        <div className={styles.searchBarContainer}>
          <input
            name="project"
            type="text"
            onChange={getData}
            placeholder="Busca un proyecto"
          />

          <button className={styles.btn}>
            <Link to="/projects/new">Nuevo proyecto</Link>
          </button>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tr>
              {tableTitles.map((item, index) => (
                <th className={styles.tableHeaders} key={index}>
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
            })}
          </table>
        </div>
      </section>
    </div>
  );
}
