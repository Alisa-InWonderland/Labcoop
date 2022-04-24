import React, { useState } from "react";

import styles from "./styles.module.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const ProjectForm = ({ addProject, deleteProject }) => {
  const params = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const data = location.state ? location.state.data : null;

  const [datos, setDatos] = useState(
    data || {
      code: "",
      name: "",
      client: "",
      manager: "",
      status: "",
      area: "",
      type: "",
      size: "",
      target: "",
      startdate: "",
      enddate: "",
      previousBudget: "",
      previousCoCost: "",
      previousExtExpenses: "",
      workersExpenses: "",
      managePercent: "",
      otherExpenses: "",
      margin: "",
      comments: "",
      observationsA: "",
      observationsC: "",
      executedBudget: "",
      executedCoCost: "",
      executedExtExpenses: "",
      executedWorkersExpenses: "",
      executedManagePercent: "",
      executedOtherExpenses: "",
      executedMargin: "",
    }
  );

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

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.formWrapper}>
          <h1>{data ? "General" : "Nuevo proyecto"}</h1>
          <h3>Proyecto {datos.name}</h3>
          <div>
            <form onSubmit={enviarDatos} action="">
              <div className={styles.projectContainer}>
                <div className={styles.projectData}>
                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Código Proyecto</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      onChange={handleInputChange}
                      name="code"
                      value={datos.code}
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Nombre Proyecto</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      value={datos.name}
                      name="name"
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Cliente</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      onChange={handleInputChange}
                      name="client"
                      value={datos.client}
                      required
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Coordinadora</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      onChange={handleInputChange}
                      name="manager"
                      value={datos.manager}
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Estado</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      value={datos.status}
                      name="status"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Area</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      value={datos.area}
                      name="area"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Tipo</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      value={datos.type}
                      name="type"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Tamaño</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      onChange={handleInputChange}
                      value={datos.size}
                      name="size"
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Target</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      onChange={handleInputChange}
                      value={datos.target}
                      name="target"
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Fecha inicio</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      onChange={handleInputChange}
                      value={datos.startdate}
                      name="startdate"
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Fecha cierre</label>
                    <input
                      className={styles.projectDataInput}
                      type="text"
                      onChange={handleInputChange}
                      value={datos.enddate}
                      name="enddate"
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">Descripción</label>
                    <textarea
                      type="text"
                      value={datos.comments}
                      name="comments"
                      cols="50"
                      rows="3"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">
                      Observaciones
                      <br />
                      Coordinación
                    </label>
                    <textarea
                      type="text"
                      value={datos.observationsC}
                      name="observationsC"
                      cols="50"
                      rows="3"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.generalFormGroup}>
                    <label htmlFor="">
                      Observaciones
                      <br />
                      Administración
                    </label>
                    <textarea
                      type="text"
                      value={datos.observationsA}
                      name="observationsA"
                      cols="50"
                      rows="3"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={styles.totales}>
                  <div>
                    <h4 className={styles.totalPrevistoTitle}>
                      Total Previsto
                    </h4>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Presupuesto previsto</label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="previousBudget"
                        value={datos.previousBudget}
                        required
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Gastos Socias previstos</label>
                      <input
                        type="text"
                        value={datos.previousCoCost}
                        name="previousCoCost"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Gastos externos previstos</label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="previousExtExpenses"
                        value={datos.previousExtExpenses}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Gastos personal previstos</label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="workersExpenses"
                        value={datos.workersExpenses}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">% Gestión</label>
                      <input
                        type="text"
                        value={datos.managePercent}
                        name="managePercent"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Otros gastos previstos</label>
                      <input
                        type="text"
                        value={datos.otherExpenses}
                        name="otherExpenses"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Margen</label>
                      <input
                        type="text"
                        value={datos.margin}
                        name="margin"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className={styles.totalEjecutadoTitle}>
                      Total Ejecutado
                    </h4>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Presupuesto ejecutado</label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="executedBudget"
                        value={datos.executedBudget}
                        required
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Gastos Socias ejecutado</label>
                      <input
                        type="text"
                        value={datos.executedCoCost}
                        name="executedCoCost"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Gastos externos ejecutado</label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="executedExtExpenses"
                        value={datos.executedExtExpenses}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Gastos personal ejecutados</label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="executedWorkersExpenses"
                        value={datos.executedWorkersExpenses}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">% Gestión</label>
                      <input
                        type="text"
                        value={datos.executedManagePercent}
                        name="executedManagePercent"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Otros gastos ejecutados</label>
                      <input
                        type="text"
                        value={datos.executedOtherExpenses}
                        name="executedOtherExpenses"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.generalFormGroup}>
                      <label htmlFor="">Margen</label>
                      <input
                        type="text"
                        value={datos.executedMargin}
                        name="executedMargin"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.btnFlexbox}>
                <div>
                  <button type="submit" className={styles.btnEdit}>
                    Guardar
                  </button>
                </div>

                <div>
                  <button
                    className={styles.btnEdit}
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
