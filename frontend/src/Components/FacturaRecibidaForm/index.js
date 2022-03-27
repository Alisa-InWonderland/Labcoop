import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./style.css"


export const FacturaRecibidaForm = ({addProject, deleteProject}) => {

    const params = useParams();
    let navigate = useNavigate();
    const location = useLocation();
    const data = location.state ? location.state.data : null;
    const facturaActual = data.facturasRecibidas.findIndex(facturaRecibida => facturaRecibida.id == params.id)

    let facturaRecibidaVacia = data.facturasRecibidas[facturaActual] || {
        code: '',
        name: '',
        facturasRecibidas: {
            expenseType: '',
            numInvoices: '',
            date: '',
            supplier: '',
            cost: '',
            iva: '',
            irpf: '',
            total: '',
            paidOut: ''
        }
    };

    let initialState = {
        ...data,
        facturasRecibidas: facturaRecibidaVacia
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
        // esto no tiene sentido!!
        // NO ENVIAR TODO EL PROYECTO
        // enviar una factura a
        // POST /projects/{projectId}/facturas-recibidas
        addProject(datos)
            .then(() => navigate("/projects"))
    }


    return (
        <div className='section-form-experience'>
            <section className="experience-form-section">

                <h1>{data ? 'Factura recibida' : 'Nueva factura'}</h1>
                <h3>Proyecto {datos.name}</h3>
                <div className="factura-recibida-form-container">
                    <form className="edit-factura-recibida-form" onSubmit={enviarDatos} action="">

                        <div className="proyecto-container">

                            <div className="experience-form-group">
                                <label htmlFor="">Code
                                </label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="code"
                                       value={datos.code}
                                />
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">Nombre
                                </label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="name"
                                       value={datos.name}
                                />
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">Tipo de gasto
                                </label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="facturasRecibidas.expenseType"
                                       value={datos.facturasRecibidas.expenseType}
                                />
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">Nº Factura
                                </label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="facturasRecibidas.numInvoices"
                                       value={datos.facturasRecibidas.numInvoices}

                                />
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">Fecha
                                </label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="facturasRecibidas.date"
                                       value={datos.facturasRecibidas.date}
                                       required/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">Proveedor
                                </label>
                                <input type="text"
                                       className="experience-form-control"
                                       onChange={handleInputChange}
                                       name="facturasRecibidas.supplier"
                                       value={datos.facturasRecibidas.supplier}
                                       required/>
                            </div>
                            <div className="experience-form-group">
                                <label htmlFor="">Total
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.cost}
                                       name="facturasRecibidas.cost"
                                       className="experience-form-control"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="experience-form-group">
                                <label htmlFor="">IVA
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.iva}
                                       name="facturasRecibidas.iva"
                                       className="experience-form-control"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="experience-form-group">
                                <label htmlFor="">IRPF
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.irpf}
                                       name="facturasRecibidas.irpf"
                                       className="experience-form-control"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="experience-form-group">
                                <label htmlFor="">Cobrado
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.total}
                                       name="facturasRecibidas.total"
                                       className="form-control"
                                       onChange={handleInputChange}/>
                            </div>

                            <div className="experience-form-group">
                                <label htmlFor="">Cobrado
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.paidOut}
                                       name="facturasRecibidas.paidOut"
                                       className="form-control"
                                       onChange={handleInputChange}/>
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
                        </div>
                    </form>
                </div>


            </section>
        </div>
    );

}