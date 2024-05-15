import React from "react";
import LoginComponent from "../../components/login";
import { Row, Col, Card } from "react-bootstrap";

const Login = () => {

export default function Login() {
  return (
    <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Col md={3}>
        <Card>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <LoginComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
