import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./style.css"


export const ProjectForm = ({addProject, deleteProject}) => {

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
        comments: '',

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
        <div className='section-form-experience'>
            <section className="experience-form-section">
                <div className="experience-form-wrapper">

                    <h1>{data ? 'Editar proyecto' : 'Nuevo proyecto'}</h1>
                    <div className="experience-form-container">
                        <form  className="edit-experience-form" onSubmit={enviarDatos} action="">

                            <div className="proyecto-container">

                                <div className="datos-proyecto">

                                    <div className="experience-form-group">
                                        <label htmlFor="">Código Proyecto</label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               name="code"
                                               value={datos.code}
                                               />
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Nombre Proyecto</label>
                                        <input  type="text"
                                                value={datos.name}
                                                name="name"
                                                className="experience-form-control"
                                                onChange={handleInputChange}
                                                required/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Cliente</label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               name="client"
                                               value={datos.client}
                                               required/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Coordinadora</label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               name="manager"
                                               value={datos.manager}/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Estado</label>
                                        <input type="text"
                                               value={datos.status}
                                               name="status"
                                               className="experience-form-control"
                                               onChange={handleInputChange}/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Area</label>
                                        <input type="text"
                                               value={datos.area}
                                               name="area"
                                               className="experience-form-control"
                                               onChange={handleInputChange}/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Tipo</label>
                                        <input type="text"
                                               value={datos.type}
                                               name="type" id="" cols="50" rows="5"
                                               className="form-control"
                                               onChange={handleInputChange}/>
                                    </div>


                                    <div className="experience-form-group">
                                        <label htmlFor="">Tamaño</label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               value={datos.size}
                                               name="size"/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Target</label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               value={datos.target}
                                               name="target"/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Fecha inicio</label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               value={datos.startdate}
                                               name="startdate"/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Fecha cierre</label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               value={datos.enddate}
                                               name="enddate"/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Descripción</label>
                                        <textarea type="text"
                                                  value={datos.comments}
                                                  name="comments" cols="50" rows="3"
                                                  className="experience-form-control"
                                                  onChange={handleInputChange}/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">
                                            Observaciones<br/>
                                            Coordinación
                                        </label>
                                        <textarea type="text"
                                                  value={datos.comments}
                                                  name="comments" cols="50" rows="3"
                                                  className="experience-form-control"
                                                  onChange={handleInputChange}/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Observaciones Administración
                                        </label>
                                        <textarea type="text"
                                                  value={datos.comments}
                                                  name="comments" cols="50" rows="3"
                                                  className="experience-form-control"
                                                  onChange={handleInputChange}/>
                                    </div>
                                </div>

                                <div className="totales">

                                    <div className="total-previsto">

                                        <h3 className="total-previsto-title">Total Previsto</h3>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Presupuesto previsto</label>
                                            <input type="text"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}
                                                   name="code"
                                                   value={datos.code}
                                            />
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Gastos Socias previstos</label>
                                            <input  type="text"
                                                    value={datos.name}
                                                    name="name"
                                                    className="experience-form-control"
                                                    onChange={handleInputChange}
                                                    required/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Gastos externos previstos</label>
                                            <input type="text"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}
                                                   name="client"
                                                   value={datos.client}
                                                   required/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Gastos personal previstos</label>
                                            <input type="text"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}
                                                   name="manager"
                                                   value={datos.manager}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">% Gestión</label>
                                            <input type="text"
                                                   value={datos.status}
                                                   name="status"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Otros gastos previstos</label>
                                            <input type="text"
                                                   value={datos.area}
                                                   name="area"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Margen</label>
                                            <input type="text"
                                                   value={datos.type}
                                                   name="type" id="" cols="50" rows="5"
                                                   className="form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                    </div>
                                    <div className="total-ejecutado">

                                        <h3 className="total-ejecutado-title">Total Ejecutado</h3>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Presupuesto ejecutado
                                            </label>
                                            <input type="text"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}
                                                   name="code"
                                                   value={datos.code}
                                            />
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Gastos Socias ejecutado</label>
                                            <input  type="text"
                                                    value={datos.name}
                                                    name="name"
                                                    className="experience-form-control"
                                                    onChange={handleInputChange}
                                                    required/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Gastos externos ejecutado</label>
                                            <input type="text"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}
                                                   name="client"
                                                   value={datos.client}
                                                   required/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Gastos personal ejecutados</label>
                                            <input type="text"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}
                                                   name="manager"
                                                   value={datos.manager}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">% Gestión</label>
                                            <input type="text"
                                                   value={datos.status}
                                                   name="status"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Otros gastos ejecutados</label>
                                            <input type="text"
                                                   value={datos.area}
                                                   name="area"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Margen
                                            </label>
                                            <input type="text"
                                                   value={datos.type}
                                                   name="type" id="" cols="50" rows="5"
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


