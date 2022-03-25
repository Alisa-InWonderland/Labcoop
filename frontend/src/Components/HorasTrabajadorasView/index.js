import {HorasForm} from "../HorasForm";
import * as React from "react";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import * as PropTypes from "prop-types";
import {HorasTrabajadorasTable} from "../HorasTrabajadorasTable";


HorasTrabajadorasTable.propTypes = {project: PropTypes.any};

export function HorasTrabajadorasView({addProject}) {

    const [editMode, setEditMode] = useState(false);

    const location = useLocation();
    const data = location.state ? location.state.data : null;

    const [project, setProject] = useState(data || {
        cliente: '',
        trabajador: '',
        horasTrabajadoras : {
            socias: '',
            numHorasAsignadas: '',
            numHorasEjecutadas: '',
            numHorasPendientes: '',
            precioHora: '',
            donePrice: ''
        }
    })

    function showTable() {
        return !editMode && project.horasTrabajadoras;
    }

    return showTable() ? <HorasTrabajadorasTable project={project} /> :
        <HorasForm addProject={addProject} value="3"/>
}









