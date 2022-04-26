import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from ".././comonStyles/styles.module.scss";
import style from "./style.module.scss";
import classnames from "classnames";

export const HorasForm = ({ addProject, deleteProject }) => {
  const params = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const data = location.state ? location.state.data : null;
  const horasActual = data.horasTrabajadoras.findIndex(
    (horasTrabajadoras) => horasTrabajadoras.id == params.id
  );

  let introducirHoras = data.horasTrabajadoras[horasActual] || {
    code: "",
    name: "",
    client: "",
    horasTrabajadoras: {
      trabajador: "",
      socias: "",
      numHorasAsignadas: "",
      numHorasEjecutadas: "",
      numHorasPendientes: "",
      precioHora: "",
      donePrice: "",
    },
  };

  let initialState = {
    ...data,
    horasTrabajadoras: introducirHoras,
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
    addProject(datos).then(() => navigate("/horas"));
  };

  return (
    <div className={styles.container}>
      <section className={classnames(styles.section, style.section)}>
        <div className={styles.formWrapper}>
          <h1>{data ? "Horas" : "Introducir horas"}</h1>
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
                  <label htmlFor="">Cliente</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="client"
                    value={datos.client}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Trabajador/a</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="horasTrabajadoras.trabajador"
                    value={datos.horasTrabajadoras.trabajador}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Socias</label>
                  <input
                    type="text"
                    value={datos.horasTrabajadoras.socias}
                    name="horasTrabajadoras.socias"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Horas Asignadas</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="horasTrabajadoras.numHorasAsignadas"
                    value={datos.horasTrabajadoras.numHorasAsignadas}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Horas Ejecutadas</label>
                  <input
                    type="text"
                    value={datos.horasTrabajadoras.numHorasEjecutadas}
                    name="horasTrabajadoras.numHorasEjecutadas"
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Horas Pendientes</label>
                  <input
                    type="text"
                    value={datos.horasTrabajadoras.numHorasPendientes}
                    name="horasTrabajadoras.numHorasPendientes"
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Precio Hora</label>
                  <input
                    type="text"
                    value={datos.horasTrabajadoras.precioHora}
                    name="horasTrabajadoras.precioHora"
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Total</label>
                  <input
                    type="text"
                    value={datos.horasTrabajadoras.donePrice}
                    name="horasTrabajadoras.donePrice"
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
