import React from "react";
import { useFormik } from "formik";

const Input_Text = () => {
  const formik = useFormik({
    initialValues: {
      companyname: "",
      position: "",
      details: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.onSubmit}>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            id="companyname"
            name="companyname"
            value={formik.values.companyname}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div>
          <label>Details:</label>
          <input
            type="text"
            id="details"
            name="details"
            value={formik.values.details}
            onChange={formik.handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const About_us = () => {
  return (
    <div>
      <Input_Text />
    </div>
  );
};

export default About_us;
