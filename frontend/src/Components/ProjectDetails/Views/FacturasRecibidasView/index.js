import {FacturaRecibidaForm} from "../../Forms/FacturaRecibidaForm";
import * as React from "react";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import * as PropTypes from "prop-types";
import {FacturasRecibidasTable} from "../../Tables/FacturasRecibidasTable";

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
        return !editMode && project.facturasRecibidas.length !== 0;
    }

    return showTable() ? <FacturasRecibidasTable project={project} /> :
        <FacturaRecibidaForm addProject={addProject} project={project} value="3"/>
}









