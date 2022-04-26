import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from ".././comonStyles/styles.module.scss";
import style from "./style.module.scss";
import classnames from "classnames";

export const FacturaRecibidaForm = ({ addProject, deleteProject }) => {
  const params = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const data = location.state ? location.state.data : null;
  const facturaActual = data.facturasRecibidas.findIndex(
    (facturaRecibida) => facturaRecibida.id == params.id
  );

  let facturaRecibidaVacia = data.facturasRecibidas[facturaActual] || {
    code: "",
    name: "",
    facturasRecibidas: {
      expenseType: "",
      numInvoices: "",
      date: "",
      supplier: "",
      cost: "",
      iva: "",
      irpf: "",
      total: "",
      paidOut: "",
    },
  };

  let initialState = {
    ...data,
    facturasRecibidas: facturaRecibidaVacia,
  };

  const [datos, setDatos] = useState(initialState);

  const handleInputChange = (event) => {
    setDatos({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    addProject(datos).then(() => navigate("/projects"));
  };
  const isPagado = () => (datos.facturasRecibidas.paidOut ? "Sí" : "No");

  return (
    <div className={styles.container}>
      <section className={classnames(styles.section, style.section)}>
        <div className={styles.formWrapper}>
          <h1>{data ? "Factura recibida" : "Nueva factura"}</h1>
          <h3>Proyecto {datos.name}</h3>
          <div>
            <form onSubmit={enviarDatos} action="">
              <div className={styles.projectContainer}>
                <div className={styles.formGroup}>
                  <label htmlFor="">Code</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="code"
                    value={datos.code}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Nombre</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="name"
                    value={datos.name}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Tipo de gasto</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="facturasRecibidas.expenseType"
                    value={datos.facturasRecibidas.expenseType}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Nº Factura</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="facturasRecibidas.numInvoices"
                    value={datos.facturasRecibidas.numInvoices}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Fecha</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="facturasRecibidas.date"
                    value={datos.facturasRecibidas.date}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Proveedor</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="facturasRecibidas.supplier"
                    value={datos.facturasRecibidas.supplier}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">Importe</label>
                  <input
                    type="text"
                    value={datos.facturasRecibidas.cost}
                    name="facturasRecibidas.cost"
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">IVA</label>
                  <input
                    type="text"
                    value={datos.facturasRecibidas.iva}
                    name="facturasRecibidas.iva"
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">IRPF</label>
                  <input
                    type="text"
                    value={datos.facturasRecibidas.irpf}
                    name="facturasRecibidas.irpf"
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">Total</label>
                  <input
                    type="text"
                    value={datos.facturasRecibidas.total}
                    name="facturasRecibidas.total"
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Pagado</label>
                  <input
                    type="text"
                    value={isPagado()}
                    name="facturasRecibidas.paidOut"
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
