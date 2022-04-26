import React from "react";
import styles from "../../Projects/ProjectListItem/styles.module.scss";
import { Link } from "react-router-dom";
import classnames from "classnames";

export function HoursListItem({ project }) {
  const { code, name, client, horasTrabajadoras } = project;

  return horasTrabajadoras.map((horasTrabajador) => (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell}>{code}</td>
      <td className={styles.tableCell}>{name}</td>
      <td className={styles.tableCell}>{client}</td>
      <td className={classnames(styles.tableCell, styles.cellLink)}>
        <Link to={`/horas/${horasTrabajador.id}`} state={{ data: project }}>
          {horasTrabajador.trabajador}
        </Link>
      </td>
      <td className={styles.tableCell}>{horasTrabajador.socias}</td>
      <td className={styles.tableCell}>{horasTrabajador.numHorasAsignadas}</td>
      <td className={styles.tableCell}>{horasTrabajador.numHorasEjecutadas}</td>
      <td className={styles.tableCell}>{horasTrabajador.numHorasPendientes}</td>
      <td className={styles.tableCell}>{horasTrabajador.precioHora}</td>
      <td className={styles.tableCell}>{horasTrabajador.donePrice}</td>
    </tr>
  ));
}
