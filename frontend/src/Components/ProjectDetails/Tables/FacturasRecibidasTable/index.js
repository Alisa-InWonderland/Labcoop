import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import classnames from "classnames";

export function FacturasRecibidasTable({ project }) {
  const tableTitles = [
    "Código Proyecto",
    "Nombre Proyecto",
    "Tipo gasto",
    "Nº Factura",
    "Fecha",
    "Proveedor",
    "Importe",
    "IVA",
    "IRPF",
    "Total",
    "Pagado",
  ];

  return (
    <>
      <div className={styles.btnWrapper}>
        <button className={styles.btn}>
          <Link
            className="btn-link-facturaE"
            to={`/facturas-recibidas/new`}
            state={{ data: project }}
          >
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
          {project.facturasRecibidas.map((factura) => (
            <tr className={styles.tableRow}>
              <td className={styles.tableCell}>{project.code}</td>
              <td className={styles.tableCell}>{project.name}</td>
              <td className={styles.tableCell}>{factura.expenseType} </td>
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
              <td className={styles.tableCell}>
                {factura.paidOut ? "Sí" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
