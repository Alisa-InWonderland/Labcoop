import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import "./style.css"



export const ProjectForm = ({props, project, deleteProject}) => {

    let navigate = useNavigate();

    const location = useLocation();
    const data = location.state ? location.state.data : null;

    const [datos, setDatos] = useState(data || {
        code: '',
        name: '',
        client: '',
        manager: '',
        status: '',
        type: '',
        size: '',
        target: '',
        startdate: '',
        enddate: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        props.addProject(datos)
            .then(() => navigate("/"))
    }


    return (
        <div className='section-form-experience'>
            <section className="experience-form-section">
                <div className="experience-form-wrapper">

                    <h1>{data ? 'Editar proyecto' : 'Nuevo proyecto'}</h1>
                    <div className="experience-form-container">
                        <form className="edit-experience-form" onSubmit={enviarDatos} action="">

                            <div className="experience-form-group">
                                <label htmlFor="">CODI PROJECTE</label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="code"
                                       value={datos.code}/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">NOM PROJECTE</label>
                                <textarea value={datos.name}
                                          name="name" id="" cols="50" rows="4"
                                          className="experience-form-control"
                                          onChange={handleInputChange}/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">CLIENT</label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="client"
                                       value={datos.client}/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">PERSONA COORDINADORA</label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="manager"
                                       value={datos.manager}/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">ESTAT</label>
                                <textarea value={datos.status}
                                          name="status" id="" cols="50" rows="3"
                                          className="experience-form-control"
                                          onChange={handleInputChange}/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">TIPO</label>
                                <input value={datos.type}
                                       name="type" id="" cols="50" rows="5"
                                       className="form-control"
                                       onChange={handleInputChange}/>
                            </div>


                            <div className="experience-form-group">
                                <label htmlFor="">TAMAÑO</label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       value={datos.size}
                                       name="size"/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">TARGET</label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       value={datos.target}
                                       name="target"/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">MES INICI</label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       value={datos.startdate}
                                       name="startdate"/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">MES FIN</label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       value={datos.enddate}
                                       name="enddate"/>
                            </div>


                            <div className="btn-edit-container">
                                <button type="submit" className="btn-edit">Guardar</button>
                            </div>

                            <div className="btn-edit-container">
                                <button className="btn-edit" onClick={() => deleteProject(project.id)}>Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
}


