import React from "react";
import PropTypes from "prop-types"
import { Container, Row,Col, Form, Button } from "react-bootstrap";
 const ResetPassword = ({handleOnChange,email,formSwitcher,handleOnResetSubmit}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className=" text center">Forgot Password</h1>
          <hr />
          <Form autoComplete= "nope" onSubmit = {handleOnResetSubmit}  >
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="enter email"
                value={email}
                onChange = {handleOnChange}
                required
                autoComplete= "nope"
              />
            </Form.Group>
            <br/>
           
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
      <hr/>
      <Row>
          <Col>
          <a href="#!" onClick={()=>formSwitcher('login')}>Login Page</a>
          </Col>
      </Row>
    </Container>
  );
};
ResetPassword.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    formSwitcher:PropTypes.func.isRequired,
   
}
export default ResetPassword;