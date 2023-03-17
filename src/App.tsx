import React, { useState } from "react";

import "./App.css";
import Grid from "./components/Grid/Grid";
import Button from "./components/Buttons/Button";
import Floors from "./components/Floors/Floors";
import Elevator from "./components/Elevator/Elevator";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Floors />
        <Grid>
          <Elevator floor={} />
          <Elevator top={eleLocation2} />
          <Elevator top={eleLocation3} />
          <Elevator top={eleLocation4} />
          <Elevator top={eleLocation5} />
        </Grid>
        <Button floor={0} />
        <Button floor={1} />
        <Button floor={2} />
        <Button floor={3} />
        <Button floor={4} />
      </div>
    </>
  );
}

export default App;
