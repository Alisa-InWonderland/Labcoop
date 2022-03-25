import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./style.css"
import {getProjects} from "../../Services/getProjects";
import {getFacturasR} from "../../Services/getFacturasR";


export const FacturaRecibidaForm = ({addProject, deleteProject}) => {


    const params  = useParams();

    let navigate = useNavigate();

    const location = useLocation();
    const data = location.state ? location.state.data : null;


    const [project, setProject] = useState(data || {

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
    })

    const handleInputChange = (event) => {
        setProject({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        addProject(project)
            .then(() => navigate("/projects"))
    }


    return (
        <div className='section-form-experience'>
            <section className="experience-form-section">

                    <h1>{data ? 'Factura recibida' : 'Nuevo proyecto'}</h1>
                    <div className="factura-recibida-form-container">
                        <form  className="edit-factura-recibida-form" onSubmit={enviarDatos} action="">

                            <div className="proyecto-container">

                                <div className="datos-proyecto">

                                    <div className="experience-form-group">
                                        <label htmlFor="">Code
                                        </label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               name="code"
                                               value={project.code}
                                            />
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Nombre
                                        </label>
                                    <input type="text"
                                           className="experience-form-control"
                                           onChange={handleInputChange}
                                           name="name"
                                           value={project.name}
                                            />
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Tipo de gasto
                                        </label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               name="expenseType"
                                               value={project.facturasRecibidas.expenseType}
                                        />
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Nº Factura
                                        </label>
                                        <input type="text"
                                               className="experience-form-control"
                                               onChange={handleInputChange}
                                               name="facturasRecibidas.numInvoices"
                                               value={project.facturasRecibidas.numInvoices}
                                               required/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Fecha
                                        </label>
                                        <input  type="text"
                                                className="experience-form-control"
                                                onChange={handleInputChange}
                                                name="facturasRecibidas.date"
                                                value={project.facturasRecibidas.date}
                                                required/>
                                    </div>

                                    <div className="experience-form-group">
                                        <label htmlFor="">Proveedor
                                        </label>
                                        <input  type="text"
                                                className="experience-form-control"
                                                onChange={handleInputChange}
                                                name="facturasRecibidas.supplier"
                                                value={project.facturasRecibidas.supplier}
                                                required/>
                                    </div>

                                <div className="experience-form-group">
                                    <label htmlFor="">Total
                                    </label>
                                    <input type="text"
                                           value={project.facturasRecibidas.cost}
                                           name="facturaRecibida.cost"
                                           className="experience-form-control"
                                           onChange={handleInputChange}/>
                                </div>

                                <div className="experience-form-group">
                                        <label htmlFor="">IVA
                                        </label>
                                        <input type="text"
                                               value={project.facturasRecibidas.iva}
                                               name="facturasRecibidas.iva"
                                               onChange={handleInputChange}/>
                                </div>

                                <div className="experience-form-group">
                                    <label htmlFor="">IRPF
                                    </label>
                                    <input type="text"
                                           value={project.facturasRecibidas.irpf}
                                           name="facturasRecibidas.irpf"
                                           className="experience-form-control"
                                           onChange={handleInputChange}/>
                                </div>
                                    <div className="experience-form-group">
                                        <label htmlFor="">Cobrado
                                        </label>
                                        <input type="text"
                                               value={project.facturasRecibidas.paidOut}
                                               name="facturasRecibidas.paidOut"
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

                        </div>
                    </form>
            </div>
        </section>
    </div>
    );

}


