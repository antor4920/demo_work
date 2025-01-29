import React from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
        molestias deleniti mollitia distinctio tempore alias error ab, quisquam
        consectetur nihil quaerat quod id ea, itaque aliquam consequuntur
        perspiciatis eaque magnam!
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
      <button
        onClick={() => {
          navigate("/Blogs");
        }}
      >
        Blogs
      </button>
    </div>
  );
};

export default Project;
