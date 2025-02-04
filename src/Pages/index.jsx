import React, { useEffect, useState } from "react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [isRunning, SetisRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <section className="Home_body">
      <p>{time}</p>

      <button
        onClick={() => {
          SetisRunning(true);
        }}
      >
        start
      </button>

      <button
        onClick={() => {
          SetisRunning(false);
        }}
      >
        stop
      </button>
    </section>
  );
};

export default Index;
