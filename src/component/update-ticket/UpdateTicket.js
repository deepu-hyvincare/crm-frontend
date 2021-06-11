import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>reply</Form.Label>
      <Form.Text>reply please</Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        onChange={handleOnChange}
        value={msg}
      />
      <div className="text-right mt-3 mb-3">
        <Button varient="info" type="submit">
          reply
        </Button>
      </div>
    </Form>
  );
};
UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
