import React from "react";
import "./Button.css";

const Button = (props: any) => {
  return (
    <div className="row">
      <div className="col">
        <button className="btn1 button-3" id={props.floor}>
          Call
        </button>
      </div>
    </div>
  );
};

export default Button;
