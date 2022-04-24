import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import classnames from "classnames";

export function FacturasRecibidasListItem({ project }) {
  const { code, name, facturasRecibidas } = project;

  return facturasRecibidas.map((factura) => (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell}>{code}</td>
      <td className={styles.tableCell}>{name}</td>
      <td className={styles.tableCell}>{factura.expenseType}</td>
      <td className={classnames(styles.tableCell, styles.cellLink)}>
        <Link
          to={`/facturas-recibidas/${factura.id}`}
          state={{ data: project }}
        >
          {factura.numInvoices}
        </Link>
      </td>
      <td className={styles.tableCell}>{factura.date}</td>

      <td className={styles.tableCell}>{factura.supplier}</td>
      <td className={styles.tableCell}>{factura.cost}</td>
      <td className={styles.tableCell}>{factura.iva}</td>
      <td className={styles.tableCell}>{factura.irpf}</td>
      <td className={styles.tableCell}>{factura.total}</td>
      <td className={styles.tableCell}>{factura.paidOut ? "Sí" : "No"}</td>
    </tr>
  ));
}
