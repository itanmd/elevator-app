import React, { useState } from "react";

import "./App.css";
import Grid from "./components/Grid/Grid";
import Button from "./components/Buttons/Button";
import Elevator from "./components/Elevator/Elevator";

function App() {
  const [numberOfFloor, setNumberOfFloor] = useState<number>(9);

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
        <Grid numberOfFloor={numberOfFloor} />

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
