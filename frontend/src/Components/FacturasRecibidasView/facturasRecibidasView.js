import {FacturaRecibidaForm} from "../FacturaRecibidaForm";
import * as React from "react";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import * as PropTypes from "prop-types";
import {FacturasRecibidasTable} from "../FacturasRecibidasTable/facturasRecibidasTable";
import {FacturaRecibidaForm} from "../FacturaRecibidaForm";

FacturasRecibidasTable.propTypes = {project: PropTypes.any};

export function FacturasRecibidasView({addProject}) {

    const [editMode, setEditMode] = useState(false);

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

    function showTable() {
        return !editMode && project.facturasRecibidas;
    }

    return showTable() ? <FacturasRecibidasTable project={project} /> :
        <FacturaRecibidaForm addProject={addProject} value="3"/>
}