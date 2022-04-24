import { HorasForm } from "../../Forms/HorasForm";
import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HorasTrabajadorasTable } from "../../Tables/HorasTrabajadorasTable";

export function HorasTrabajadorasView({ addProject }) {
  const [editMode, setEditMode] = useState(false);

  const location = useLocation();
  const data = location.state ? location.state.data : null;

  const [project, setProject] = useState(
    data || {
      code: "",
      name: "",
      client: "",
      horasTrabajadoras: {
        trabajador: "",
        socias: "",
        numHorasAsignadas: "",
        numHorasEjecutadas: "",
        numHorasPendientes: "",
        precioHora: "",
        donePrice: "",
      },
    }
  );

  function showTable() {
    return !editMode && project.horasTrabajadoras.length !== 0;
  }

  return showTable() ? (
    <HorasTrabajadorasTable project={project} editMode={editMode} />
  ) : (
    <HorasForm addProject={addProject} value="3" />
  );
}
