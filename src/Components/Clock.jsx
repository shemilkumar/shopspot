import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let TimeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(TimeId);
    };
  });

  return <div>{time.toLocaleTimeString()} </div>;
}

export default Clock;
