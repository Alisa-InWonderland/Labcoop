import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function FacturasRecibidasListItem({ project }) {
  const { code, name, facturasRecibidas } = project;

  return facturasRecibidas.map((factura) => (
    <tr className="facturas-recibidas-table-row">
      <td className="facturas-recibidas-td">{code}</td>
      <td className="facturas-recibidas-td">{name}</td>
      <td className="facturas-recibidas-td">{factura.expenseType}</td>
      <td className="facturas-recibidas-td num-facturaR">
        <Link
          to={`/facturas-recibidas/${factura.id}`}
          state={{ data: project }}
        >
          {factura.numInvoices}
        </Link>
      </td>
      <td className="facturas-recibidas-td">{factura.date}</td>

      <td className="facturas-recibidas-td">{factura.supplier}</td>
      <td className="facturas-recibidas-td">{factura.cost}</td>
      <td className="facturas-recibidas-td">{factura.iva}</td>
      <td className="facturas-recibidas-td">{factura.irpf}</td>
      <td className="facturas-recibidas-td">{factura.total}</td>
      <td className="facturas-recibidas-td">{factura.paidOut ? "Sí" : "No"}</td>
    </tr>
  ));
}
