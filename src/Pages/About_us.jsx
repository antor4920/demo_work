import React, { useState } from "react";
import { useFormik } from "formik";

// -----------------------Input component --------------------------------------

const Input_Text = ({ Box }) => {
  const formik = useFormik({
    initialValues: {
      companyname: "",
      position: "",
      details: "",
    },
    onSubmit: (values, { resetForm }) => {
      Box(values);
      resetForm((values = ""));
    },
  });

  return (
    <div className="Input_Container">
      <form onSubmit={formik.handleSubmit} className="Form">
        <div className="Input_label_container">
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
        <div className="Input_label_container">
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
        <div className="Input_label_container">
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
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

// ----------------------Mapping component-------------------------------------------------------------

const MappingT = (props) => {
  return (
    <div className="info_box">
      {props.mappingItem.map((item, index) => {
        return <MapItem key={index} Item={item} />;
      })}
    </div>
  );
};

const MapItem = (props) => {
  const { companyname, position, details } = props.Item;
  return (
    <article>
      <div className="Div1">
        <h1 className="Country_name">{companyname}</h1>
        <h3 className="Country_name">{position}</h3>
        <p className="Country_name">{details}</p>
      </div>
    </article>
  );
};

// -------------------------- Main page-------------------------------------------------------------------

const Arrr = [
  {
    companyname: "Google",
    position: "Unknown",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum quasi aliquid unde illo quisquam nemo dolore eos autem? Iusto!",
  },
];
const About_us = () => {
  const [inputItem, setinputItem] = useState(Arrr);

  const box = (event) => {
    setinputItem([...inputItem, event]);
  };

  return (
    <div>
      <Input_Text Box={box} />
      {/* <p>{inputItem.position}</p> */}
      <MappingT mappingItem={inputItem} />
    </div>
  );
};

export default About_us;
