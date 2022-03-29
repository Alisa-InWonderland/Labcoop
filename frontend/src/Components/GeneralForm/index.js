import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./style.css"


export const GeneralForm = ({addProject, deleteProject}) => {

    const params  = useParams();

    let navigate = useNavigate();

    const location = useLocation();
    const data = location.state ? location.state.data : null;

    const [datos, setDatos] = useState(data || {
        code: '',
        name: '',
        client: '',
        manager: '',
        status: '',
        area: '',
        type: '',
        size: '',
        target: '',
        startdate: '',
        enddate: '',
        previousBudget: '',
        previousCoCost: '',
        previousExtExpenses: '',
        workersExpenses: '',
        managePercent: '',
        otherExpenses: '',
        margin: '',
        comments: '',
        observationsA: '',
        observationsC: '',
        executedBudget: '',
        executedCoCost: '',
        executedExtExpenses: '',
        executedWorkersExpenses: '',
        executedManagePercent: '',
        executedOtherExpenses: '',
        executedMargin: '',

    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        addProject(datos)
            .then(() => navigate("/projects"))
    }


    return (
        <div className='section-form-general'>
            <section className="general-form-section">
                <div className="general-form-wrapper">

                    <h1>{data ? 'General' : 'Nuevo proyecto'}</h1>
                    <h3>Proyecto {datos.name}</h3>
                    <div className="general-form-container">
                        <form  className="edit-general-form" onSubmit={enviarDatos} action="">

                            <div className="general-proyecto-container">

                                <div className="general-datos-proyecto">

                                    <div className="general-form-group">
                                        <label htmlFor="">Código Proyecto</label>
                                        <input type="text"
                                               className="general-form-control"
                                               onChange={handleInputChange}
                                               name="code"
                                               value={datos.code}
                                               />
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Nombre Proyecto</label>
                                        <input  type="text"
                                                value={datos.name}
                                                name="name"
                                                className="general-form-control"
                                                onChange={handleInputChange}
                                                required/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Cliente</label>
                                        <input type="text"
                                               className="general-form-control"
                                               onChange={handleInputChange}
                                               name="client"
                                               value={datos.client}
                                               required/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Coordinadora</label>
                                        <input type="text"
                                               className="general-form-control"
                                               onChange={handleInputChange}
                                               name="manager"
                                               value={datos.manager}/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Estado</label>
                                        <input type="text"
                                               value={datos.status}
                                               name="status"
                                               className="general-form-control"
                                               onChange={handleInputChange}/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Area</label>
                                        <input type="text"
                                               value={datos.area}
                                               name="area"
                                               className="general-form-control"
                                               onChange={handleInputChange}/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Tipo</label>
                                        <input type="text"
                                               value={datos.type}
                                               name="type"
                                               className="form-control"
                                               onChange={handleInputChange}/>
                                    </div>


                                    <div className="general-form-group">
                                        <label htmlFor="">Tamaño</label>
                                        <input type="text"
                                               className="general-form-control"
                                               onChange={handleInputChange}
                                               value={datos.size}
                                               name="size"/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Target</label>
                                        <input type="text"
                                               className="general-form-control"
                                               onChange={handleInputChange}
                                               value={datos.target}
                                               name="target"/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Fecha inicio</label>
                                        <input type="text"
                                               className="general-form-control"
                                               onChange={handleInputChange}
                                               value={datos.startdate}
                                               name="startdate"/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Fecha cierre</label>
                                        <input type="text"
                                               className="general-form-control"
                                               onChange={handleInputChange}
                                               value={datos.enddate}
                                               name="enddate"/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">Descripción</label>
                                        <textarea type="text"
                                                  value={datos.comments}
                                                  name="comments" cols="50" rows="3"
                                                  className="general-form-control"
                                                  onChange={handleInputChange}/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">
                                            Observaciones<br/>
                                            Coordinación
                                        </label>
                                        <textarea type="text"
                                                  value={datos.observationsC}
                                                  name="observationsC" cols="50" rows="3"
                                                  className="general-form-control"
                                                  onChange={handleInputChange}/>
                                    </div>

                                    <div className="general-form-group">
                                        <label htmlFor="">
                                            Observaciones<br/>
                                            Administración
                                        </label>
                                        <textarea type="text"
                                                  value={datos.observationsA}
                                                  name="observationsA" cols="50" rows="3"
                                                  className="general-form-control"
                                                  onChange={handleInputChange}/>
                                    </div>
                                </div>

                                <div className="totales">

                                    <div className="total-previsto">

                                        <h4 className="total-previsto-title">Total Previsto</h4>

                                        <div className="general-form-group">
                                            <label htmlFor="">Presupuesto previsto</label>
                                            <input type="text"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}
                                                   name="previousBudget"
                                                   value={datos.previousBudget}
                                                   required/>
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Gastos Socias previstos</label>
                                            <input  type="text"
                                                    value={datos.previousCoCost}
                                                    name="previousCoCost"
                                                    className="general-form-control"
                                                    onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Gastos externos previstos</label>
                                            <input type="text"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}
                                                   name="previousExtExpenses"
                                                   value={datos.previousExtExpenses}
                                                   />
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Gastos personal previstos</label>
                                            <input type="text"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}
                                                   name="workersExpenses"
                                                   value={datos.workersExpenses}/>
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">% Gestión</label>
                                            <input type="text"
                                                   value={datos.managePercent}
                                                   name="managePercent"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Otros gastos previstos</label>
                                            <input type="text"
                                                   value={datos.otherExpenses}
                                                   name="otherExpenses"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Margen</label>
                                            <input type="text"
                                                   value={datos.margin}
                                                   name="margin"
                                                   className="form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                    </div>
                                    <div className="total-ejecutado">

                                        <h4 className="total-ejecutado-title">Total Ejecutado</h4>

                                        <div className="general-form-group">
                                            <label htmlFor="">Presupuesto ejecutado
                                            </label>
                                            <input type="text"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}
                                                   name="executedBudget"
                                                   value={datos.executedBudget}
                                                   required/>
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Gastos Socias ejecutado</label>
                                            <input  type="text"
                                                    value={datos.executedCoCost}
                                                    name="executedCoCost"
                                                    className="general-form-control"
                                                    onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Gastos externos ejecutado</label>
                                            <input type="text"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}
                                                   name="executedExtExpenses"
                                                   value={datos.executedExtExpenses}
                                                   />
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Gastos personal ejecutados</label>
                                            <input type="text"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}
                                                   name="executedWorkersExpenses"
                                                   value={datos.executedWorkersExpenses}/>
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">% Gestión</label>
                                            <input type="text"
                                                   value={datos.executedManagePercent}
                                                   name="executedManagePercent"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Otros gastos ejecutados</label>
                                            <input type="text"
                                                   value={datos.executedOtherExpenses}
                                                   name="executedOtherExpenses"
                                                   className="general-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="general-form-group">
                                            <label htmlFor="">Margen
                                            </label>
                                            <input type="text"
                                                   value={datos.executedMargin}
                                                   name="executedMargin"
                                                   className="form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="btn-flexbox">
                              <div className="btn-edit-container">
                                <button type="submit" className="btn-edit">Guardar</button>
                              </div>

                              <div className="btn-edit-container">
                                <button className="btn-edit" onClick={() => deleteProject(params.id)}>Eliminar</button>
                              </div>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
}


