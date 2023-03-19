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
  const [allElevators, setAllElevators] = useState(elevators);
  const [freeElevator, setFreeElevator] = useState<IElevator | null>(null);

  const handleClick = (floor: any) => {
    console.log(floor);
    let elevator = null;
    setChosenFloor(floor);
    let distance = Math.abs(allElevators[0].floor - floor);
    for (let i = 0; i < allElevators.length; i++) {
      if (allElevators[i].isBusy == false) {
        if (Math.abs(allElevators[i].floor - floor) <= distance) {
          distance = Math.abs(allElevators[i].floor - floor);
          // setFreeElevator(allElevators[i]);
          elevator = allElevators[i];
        }
      }
    }
    console.log(elevator);
    let array = allElevators;
    for (let i = 0; i < array.length; i++) {
      if (elevator == array[i]) {
        console.log("ll");
        array[i] = {
          floor: floor,
          isBusy: true,
          color: "red",
          chosenFloor: floor,
        };
        elevators[i] = {
          floor: floor,
          isBusy: true,
          color: "red",
          chosenFloor: floor,
        };
        // let array = allElevators;
        console.log(array);
        setAllElevators(array);
        // setTimeout(() => {
        //   console.log(i);
        //   allElevators[i] = {
        //     floor: floor,
        //     isBusy: false,
        //     color: "black",
        //     chosenFloor: floor,
        //   };
        //   setAllElevators(allElevators);
        // }, 2000);
      }
    }
  };
  // setAllElevators(elevators);
  console.log(allElevators);

  // useEffect(() => {
  //   console.log(allElevators);
  // }, [allElevators]);

  const rows = [];

  let elevatorsUi = elevators.map((item, index) => {
    return <Elevator elevator={elevators[index]} />;
  });

  for (let i = 0; i < 10; i++) {
    const cols = [];

    for (let j = 0; j < 7; j++) {
      if (i == 9 && j !== 0 && j !== 6) {
        cols.push(
          <div key={`${i}-${j}`} className="col">
            <Elevator
              elevator={elevators[j - 1]}
              setAllElevators={setAllElevators}
              allElevators={allElevators}
              elevators={elevators}
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
