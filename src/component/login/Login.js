import React from "react";
import PropTypes from "prop-types"
import { Container, Row,Col, Form, Button } from "react-bootstrap";
 const Login = ({handleOnChange,email,password,formSwitcher,handleOnSubmit}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className=" text center">Client Login</h1>
          <hr />
          <Form autoComplete= "nope" onSubmit = {handleOnSubmit}  >
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
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="enter password"
                value={password}
                onChange = {handleOnChange}
                required
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
              <a href="#!" onClick={()=>formSwitcher('reset')}>Forgot Password</a>
          </Col>
      </Row>
    </Container>
  );
};
Login.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,

}
export default Login