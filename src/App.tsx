import React, { useState } from "react";

import "./App.css";
import Grid from "./components/Grid/Grid";

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

function App() {
  const [numberOfFloor, setNumberOfFloor] = useState<number>(9);
  const [numberOfElevator, setNumberOfElevator] = useState<number>(5);
  const [allElevators, setAllElevators] = useState<IElevator[]>(elevators);

  const changeNumberOfElevator = (e: any) => {
    let number = e.target.value;
    let array: IElevator[] = allElevators;
    if (number > allElevators.length) {
      let elevator = {
        floor: 0,
        isBusy: false,
        color: "black",
        chosenFloor: 0,
      };
      array.push(elevator);
    } else if (number < allElevators) {
      array.pop();
    }
    setAllElevators([...array]);
    setNumberOfElevator(Number(e.target.value));
  };
  return (
    <>
      <div className="container-fluid">
        <div id="divInput">
          <h3>Enter number of floors</h3>
          <input
            value={numberOfFloor}
            type="number"
            onChange={(e) => setNumberOfFloor(Number(e.target.value))}
          ></input>
        </div>
        <div id="divInput">
          <h3>Enter number of elevators</h3>
          <input
            value={numberOfElevator}
            type="number"
            onChange={(e) => changeNumberOfElevator(e)}
          ></input>
        </div>
        <Grid
          numberOfFloor={numberOfFloor}
          numberOfElevator={numberOfElevator}
          allElevators={allElevators}
          setAllElevators={setAllElevators}
        />
      </div>
    </>
  );
}

export default App;
