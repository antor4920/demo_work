import React from "react";
import { Link } from "react-router-dom";
import { MyData } from "../../Data/Data";

const Blogs = () => {
  return (
    <div>
      {MyData.map((Data) => {
        return (
          <article key={Data.id}>
            <h1>{Data.company}</h1>
            <p>{Data.details}</p>
            <Link to={Data.company} state={Data.details}>
              Learn more
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Blogs;
