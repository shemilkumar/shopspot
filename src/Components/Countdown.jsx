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
