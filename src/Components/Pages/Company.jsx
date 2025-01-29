import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Company = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Company Name {page}</h1>
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
