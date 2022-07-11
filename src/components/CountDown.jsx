import React, { useState } from "react";

const CountDown = ({ timeInHours }) => {
  // const [timeRemaining, setTimeRemaining] = useState(timeInHours);
  var countDownDate = new Date("Sept 5, 2022 15:37:25").getTime();
  const TIME_FROM_NOW = Date.parse(new Date()) + 24 * 60 * 60 * 1000;
  const DEADLINE = new Date(TIME_FROM_NOW);
  const [timeRemaining, setTimeRemaining] = useState(
    Date.parse(DEADLINE) - Date.parse(new Date())
  );

  var x = setInterval(function () {
    var seconds = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    if (1 < 0) {
      clearInterval(x);
      setTimeRemaining("EXPIRED");
    }
  }, 1000 / 60);

  return <div className="de_countdown">{timeRemaining}</div>;
};

export default CountDown;
