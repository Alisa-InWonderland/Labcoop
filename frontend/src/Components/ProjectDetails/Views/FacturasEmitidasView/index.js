import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FacturasEmitidasTable } from "../../Tables/FacturasEmitidasTable";
import { FacturaEmitidaForm } from "../../Forms/FacturaEmitidaForm";

export function FacturasEmitidasView({ addProject }) {
  const location = useLocation();
  const data = location.state ? location.state.data : null;

  const [project, setProject] = useState(
    data || {
      client: "",
      facturaEmitida: {
        numFactura: "",
        fecha: "",
        importe: "",
        iva: "",
        total: "",
        cobrado: "",
      },
    }
  );

  function showTable() {
    return project.facturaEmitida !== null;
  }

  return showTable() ? (
    <FacturasEmitidasTable project={project} />
  ) : (
    <FacturaEmitidaForm addProject={addProject} project={project} />
  );
}
