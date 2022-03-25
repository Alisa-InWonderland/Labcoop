import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./style.css"
import Typography from "@mui/material/Typography";


export const HorasForm = ({addProject, deleteProject}) => {

    const params  = useParams();

    let navigate = useNavigate();

    const location = useLocation();
    const data = location.state ? location.state.data : null;

    const [datos, setDatos] = useState(data || {
        client: '',
        trabajador: '',
        numHorasAsignadas: '',
        numHorasEjecutadas: '',
        numHorasPendientes: '',
        precioHora: '',
        donePrice: '',

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
            .then(() => navigate("/horasTrabajadoras"))
    }


    return (
        <div className='section-form-experience'>
            <section className="experience-form-section">
                <div className="experience-form-wrapper">

                        <h1>{data ? 'Horas' : 'Nuevo proyecto'}</h1>
                        <div className="experience-form-container">
                            <form  className="edit-experience-form" onSubmit={enviarDatos} action="">

                                <div className="proyecto-container">

                                        <div className="experience-form-group">
                                            <label htmlFor="">Trabajador/a
                                            </label>
                                            <input type="text"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}
                                                   name="code"
                                                   value={datos.horasTrabajadoras.trabajador}
                                                   />
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Socias
                                            </label>
                                            <input  type="text"
                                                    value={datos.horasTrabajadoras.socias}
                                                    name="horasTrabajadoras.socias"
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
                                                   value={datos.client} //Aquí no sé que clase y que variable pasarle
                                                   required/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Horas Asignadas
                                            </label>
                                            <input type="text"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}
                                                   name="horasTrabajadoras.numHorasAsignadas"
                                                   value={datos.horasTrabajadoras.numHorasAsignadas}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Horas Ejecutadas
                                            </label>
                                            <input type="text"
                                                   value={datos.horasTrabajadoras.numHorasEjecutadas}
                                                   name="horasTrabajadoras.numHorasEjecutadas"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Horas Pendientes
                                            </label>
                                            <input type="text"
                                                   value={datos.horasTrabajadoras.numHorasPendientes}
                                                   name="horasTrabajadoras.numHorasPendientes"
                                                   className="experience-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Precio Hora
                                            </label>
                                            <input type="text"
                                                   value={datos.horasTrabajadoras.precioHora}
                                                   name="horasTrabajadoras.precioHora"
                                                   className="form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="experience-form-group">
                                            <label htmlFor="">Total
                                            </label>
                                            <input type="text"
                                                   value={datos.horasTrabajadoras.donePrice}
                                                   name="horasTrabajadoras.donePrice"
                                                   className="form-control"
                                                   onChange={handleInputChange}/>
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


