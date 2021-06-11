import React from "react";
import "./add-ticket-form.css";
import PropTypes from "prop-types";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
export const AddTicketForm = ({
  handleOnChange,
  handleOnSubmit,
  formData,
  formDataError,
}) => {
  console.log(formData);
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info mt-3 text-center">Add New Ticket</h1>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2} className="form-lab" >
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={formData.subject}
               // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger"> 
              {formDataError.subject && "Subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
        <Form.Label column sm={2} className="form-lab" >
            Issue Date
          </Form.Label>
          <Col sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleOnChange}
                required
              />
          </Col>
        </Form.Group>
        <br />
        <Form.Group>
        <Form.Label column sm={2} className="form-lab" >
          Details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="3"
           value={formData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info"  size="lg" block >
         Book Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};
AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formDataError: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
};
