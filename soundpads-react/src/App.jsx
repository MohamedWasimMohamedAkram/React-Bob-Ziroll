import React from "react";
import "./App.css";
import Pad from "./components/Pad.jsx";
import padsData from "./pads";

function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    setPads((prev) =>
      prev.map((item) => {
        return item.id === id
          ? {
              ...item,
              on: !item.on,
            }
          : item;
      })
    );
  }

  const padButtons = pads.map((button) => (
    <Pad
      key={button.id}
      color={button.color}
      on={button.on}
      toggle={toggle}
      id={button.id}
    />
  ));

  return (
    <main>
      <div className="pad-container">{padButtons}</div>
    </main>
  );
}

export default App;
