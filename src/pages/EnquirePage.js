import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Enquire } from "../store/Actions/EnquireAction";

const EnquirePage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var data = JSON.stringify({
      name: inputs.name,
      number: inputs.number,
      query: inputs.query,
      query_for: id,
    });

    dispatch(Enquire(data))
      .unwrap()
      .then((data) => {
        navigate("/thank-you");
      })
      .catch((rejectedValueOrSerializedError) => {
      });
  };

  return (
    <div>
      <h2>Enquiry form for {id}</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter your name: </label>
        <input
          type="text"
          name="name"
          required
          value={inputs.name || ""}
          onChange={handleChange}
        />
        <br />
        <label>Enter your number: </label>
        <input
          type="text"
          name="number"
          required
          value={inputs.number || ""}
          onChange={handleChange}
        />
        <br />
        <label>Enter your query: </label>
        <input
          type="text"
          name="query"
          required
          value={inputs.query || ""}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EnquirePage;
