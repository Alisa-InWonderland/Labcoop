import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./style.css"


export const HorasForm = ({addProject, deleteProject}) => {

    const params  = useParams();

    let navigate = useNavigate();

    const location = useLocation();
    const data = location.state ? location.state.data : null;

    const [datos, setDatos] = useState(data || {
        client: '',
        facturaEmitida: {
        numFactura: '',
        fecha: '',
        importe: '',
        iva: '',
        total: '',
        cobrado: ''
        }
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

                    <h1>{data ? 'Horas' : 'Nuevo proyecto'}</h1>
                    <div className="experience-form-container">
                        <form  className="edit-experience-form" onSubmit={enviarDatos} action="">

                            <div className="proyecto-container">

                                <div className="datos-proyecto">

                                    <div className="experience-form-group">
                                        <label htmlFor="">Nº Factura
                                        </label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               name="code"
                                               value={datos.facturaEmitida.numFactura}
                                               />
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Fecha
                                        </label>
                                        <input  type="text"
                                                value={datos.facturaEmitida.fecha}
                                                name="facturaEmitida.fecha"
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
                                        <label htmlFor="">Importe
                                        </label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               name="facturaEmitida.importe"
                                               value={datos.facturaEmitida.importe}/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">IVA
                                        </label>
                                        <input type="text"
                                               value={datos.facturaEmitida.iva}
                                               name="facturaEmitida.iva"
                                               className="experience-form-control"
                                               onChange={handleInputChange}/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Total
                                        </label>
                                        <input type="text"
                                               value={datos.facturaEmitida.total}
                                               name="facturaEmitida.total"
                                               className="experience-form-control"
                                               onChange={handleInputChange}/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Cobrado
                                        </label>
                                        <input type="text"
                                               value={datos.facturaEmitida.cobrado}
                                               name="facturaEmitida.cobrado"
                                               className="form-control"
                                               onChange={handleInputChange}/>
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


