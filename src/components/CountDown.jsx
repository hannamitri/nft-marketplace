import React, { useState } from "react";

const CountDown = () => {
  // // const TIME_FROM_NOW = Date.parse(new Date()) + props.time;
  // // const DEADLINE = new Date(TIME_FROM_NOW);
  // const [timeRemaining, setTimeRemaining] = useState();
  // //   Date.parse(DEADLINE) - Date.parse(new Date())
  // // );

  // let countDownDate = new Date(
  //   new Date().setSeconds(new Date().getSeconds() + 10)
  // );

  // let x = setInterval(myFunction, 1000);

  // function myFunction() {
  //   let now = new Date().getTime();

  //   setTimeRemaining(countDownDate - now);

  //   let hours = Math.floor(
  //     (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  //   let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  //   setTimeRemaining(hours + "h   " + minutes + "m   " + seconds + "s ");

  //   if (timeRemaining < 0) {
  //     clearInterval(x);
  //     setTimeRemaining("0h 0m 0s");
  //   }
  // }

  // -----------------------------------------------------------------

  // Set the date we're counting down to
  var countDownDate = new Date(
    new Date().setSeconds(new Date().getSeconds() + 20)
  );

  // Update the count down every 1 second
  var x = setInterval(myFunction, 1000);

  function myFunction() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for hours, minutes and seconds
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML =
      hours + "h   " + minutes + "m   " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "0h 0m 0s";
    }
  }

  return <div id="countdown"></div>;
};

export default CountDown;
