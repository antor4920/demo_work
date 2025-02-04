import React, { useState } from "react";

let num = 0;

const Index = () => {
  const [time, settime] = useState(num);

  return (
    <section className="Home_body">
      <p>{time}</p>
      <button
        onClick={() => {
          settime(time + 1);
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          settime(num);
        }}
      >
        reset
      </button>
    </section>
  );
};

export default Index;
