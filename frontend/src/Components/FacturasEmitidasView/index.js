import {FacturaRecibidaForm} from "../FacturaRecibidaForm";
import * as React from "react";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import * as PropTypes from "prop-types";
import {FacturasEmitidasTable} from "../FacturasEmitidasTable";
import {FacturaEmitidaForm} from "../FacturaEmitidaForm";

FacturasEmitidasTable.propTypes = {project: PropTypes.any};

export function FacturasEmitidasView({addProject}) {

    const [editMode, setEditMode] = useState(false);

    const location = useLocation();
    const data = location.state ? location.state.data : null;

    const [project, setProject] = useState(data || {
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

    function showTable() {
        return !editMode && project.facturaEmitida !== null;
    }

    return showTable() ? <FacturasEmitidasTable project={project} /> :

        <FacturaEmitidaForm addProject={addProject} project={project} value="2"/>

}