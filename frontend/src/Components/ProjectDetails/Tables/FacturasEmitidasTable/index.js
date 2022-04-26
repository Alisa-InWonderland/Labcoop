import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import classnames from "classnames";

export function FacturasEmitidasTable({ project }) {
  const isCobrado = () => (project.facturaEmitida.cobrado ? "Sí" : "No");
  const tableTitles = [
    "Código Proyecto",
    "Nombre Proyecto",
    "Nº Factura",
    "Fecha",
    "Cliente",
    "Importe",
    "IVA",
    "Total",
    "Cobrado",
  ];

  return (
    <>
      <div className={styles.btnWrapper}>
        <button className={styles.btn}>
          <Link to={`/facturas-emitidas/new`} state={{ data: project }}>
            Nueva factura
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
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>{project.code}</td>
            <td className={styles.tableCell}>{project.name}</td>
            <td className={classnames(styles.tableCell, styles.cellLink)}>
              <Link
                to={`/facturas-emitidas/${project.facturaEmitida.id}`}
                state={{ data: project }}
              >
                {project.facturaEmitida.numFactura}
              </Link>
            </td>
            <td className={styles.tableCell}>{project.facturaEmitida.fecha}</td>
            <td className={styles.tableCell}>{project.client}</td>
            <td className={styles.tableCell}>
              {project.facturaEmitida.importe}
            </td>
            <td className={styles.tableCell}>{project.facturaEmitida.iva}</td>
            <td className={styles.tableCell}>{project.facturaEmitida.total}</td>
            <td className={styles.tableCell}>{isCobrado()}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
