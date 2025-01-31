import React from "react";

import { data } from "../../Data/Data";

const Countries = () => {
  return (
    <div>
      <section className="country_body">
        {data.map((Data) => {
          const { id, country, details } = Data;
          return (
            <div key={id} className="card">
              <h1 className="Country_name">{country}</h1>
              <p>{details}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Countries;
