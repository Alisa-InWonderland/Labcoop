import React from "react";
import { Link } from "react-router-dom";
import styles from "../FacturasEmitidasTable/styles.module.scss";
import classnames from "classnames";

export function HorasTrabajadasTable({ project }) {
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

  return (
    <>
      <div className={styles.btnWrapper}>
        <button className={styles.btn}>
          <Link to={`/horas/new`} state={{ data: project }}>
            Introducir horas
          </Link>
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            {tableTitles.map((item, index) => (
              <th className={styles.tableHeaders} key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {project.horasTrabajadoras.map((horasTrabajadoras) => (
            <tr className={styles.tableRow}>
              <td className={styles.tableCell}>{project.code}</td>
              <td className={styles.tableCell}>{project.name}</td>
              <td className={styles.tableCell}>{project.client}</td>
              <td className={classnames(styles.tableCell, styles.cellLink)}>
                <Link
                  to={`/horas/${horasTrabajadoras.id}`}
                  state={{ data: project }}
                >
                  {horasTrabajadoras.trabajador}
                </Link>
              </td>
              <td className={styles.tableCell}>{horasTrabajadoras.socias}</td>
              <td className={styles.tableCell}>
                {horasTrabajadoras.numHorasAsignadas}
              </td>
              <td className={styles.tableCell}>
                {horasTrabajadoras.numHorasEjecutadas}
              </td>
              <td className={styles.tableCell}>
                {horasTrabajadoras.numHorasPendientes}
              </td>
              <td className={styles.tableCell}>
                {horasTrabajadoras.precioHora}
              </td>
              <td className={styles.tableCell}>
                {horasTrabajadoras.donePrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
