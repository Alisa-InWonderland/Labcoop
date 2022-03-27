import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./style.css"


export const FacturaEmitidaForm = ({addProject, deleteProject}) => {

    const params = useParams();
    let navigate = useNavigate();
    const location = useLocation();
    const data = location.state ? location.state.data : null;

    let facturaEmitidaOVacia = data.facturaEmitida || {
        client: '',
        facturaEmitida: {
        numFactura: '',
        fecha: '',
        importe: '',
        iva: '',
        total: '',
        cobrado: ''
        }
    };

    let initialState = {...data,
        facturaEmitida: facturaEmitidaOVacia
    };

    const [datos, setDatos] = useState(initialState)

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

    const isCobrado = () => datos.facturaEmitida.cobrado ? 'Sí' : 'No';

    return (
        <div className='section-form-factura-emitida'>
            <section className="factura-emitida-form-section">
                <div className="factura-emitida-form-wrapper">

                    <h1>{data ? 'Factura emitida' : 'Nueva factura'}</h1>
                    <h3>Proyecto {datos.name}</h3>
                    <div className="factura-emitida-form-container">
                        <form className="edit-factura-emitida-form" onSubmit={enviarDatos} action="">

                            <div className="proyecto-container">

                                <div className="factura-emitida-form-group">
                                    <label htmlFor="">Nº Factura
                                    </label>
                                    <input type="text"
                                           className="factura-emitida-form-control"
                                           onChange={handleInputChange}
                                           name="facturaEmitida.numFactura"
                                           value={datos.facturaEmitida.numFactura}
                                    />
                                </div>

                                <div className="factura-emitida-form-group">
                                    <label htmlFor="">Fecha
                                    </label>
                                    <input type="text"
                                           value={datos.facturaEmitida.fecha}
                                           name="facturaEmitida.fecha"
                                           className="factura-emitida-form-control"
                                           onChange={handleInputChange}/>
                                </div>

                                <div className="factura-emitida-form-group">
                                    <label htmlFor="">Cliente</label>
                                    <input type="text"
                                           className="factura-emitida-form-control"
                                           onChange={handleInputChange}
                                           name="client"
                                           value={datos.client}
                                           required/>
                                </div>

                                <div className="factura-emitida-form-group">
                                    <label htmlFor="">Importe
                                    </label>
                                    <input type="text"
                                           className="factura-emitida-form-control"
                                           onChange={handleInputChange}
                                           name="facturaEmitida.importe"
                                           value={datos.facturaEmitida.importe}/>
                                </div>

                                <div className="factura-emitida-form-group">
                                    <label htmlFor="">IVA
                                    </label>
                                    <input type="text"
                                           value={datos.facturaEmitida.iva}
                                           name="facturaEmitida.iva"
                                           className="factura-emitida-form-control"
                                           onChange={handleInputChange}/>
                                </div>

                                <div className="factura-emitida-form-group">
                                    <label htmlFor="">Total
                                    </label>
                                    <input type="text"
                                           value={datos.facturaEmitida.total}
                                           name="facturaEmitida.total"
                                           className="factura-emitida-form-control"
                                           onChange={handleInputChange}/>
                                </div>

                                <div className="factura-emitida-form-group">
                                    <label htmlFor="">Cobrado
                                    </label>
                                    <input type="text"
                                           value={isCobrado()}
                                           name="facturaEmitida.cobrado"
                                           className="form-control"
                                           onChange={handleInputChange}/>
                                </div>

                            </div>

                            <div className="btn-flexbox">
                                <div className="btn-edit-container">
                                    <button type="submit" className="btn-edit">Guardar</button>
                                </div>

                                <div className="btn-edit-container">
                                    <button className="btn-edit" onClick={() => deleteProject(params.id)}>Eliminar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
}


