import React, { useState } from "react";

import "./App.css";
import Grid from "./components/Grid/Grid";
import Button from "./components/Buttons/Button";
import Elevator from "./components/Elevator/Elevator";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Grid />

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
