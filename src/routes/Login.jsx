import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import Logo from "../images/logo.webp";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.REACT_APP_LOGIN, formData);
      if (response.status === 200) {
        const { name, token, user_id } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", user_id);
        localStorage.setItem("name", name);

        setAlert({ message: "Login successful!", type: "success" });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      setAlert({
        message: "Login failed! Please check your credentials.",
        type: "danger",
      });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center mb-4">
            <img
              src={Logo}
              alt="Logo"
              width="100"
              className="mb-3"
              style={{ borderRadius: "20px" }}
            />
            <h2>Login to AI Nexus</h2>
          </div>
          {alert.message && (
            <Alert variant={alert.type} className="text-center">
              {alert.message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>

            <div className="text-center mt-3">
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
