import React from "react";
export default function Pad(props) {
  const [onState, setOnState] = React.useState(props.on);
  function handleClick() {
    setOnState((prev) => !prev);
  }
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={onState ? "on" : ""}
      onClick={handleClick}
    ></button>
  );
}
