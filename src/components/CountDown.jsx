import React from "react";

const CountDown = () => {
  const TIME_FROM_NOW = Date.parse(new Date()) + props.time;
  const DEADLINE = new Date(TIME_FROM_NOW);
  const [timeRemaining, setTimeRemaining] = useState(
    Date.parse(DEADLINE) - Date.parse(new Date())
  );

  return <div>{timeRemaining}</div>;
};

export default CountDown;
