import React from "react";
import styles from "./styles.module.scss";

export function HoursListItem({ project }) {
  const { code, name, client, horasTrabajadoras } = project;

  return horasTrabajadoras.map((horasTrabajador) => (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell}>{code}</td>
      <td className={styles.tableCell}>{name}</td>
      <td className={styles.tableCell}>{client}</td>
      <td className={styles.tableCell}>{horasTrabajador.trabajador}</td>
      <td className={styles.tableCell}>{horasTrabajador.socias}</td>
      <td className={styles.tableCell}>{horasTrabajador.numHorasAsignadas}</td>
      <td className={styles.tableCell}>{horasTrabajador.numHorasEjecutadas}</td>
      <td className={styles.tableCell}>{horasTrabajador.numHorasPendientes}</td>
      <td className={styles.tableCell}>{horasTrabajador.precioHora}</td>
      <td className={styles.tableCell}>{horasTrabajador.donePrice}</td>
    </tr>
  ));
}
