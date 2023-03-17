import React from "react";
import "./Grid.css";

interface Props {
  children?: React.ReactNode;
}

const Grid = (props: Props) => {
  const rows = [];

  for (let i = 0; i < 10; i++) {
    const cols = [];

    for (let j = 0; j < 5; j++) {
      cols.push(
        <div key={`${i}-${j}`} className="col">
          {/* Empty div */}
        </div>
      );
    }

    rows.push(
      <div key={i} className="row">
        {cols}
      </div>
    );
  }

  return (
    <div className="container">
      {rows}
      {props.children}
    </div>
  );
};

export default Grid;
