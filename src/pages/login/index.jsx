import React from "react";
<<<<<<< HEAD
import LoginComponent from "../../components/Login";
=======
import LoginComponent from "../../components/login";
>>>>>>> caee406c61e7f58a11598aa79edffb48163bc975
import { Row, Col, Card } from "react-bootstrap";

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
}
