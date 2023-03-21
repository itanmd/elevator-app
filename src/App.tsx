import React, { useEffect, useState } from "react";

import "./App.css";
import Grid from "./components/Grid/Grid";
import Button from "./components/Buttons/Button";
import Elevator from "./components/Elevator/Elevator";

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

  useEffect(() => {
    let array: IElevator[] = [];
    setAllElevators([...array]);
    for (let i = 0; i < numberOfElevator; i++) {
      let elevator = {
        floor: 0,
        isBusy: false,
        color: "black",
        chosenFloor: 0,
      };
      array.push(elevator);
    }
    setAllElevators([...array]);
  }, []);

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
          <h3>Enter number of floors</h3>
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

        {/* <Button floor={0} />
        <Button floor={1} />
        <Button floor={2} />
        <Button floor={3} />
        <Button floor={4} /> */}
      </div>
    </>
  );
}

export default App;
