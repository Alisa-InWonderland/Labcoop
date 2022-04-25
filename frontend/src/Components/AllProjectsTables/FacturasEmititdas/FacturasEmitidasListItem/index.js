import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Projects/ProjectListItem/styles.module.scss";
import classnames from "classnames";

export function FacturasEmitidasListItem({ project }) {
  const { code, name, client } = project;
  const { id, numFactura, fecha, importe, iva, total, cobrado } =
    project.facturaEmitida;

  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell}>{code}</td>
      <td className={styles.tableCell}>{name}</td>
      <td className={classnames(styles.tableCell, styles.cellLink)}>
        <Link to={`/facturas-emitidas/${id}`} state={{ data: project }}>
          {numFactura}
        </Link>
      </td>
      <td className={styles.tableCell}>{fecha}</td>
      <td className={styles.tableCell}>{client}</td>
      <td className={styles.tableCell}>{importe}</td>
      <td className={styles.tableCell}>{iva}</td>
      <td className={styles.tableCell}>{total}</td>
      <td className={styles.tableCell}>{cobrado}</td>
    </tr>
  );
}
