import React, { useEffect, useState } from "react";
import "./Grid.css";
import Elevator from "../Elevator/Elevator";
import Button from "../Buttons/Button";
// import IElevator from "../Elevator/Elevator";

export interface IElevator {
  floor: number;
  isBusy?: boolean;
  color?: string;
  chosenFloor?: number;
}

// let elevators: IElevator[] = [
//   {
//     floor: 0,
//     isBusy: false,
//     color: "black",
//     chosenFloor: 0,
//   },
//   {
//     floor: 0,
//     isBusy: false,
//     color: "black",
//     chosenFloor: 0,
//   },
//   {
//     floor: 0,
//     isBusy: false,
//     color: "black",
//     chosenFloor: 0,
//   },
//   {
//     floor: 0,
//     isBusy: false,
//     color: "black",
//     chosenFloor: 0,
//   },
//   {
//     floor: 0,
//     isBusy: false,
//     color: "black",
//     chosenFloor: 0,
//   },
// ];

interface Props {
  children?: React.ReactNode;
}

const Grid = (props: any) => {
  const [chosenFloor, setChosenFloor] = useState(0);
  const [floor, setFloor] = useState(0);
  // const [props.allElevators, setAllElevators] = useState(elevators);
  const [freeElevator, setFreeElevator] = useState<IElevator | null>(null);

  useEffect(() => {
    let buttons = document.getElementsByClassName("btn1") as any;
    for (let button of buttons) {
      if (button.id == floor) {
        button.className = "btn1 button";
        button.style.background = "#f4f5f4";
        button.innerText = "Arrived";
        setTimeout(() => {
          button.className = "btn1 button-3";
          button.style.background = "#298e46";
          button.innerText = "Call";
        }, 2000);
      }
    }
  }, [floor]);

  useEffect(() => {
    let buttons = document.getElementsByClassName("btn1") as any;
    for (let button of buttons) {
      button.className = "btn1 button-3";
      button.style.background = "#298e46";
      button.innerText = "Call";
    }
  }, []);

  const handleClick = (e: any, floor: number) => {
    // if (e.target.className == "btn1") e.target.style.background = "red";
    // if (e.target.className === "btn1 button-3") {
    //   e.target.style.background = "red";
    //   e.target.innerText = "Waiting";
    // }
    let elevator = null;
    setChosenFloor(floor);
    let distance = Math.abs(props.allElevators[0].floor - floor);
    for (let i = 0; i < props.allElevators.length; i++) {
      if (props.allElevators[i].isBusy == false) {
        if (Math.abs(props.allElevators[i].floor - floor) <= distance) {
          distance = Math.abs(props.allElevators[i].floor - floor);
          elevator = props.allElevators[i];
        }
      }
    }
    let array = props.allElevators;
    for (let i = 0; i < array.length; i++) {
      if (elevator == array[i] && distance !== 0) {
        if (e.target.className === "btn1 button-3") {
          e.target.style.background = "red";
          e.target.innerText = "Waiting";
        }
        array[i] = {
          floor: floor,
          isBusy: true,
          color: "red",
          chosenFloor: floor,
        };
        props.allElevators[i] = {
          floor: floor,
          isBusy: true,
          color: "red",
          chosenFloor: floor,
        };

        props.setAllElevators(array);
      }
    }
  };
  // setprops.allElevators(elevators);
  console.log(props.allElevators);

  // useEffect(() => {
  //   console.log(props.allElevators);
  // }, [props.allElevators]);

  const rows = [];

  // let elevatorsUi = elevators.map((item, index) => {
  //   return <Elevator elevator={elevators[index]} />;
  // });

  for (let i = 0; i <= props.numberOfFloor; i++) {
    const cols = [];

    for (let j = 0; j <= props.numberOfElevator + 1; j++) {
      if (
        i == props.numberOfFloor &&
        j !== 0 &&
        j !== props.numberOfElevator + 1
      ) {
        console.log(j);
        cols.push(
          <div key={`${i}-${j}`} className="col">
            <Elevator
              elevator={props.allElevators[j - 1]}
              setAllElevators={props.setAllElevators}
              allElevators={props.allElevators}
              // elevators={elevators}
              setFloor={setFloor}
            />
            {/* Empty div */}
          </div>
        );
      } else if (j == 0 && i == props.numberOfFloor) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>Ground Floor</h4>
          </div>
        );
      } else if (j == 0 && i == 8) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>{props.numberOfFloor - i}st</h4>
          </div>
        );
      } else if (j == 0 && i == 7) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>{props.numberOfFloor - i}nd</h4>
          </div>
        );
      } else if (j == 0 && i == 6) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>{props.numberOfFloor - i}rd</h4>
          </div>
        );
      } else if (j == 0) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>{props.numberOfFloor - i}th</h4>
          </div>
        );
      } else if (j == props.numberOfElevator + 1) {
        cols.push(
          <div
            key={`${i}-${j}`}
            className="col floor"
            onClick={(e) => handleClick(e, props.numberOfFloor - i)}
          >
            <Button
              className="button"
              id={props.numberOfFloor - i}
              floor={props.numberOfFloor - i}
              allElevators={props.allElevators}
            />
          </div>
        );
      } else {
        cols.push(
          <div key={`${i}-${j}`} className="col">
            {/* Empty div */}
          </div>
        );
      }
    }

    rows.push(
      <div key={i} className="row">
        {cols}
      </div>
    );
  }

  return (
    // <div>
    <div className="container">
      {rows}
      {/* {props.children} */}
    </div>
    // </div>
  );
};

export default Grid;
