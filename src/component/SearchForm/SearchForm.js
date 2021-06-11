import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Form } from "react-bootstrap";
export const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="searchStr"
              placeholder="search"
              value={str}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
