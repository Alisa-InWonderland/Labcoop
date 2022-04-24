import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import classnames from "classnames";

export function ProjectListItem({ project }) {
  const {
    id,
    code,
    name,
    client,
    status,
    type,
    target,
    previousBudget,
    previousCoCost,
    previousExtExpenses,
    workersExpenses,
    managePercent,
    otherExpenses,
    margin,
  } = project;

  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell}>{code}</td>
      <td className={classnames(styles.tableCell, styles.cellLink)}>
        <Link to={`/projects/${id}`} state={{ data: project }}>
          {name}
        </Link>
      </td>
      <td className={styles.tableCell}>{client}</td>
      <td className={styles.tableCell}>{status}</td>
      <td className={styles.tableCell}>{type}</td>
      <td className={styles.tableCell}>{target}</td>
      <td className={styles.tableCell}>{previousBudget}</td>
      <td className={styles.tableCell}>{previousCoCost}</td>
      <td className={styles.tableCell}>{previousExtExpenses}</td>
      <td className={styles.tableCell}>{workersExpenses}</td>
      <td className={styles.tableCell}>{managePercent}</td>
      <td className={styles.tableCell}>{otherExpenses}</td>
      <td className={styles.tableCell}>{margin}</td>
    </tr>
  );
}
