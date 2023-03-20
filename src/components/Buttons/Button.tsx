import React from "react";
import "./Button.css";
import { orderElevator } from "../Control/Control";

export interface ICall {
  floor: number;
  // orderTime: number;
}

const Button = (props: any) => {
  const handleClick = () => {
    // orderElevator(props.floor);
  };
  return (
    <div className="row">
      <div className="col">
        <button
          // className="btn btn-success"
          className="btn1 button-3"
          onClick={handleClick}
          id={props.floor}
        >
          Call
        </button>
      </div>
    </div>
  );
};

export default Button;
