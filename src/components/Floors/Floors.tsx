import React from "react";
import "./Floors.css";
const Floors = () => {
  const rows = [];

  for (let i = 0; i < 10; i++) {
    const cols = [];
    for (let j = 0; j < 1; j++) {
      cols.push(
        <div key={`${i}-${j}`} className="col">
          ground floor
        </div>
      );
    }
    rows.push(
      <div key={i} className="row">
        {cols}
      </div>
    );
  }
  return <div>{rows}</div>;
};

export default Floors;
