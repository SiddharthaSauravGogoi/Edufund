import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Search({ searchTerm, handleChange }) {
  return (
    <Form.Control
      type="email"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Type atleast 3 words. Eg: HDF.."
    />
  );
}

Search.propTypes = {
  seachTerm: PropTypes.string,
  handleChange: PropTypes.func,
};
