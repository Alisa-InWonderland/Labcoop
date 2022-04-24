import React from "react";
import "./style.css";

export function HoursListItem({ project }) {
  const { code, name, client, horasTrabajadoras } = project;

  return horasTrabajadoras.map((horasTrabajador) => (
    <tr className="horas-trabajadoras-table-row">
      <td className="horas-trabajadoras-td">{code}</td>
      <td className="horas-trabajadoras-td">{name}</td>
      <td className="horas-trabajadoras-td">{client}</td>
      <td className="horas-trabajadoras-td">{horasTrabajador.trabajador}</td>
      <td className="horas-trabajadoras-td">{horasTrabajador.socias}</td>
      <td className="horas-trabajadoras-td">
        {horasTrabajador.numHorasAsignadas}
      </td>
      <td className="horas-trabajadoras-td">
        {horasTrabajador.numHorasEjecutadas}
      </td>
      <td className="horas-trabajadoras-td">
        {horasTrabajador.numHorasPendientes}
      </td>
      <td className="horas-trabajadoras-td">{horasTrabajador.precioHora}</td>
      <td className="horas-trabajadoras-td">{horasTrabajador.donePrice}</td>
    </tr>
  ));
}
