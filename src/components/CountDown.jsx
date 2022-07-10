import React, { useState } from "react";

const CountDown = ({ timeInHours }) => {
  const [timeRemaining, setTimeRemaining] = useState(timeInHours);
  let countDownDate = new Date(
    new Date().setHours(new Date().getHours() + timeInHours)
  );

  let x = setInterval(myFunction, 1000 / 60);

  function myFunction() {
    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    setTimeRemaining(hours + "h   " + minutes + "m   " + seconds + "s ");

    if (distance < 0) {
      clearInterval(x);
      setTimeRemaining("0h 0m 0s");
    }
  }

  return <div className="de_countdown">{timeRemaining}</div>;
};

export default CountDown;
