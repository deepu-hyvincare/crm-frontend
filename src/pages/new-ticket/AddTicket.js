import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../component/add-ticket-form/AddTicketForm";
import { Pagebreadcrumb } from "../../component/breadcrumb/breadcrumb";
import { shortText } from "../../utils/Validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFormError = {
  subject: false,
  issueDate: false,
  detail: false,
};
export const AddTicket = () => {
  const [formDataError, setFormDataError] = useState(initialFormError);
  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFormDataError(initialFormError);

    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormError,
      subject: !isSubjectValid,
    });
    console.log("form submit request ", formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Pagebreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row> 
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formData={formData}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
