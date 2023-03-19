import React from "react";
import "./Button.css";
import { orderElevator } from "../Control/Control";

export interface ICall {
  floor: number;
  // orderTime: number;
}

const Button = (props: ICall) => {
  const handleClick = () => {
    // orderElevator(props.floor);
  };
  return (
    <div className="row">
      <div className="col">
        <button className="btn btn-success" onClick={handleClick}>
          call
        </button>
      </div>
    </div>
  );
};

export default Button;
