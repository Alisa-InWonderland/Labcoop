import { HorasForm } from "../../Forms/HorasForm";
import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HorasTrabajadasTable } from "../../Tables/HorasTrabajadasTable";

export function HorasTrabajadorasView({ addProject }) {
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
    return project.horasTrabajadoras.length !== 0;
  }

  return showTable() ? (
    <HorasTrabajadasTable project={project} />
  ) : (
    <HorasForm addProject={addProject} project={project} />
  );
}
