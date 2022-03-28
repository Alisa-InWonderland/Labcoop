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
        addProject(datos)
            .then(() => navigate("/projects"))
    }
    const isPagado = () => datos.facturasRecibidas.paidOut ? 'Sí' : 'No';

    return (
        <div className='section-form-factura-recibida'>
            <section className="factura-recibida-form-section">
                <div className="factura-recibida-form-wrapper">

                <h1>{data ? 'Factura recibida' : 'Nueva factura'}</h1>
                <h3>Proyecto {datos.name}</h3>
                <div className="factura-recibida-form-container">
                    <form className="edit-factura-recibida-form" onSubmit={enviarDatos} action="">

                        <div className="proyecto-container">

                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Code
                                </label>
                                <input type="text"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}
                                       name="code"
                                       value={datos.code}
                                />
                            </div>

                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Nombre
                                </label>
                                <input type="text"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}
                                       name="name"
                                       value={datos.name}
                                />
                            </div>

                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Tipo de gasto
                                </label>
                                <input type="text"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}
                                       name="facturasRecibidas.expenseType"
                                       value={datos.facturasRecibidas.expenseType}
                                />
                            </div>

                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Nº Factura
                                </label>
                                <input type="text"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}
                                       name="facturasRecibidas.numInvoices"
                                       value={datos.facturasRecibidas.numInvoices}

                                />
                            </div>

                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Fecha
                                </label>
                                <input type="text"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}
                                       name="facturasRecibidas.date"
                                       value={datos.facturasRecibidas.date}
                                       required/>
                            </div>

                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Proveedor
                                </label>
                                <input type="text"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}
                                       name="facturasRecibidas.supplier"
                                       value={datos.facturasRecibidas.supplier}
                                       required/>
                            </div>
                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Total
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.cost}
                                       name="facturasRecibidas.cost"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="factura-recibida-form-group">
                                <label htmlFor="">IVA
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.iva}
                                       name="facturasRecibidas.iva"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="factura-recibida-form-group">
                                <label htmlFor="">IRPF
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.irpf}
                                       name="facturasRecibidas.irpf"
                                       className="factura-recibida-form-control"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Total
                                </label>
                                <input type="text"
                                       value={datos.facturasRecibidas.total}
                                       name="facturasRecibidas.total"
                                       className="form-control"
                                       onChange={handleInputChange}/>
                            </div>

                            <div className="factura-recibida-form-group">
                                <label htmlFor="">Pagado
                                </label>
                                <input type="text"
                                       value={isPagado()}
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
                </div>

            </section>
        </div>
    );

}