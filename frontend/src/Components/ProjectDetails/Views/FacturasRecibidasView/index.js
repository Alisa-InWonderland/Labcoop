import { FacturaRecibidaForm } from "../../Forms/FacturaRecibidaForm";
import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FacturasRecibidasTable } from "../../Tables/FacturasRecibidasTable";

export function FacturasRecibidasView({ addProject }) {
  const location = useLocation();
  const data = location.state ? location.state.data : null;

  const [project, setProject] = useState(
    data || {
      code: "",
      name: "",
      facturasRecibidas: {
        expenseType: "",
        numInvoices: "",
        date: "",
        supplier: "",
        cost: "",
        iva: "",
        irpf: "",
        total: "",
        paidOut: "",
      },
    }
  );

  function showTable() {
    return project.facturasRecibidas.length !== 0;
  }

  return showTable() ? (
    <FacturasRecibidasTable project={project} />
  ) : (
    <FacturaRecibidaForm addProject={addProject} project={project} />
  );
}
