import React, { useState } from "react";
import styles from "../../Projects/ProjectList/styles.module.scss";
import { HoursListItem } from "../HoursListItem";

export function HoursList({ projects }) {
  const tableTitles = [
    "Código Proyecto",
    "Nombre Proyecto",
    "Cliente",
    "Trabajador",
    "Socia",
    "Horas asignadas",
    "Horas ejecutadas",
    "Horas pendientes",
    "Precio/Hora",
    "Total",
  ];

  const [state, setState] = useState({ filter: "" });

  function getData(event) {
    const value = event.target.value;
    setState({ filter: value.toLowerCase() });
  }

  function checkHorasTrabajadoras(projects) {
    const horasExists = projects.find(
      (item) => item.horasTrabajadoras.length === 0
    );
    return horasExists === undefined;
  }

  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.sectionTitle}>Horas trabajadas</h1>

        <div className={styles.searchBarContainer}>
          <input
            name="project"
            type="text"
            onChange={getData}
            placeholder="Busca un proyecto"
          />
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

            {checkHorasTrabajadoras(projects) ? (
              <tr>
                <td colSpan="9">No hay horas trabajadas</td>
              </tr>
            ) : (
              projects
                .filter((project) => project.horasTrabajadoras.length !== 0)
                .map((project) => {
                  if (
                    project.name.toLowerCase().indexOf(state.filter) >= 0 ||
                    state.filter.length === 0
                  ) {
                    return <HoursListItem key={project.id} project={project} />;
                  }
                  if (
                    project.code.toLowerCase().indexOf(state.filter) >= 0 ||
                    state.filter.length === 0
                  ) {
                    return <HoursListItem key={project.id} project={project} />;
                  }

                  if (
                    project.client.toLowerCase().indexOf(state.filter) >= 0 ||
                    state.filter.length === 0
                  ) {
                    return <HoursListItem key={project.id} project={project} />;
                  }
                })
            )}
          </table>
        </div>
      </section>
    </div>
  );
}
