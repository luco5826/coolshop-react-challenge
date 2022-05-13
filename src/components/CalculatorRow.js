import React from "react";
import Operation from "../utils/operations";

const CalculatorRow = ({ row, onChange, onDelete }) => {
  const onValueChange = (event) => {
    const newValue = event.target.value;
    onChange({ ...row, value: Number.parseInt(newValue || 0) });
  };

  const onOperationChange = (event) => {
    const newOperation = event.target.value;
    onChange({ ...row, operation: newOperation });
  };

  const onToggle = () => {
    onChange({ ...row, enabled: !row.enabled });
  };

  const onRowDelete = () => {
    onDelete(row);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <select
        defaultValue={row.operation}
        onChange={onOperationChange}
        disabled={!row.enabled}
      >
        <option value={Operation.PLUS}>+</option>
        <option value={Operation.MINUS}>-</option>
      </select>
      <input
        type="text"
        value={row.value}
        onChange={onValueChange}
        disabled={!row.enabled}
      />
      <button onClick={onRowDelete}>Delete</button>
      <button onClick={onToggle}>{row.enabled ? "Disable" : "Enable"}</button>
    </div>
  );
};

export default CalculatorRow;
