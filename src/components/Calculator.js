import React, { useState } from "react";
import uuid from "react-uuid";
import Operation from "../utils/operations";
import CalculatorRow from "./CalculatorRow";

const defaultNewRow = {
  id: -1,
  operation: Operation.PLUS,
  value: 0,
  enabled: true,
};

const reduceRowsToResult = (result, row) => {
  if (!row.enabled) {
    return result;
  }

  switch (row.operation) {
    case Operation.PLUS:
      result += row.value;
      break;
    case Operation.MINUS:
      result -= row.value;
      break;

    default:
      break;
  }

  return result;
};

const Calculator = () => {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows([...rows, { ...defaultNewRow, id: uuid() }]);
  };

  const onRowChange = (row) => {
    const index = rows.findIndex((r) => r.id === row.id);
    if (index !== -1) {
      rows[index] = { ...row };
    }

    setRows([...rows]);
  };

  const onRowDelete = (row) => {
    setRows(rows.filter((r) => r.id !== row.id));
  };

  return (
    <div>
      <button onClick={addRow}>Add row</button>
      <ul>
        {rows.map((row) => (
          <li key={row.id} style={{ maxWidth: "400px" }}>
            <CalculatorRow
              row={row}
              onChange={onRowChange}
              onDelete={onRowDelete}
            />
          </li>
        ))}
      </ul>
      <p>Result: {rows.reduce(reduceRowsToResult, 0)}</p>
    </div>
  );
};

export default Calculator;
