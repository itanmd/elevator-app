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

let elevators: IElevator[] = [
  {
    floor: 0,
    isBusy: false,
    color: "black",
    chosenFloor: 0,
  },
  {
    floor: 0,
    isBusy: false,
    color: "black",
    chosenFloor: 0,
  },
  {
    floor: 0,
    isBusy: false,
    color: "black",
    chosenFloor: 0,
  },
  {
    floor: 0,
    isBusy: false,
    color: "black",
    chosenFloor: 0,
  },
  {
    floor: 0,
    isBusy: false,
    color: "black",
    chosenFloor: 0,
  },
];

interface Props {
  children?: React.ReactNode;
}

const Grid = () => {
  const [chosenFloor, setChosenFloor] = useState(0);
  const [freeElevator, setFreeElevator] = useState<IElevator | null>(null);

  const handleClick = (floor: any) => {
    console.log(floor);
    let elevator = null;
    setChosenFloor(floor);
    let distance = Math.abs(elevators[0].floor - floor);
    for (let i = 0; i < elevators.length; i++) {
      if (elevators[i].isBusy == false) {
        if (Math.abs(elevators[i].floor - floor) <= distance) {
          distance = Math.abs(elevators[i].floor - floor);
          setFreeElevator(elevators[i]);
          elevator = elevators[i];
        }
      }
    }
    console.log(freeElevator);
    for (let i = 0; i < elevators.length; i++) {
      if (elevator == elevators[i]) {
        console.log("kk");
        elevators[i] = {
          floor: floor,
          isBusy: true,
          color: " red",
          chosenFloor: floor,
        };
      }
    }
    console.log(elevators);
  };

  useEffect(() => {}, [freeElevator]);

  const rows = [];

  for (let i = 0; i < 10; i++) {
    const cols = [];

    for (let j = 0; j < 7; j++) {
      if (i == 9 && j !== 0 && j !== 6) {
        cols.push(
          <div key={`${i}-${j}`} className="col">
            <Elevator
              elevator={elevators[j - 1]}

              // floor={9 - i}
              // color={"black"}
              // isBusy={false}
              // chosenFloor={chosenFloor}
            />
            {/* Empty div */}
          </div>
        );
      } else if (j == 0 && i == 9) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>Ground Floor</h4>
          </div>
        );
      } else if (j == 0 && i == 8) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>{9 - i}st</h4>
          </div>
        );
      } else if (j == 0 && i == 7) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>{9 - i}nd</h4>
          </div>
        );
      } else if (j == 0 && i == 6) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>{9 - i}rd</h4>
          </div>
        );
      } else if (j == 0) {
        cols.push(
          <div key={`${i}-${j}`} className="col floor">
            <h4>{9 - i}th</h4>
          </div>
        );
      } else if (j == 6) {
        cols.push(
          <div
            key={`${i}-${j}`}
            className="col floor"
            onClick={() => handleClick(9 - i)}
          >
            <Button floor={9 - i} />
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
    <div className="container">
      {rows}
      {/* {props.children} */}
    </div>
  );
};

export default Grid;
