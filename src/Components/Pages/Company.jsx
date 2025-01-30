import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Company = () => {
  const location = useLocation();
  const { page } = useParams();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div>
      <h1>Company Name {page}</h1>
      <p>{location.state}</p>

      <button
        onClick={() => {
          navigate("/Blogs");
        }}
      >
        Back to Blogs
      </button>
    </div>
  );
};

export default Company;
