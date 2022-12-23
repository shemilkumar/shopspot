import React, { useState, useEffect } from "react";

function Countdown() {
  const [countdownHour, setCountdownHour] = useState(0);
  const [countdownMinute, setCountdownMinute] = useState(0);
  const [countdownSecond, setCountdownSecond] = useState(0);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval,
    deadlineHour,
    deadlineMinute = 59,
    deadlineSecond = 59;

  useEffect(() => {
    interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(parseInt(new Date().getMinutes()));
      setSeconds(parseInt(new Date().getSeconds()));
    }, 1000);

    if (hours >= 0 && hours < 8) deadlineHour = 7;
    if (hours >= 8 && hours < 16) deadlineHour = 15;
    if (hours >= 16 && hours < 24) deadlineHour = 23;

    setCountdownHour("0" + (deadlineHour - hours));

    deadlineMinute - minutes >= 10
      ? setCountdownMinute(deadlineMinute - minutes)
      : setCountdownMinute("0" + (deadlineMinute - minutes));

    deadlineSecond - seconds >= 10
      ? setCountdownSecond(deadlineSecond - seconds)
      : setCountdownSecond("0" + (deadlineSecond - seconds));

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      {countdownHour + " : " + countdownMinute + " : " + countdownSecond}
    </div>
  );
}

export default Countdown;

// const now = new Date().getHours();
// const nowm = new Date().getMinutes();
// const nows = new Date().getSeconds();

// //   const start = Date.now();

// //   console.log(nowm + ":" + nows);

// const [countdown, setCountdown] = useState(inputSeconds);
// const timerId = useRef();

// const formatTime = (time) => {
//   let hours = Math.floor(time / 3600);
//   let minutes = Math.floor((time - hours * 3600) / 60);
//   let seconds = Math.floor(time - hours * 3600 - minutes * 60);

//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;

//   return hours + " : " + minutes + " : " + seconds;
// };

// useEffect(() => {
//   timerId.current = setInterval(() => {
//     setCountdown((prev) => prev - 1);
//   }, 1000);
//   return () => clearInterval(timerId.current);
// }, []);

// useEffect(() => {
//   if (countdown < 0) {
//     setCountdown(inputSeconds);
//   }
// }, [countdown]);
