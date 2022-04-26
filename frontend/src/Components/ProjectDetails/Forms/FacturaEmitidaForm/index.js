import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from ".././comonStyles/styles.module.scss";
import style from "./style.module.scss";
import classnames from "classnames";

export const FacturaEmitidaForm = ({ addProject, deleteProject }) => {
  const params = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const data = location.state ? location.state.data : null;

  let facturaEmitidaOVacia = data.facturaEmitida || {
    client: "",
    facturaEmitida: {
      numFactura: "",
      fecha: "",
      importe: "",
      iva: "",
      total: "",
      cobrado: "",
    },
  };

  let initialState = { ...data, facturaEmitida: facturaEmitidaOVacia };

  const [datos, setDatos] = useState(initialState);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    addProject(datos).then(() => navigate("/projects"));
  };

  const isCobrado = () => (datos.facturaEmitida.cobrado ? "Sí" : "No");

  return (
    <div className={styles.container}>
      <section className={classnames(styles.section, style.section)}>
        <div className={styles.formWrapper}>
          <h1>{data ? "Factura emitida" : "Nueva factura"}</h1>
          <h3>Proyecto {datos.name}</h3>
          <div>
            <form onSubmit={enviarDatos} action="">
              <div className={styles.projectContainer}>
                <div className={styles.formGroup}>
                  <label htmlFor="">Nº Factura</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="facturaEmitida.numFactura"
                    value={datos.facturaEmitida.numFactura}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Fecha</label>
                  <input
                    type="text"
                    value={datos.facturaEmitida.fecha}
                    name="facturaEmitida.fecha"
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Cliente</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="client"
                    value={datos.client}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Importe</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="facturaEmitida.importe"
                    value={datos.facturaEmitida.importe}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">IVA</label>
                  <input
                    type="text"
                    value={datos.facturaEmitida.iva}
                    name="facturaEmitida.iva"
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Total</label>
                  <input
                    type="text"
                    value={datos.facturaEmitida.total}
                    name="facturaEmitida.total"
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Cobrado</label>
                  <input
                    type="text"
                    value={isCobrado()}
                    name="facturaEmitida.cobrado"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.btnContainer}>
                <div>
                  <button type="submit" className={styles.btn}>
                    Guardar
                  </button>
                </div>

                <div>
                  <button
                    className={styles.btn}
                    onClick={() => deleteProject(params.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
