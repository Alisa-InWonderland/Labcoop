import React, { useState } from "react";
import styles from "../../Projects/ProjectList/styles.module.scss";
import { FacturasRecibidasListItem } from "../FacturasRecibidasListItem";

export function FacturasRecibidasList({ projects }) {
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

  const [state, setState] = useState({ filter: "" });

  function getData(event) {
    const value = event.target.value;
    setState({ filter: value.toLowerCase() });
  }

  function checkFacturaRecibida(projects) {
    const facturaRecibidaExist = projects.find(
      (item) => item.facturasRecibidas.length === 0
    );
    return facturaRecibidaExist === undefined;
  }

  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.sectionTitle}>Facturas Recibidas</h1>

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

            {checkFacturaRecibida(projects) ? (
              <tr>
                <td colSpan="9">No hay facturas recibidas</td>
              </tr>
            ) : (
              projects
                .filter((project) => project.facturasRecibidas.length !== 0)
                .map((project) => {
                  if (
                    project.code.toLowerCase().indexOf(state.filter) >= 0 ||
                    state.filter.length === 0
                  ) {
                    return (
                      <FacturasRecibidasListItem
                        key={project.id}
                        project={project}
                      />
                    );
                  }

                  if (
                    project.name.toLowerCase().indexOf(state.filter) >= 0 ||
                    state.filter.length === 0
                  ) {
                    return (
                      <FacturasRecibidasListItem
                        key={project.id}
                        project={project}
                      />
                    );
                  }
                })
            )}
          </table>
        </div>
      </section>
    </div>
  );
}
