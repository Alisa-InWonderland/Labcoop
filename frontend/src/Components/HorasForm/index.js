import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./style.css"



export const HorasForm = ({addProject, deleteProject}) => {

    const params  = useParams();
    let navigate = useNavigate();
    const location = useLocation();
    const data = location.state ? location.state.data : null;
    const horasActual = data.horasTrabajadoras.findIndex(horasTrabajadoras => horasTrabajadoras.id == params.id)

    let introducirHoras = data.horasTrabajadoras[horasActual] || {
        code: '',
        name: '',
        client: '',
        horasTrabajadoras : {
            trabajador: '',
            socias: '',
            numHorasAsignadas: '',
            numHorasEjecutadas: '',
            numHorasPendientes: '',
            precioHora: '',
            donePrice: ''
        }

    };

    let initialState = {
        ...data,
        horasTrabajadoras: introducirHoras
    };

    const [datos, setDatos] = useState(initialState)


    const handleInputChange = (event) => {
        setDatos({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        addProject(datos)
            .then(() => navigate("/horas"))
    }


    return (
        <div className='section-form-horas'>
            <section className="horas-form-section">
                <div className="horas-form-wrapper">

                        <h1>{data ? 'Horas' : 'Introducir horas'}</h1>
                        <h3>Proyecto {datos.name}</h3>
                        <div className="horas-form-container">
                            <form  className="edit-horas-form" onSubmit={enviarDatos} action="">

                                <div className="proyecto-container">

                                    <div className="horas-form-group">
                                        <label htmlFor="">Code
                                        </label>
                                        <input type="text"
                                               className="horas-form-control"
                                               onChange={handleInputChange}
                                               name="code"
                                               value={datos.code}
                                        />
                                    </div>

                                    <div className="horas-form-group">
                                        <label htmlFor="">Nombre
                                        </label>
                                        <input type="text"
                                               className="horas-form-control"
                                               onChange={handleInputChange}
                                               name="name"
                                               value={datos.name}
                                        />
                                    </div>

                                    <div className="horas-form-group">
                                        <label htmlFor="">Cliente
                                        </label>
                                        <input type="text"
                                               className="horas-form-control"
                                               onChange={handleInputChange}
                                               name="client"
                                               value={datos.client}
                                        />
                                    </div>

                                        <div className="horas-form-group">
                                            <label htmlFor="">Trabajador/a
                                            </label>
                                            <input type="text"
                                                   className="horas-form-control"
                                                   onChange={handleInputChange}
                                                   name="horasTrabajadoras.trabajador"
                                                   value={datos.horasTrabajadoras.trabajador}
                                                   />
                                        </div>

                                        <div className="horas-form-group">
                                            <label htmlFor="">Socias
                                            </label>
                                            <input  type="text"
                                                    value={datos.horasTrabajadoras.socias}
                                                    name="horasTrabajadoras.socias"
                                                    className="horas-form-control"
                                                    onChange={handleInputChange}
                                                    required/>
                                        </div>

                                        <div className="horas-form-group">
                                            <label htmlFor="">Horas Asignadas
                                            </label>
                                            <input type="text"
                                                   className="horas-form-control"
                                                   onChange={handleInputChange}
                                                   name="horasTrabajadoras.numHorasAsignadas"
                                                   value={datos.horasTrabajadoras.numHorasAsignadas}/>
                                        </div>

                                        <div className="horas-form-group">
                                            <label htmlFor="">Horas Ejecutadas
                                            </label>
                                            <input type="text"
                                                   value={datos.horasTrabajadoras.numHorasEjecutadas}
                                                   name="horasTrabajadoras.numHorasEjecutadas"
                                                   className="horas-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="horas-form-group">
                                            <label htmlFor="">Horas Pendientes
                                            </label>
                                            <input type="text"
                                                   value={datos.horasTrabajadoras.numHorasPendientes}
                                                   name="horasTrabajadoras.numHorasPendientes"
                                                   className="horas-form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="horas-form-group">
                                            <label htmlFor="">Precio Hora
                                            </label>
                                            <input type="text"
                                                   value={datos.horasTrabajadoras.precioHora}
                                                   name="horasTrabajadoras.precioHora"
                                                   className="form-control"
                                                   onChange={handleInputChange}/>
                                        </div>

                                        <div className="horas-form-group">
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


