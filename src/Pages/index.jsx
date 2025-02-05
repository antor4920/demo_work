import React, { useEffect, useState } from "react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((time) => time + 1), 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  let milise = 0,
    sec = 0,
    mini = 0;
  if (time === 100) {
    milise++;
  }

  return (
    <section>
      <h1>Stopwatch</h1>
      <h4>{time}</h4>
      <div>
        {isRunning ? (
          <button
            onClick={() => {
              setisRunning(false);
            }}
          >
            stop
          </button>
        ) : (
          <button
            onClick={() => {
              setisRunning(true);
            }}
          >
            start
          </button>
        )}

        <button
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Index;
