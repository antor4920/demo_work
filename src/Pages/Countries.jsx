import React from "react";

import { data } from "../Data/Data";

const Countries = () => {
  return (
    <div>
      <section className="country_body">
        {data.map((Data) => {
          const { id, image, country, details } = Data;
          return (
            <div key={id} className="card">
              <img className="CardImage" src={image} alt={image} />
              <h1 className="Country_name">{country}</h1>
              <p className="Country_name">{details.slice(0, 100)}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Countries;
