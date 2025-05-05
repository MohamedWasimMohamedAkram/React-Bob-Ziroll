import React from "react";
import "./App.css";
import Pad from "./components/Pad.jsx";
import padsData from "./pads";

function App() {
  const [pads, setPads] = React.useState(padsData);
  const padButtons = pads.map((button) => (
    <Pad key={button.id} color={button.color} on={button.on} />
  ));
  return (
    <main>
      <div className="pad-container">{padButtons}</div>
    </main>
  );
}

export default App;
