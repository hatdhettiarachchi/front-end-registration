import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/Registration1.css";

function Registration1() {
  const [showModal, setShowModal] = useState(false);
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      termsChecked: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .matches(/@/, "Email address must contain @"),

      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must not exceed 20 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character"
        ),

      termsChecked: Yup.boolean().oneOf(
        [true],
        "Please accept the Terms & Conditions"
      ),
    }),
    onSubmit: (values) => {
      handleModalShow();
      console.log(values);
    },
  });



  
  return (
    <Container fluid className="registration-container">
      <Row>
        <Col xs={12} md={5} lg={5} className="left-column">
          {/* Left side content */}
        </Col>
        <Col xs={12} md={7} lg={7} className="right-column">
          <div className="registration-form">
            <div className="greeting">
              <h1>Sign Up into your account</h1>
              <h2>Join as a new member!</h2>
            </div>

            <Form>
              <Form.Group className="formerp" controlId="formUsername">
                <Form.Label className="formlabel">Username</Form.Label>
                <div
                  className={`input-container ${
                    formik.touched.username && formik.errors.username
                      ? "is-invalid"
                      : formik.touched.username && !formik.errors.username
                      ? "is-valid"
                      : ""
                  }`}
                ></div>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  {...formik.getFieldProps("username")}
                  className={`form-control ${
                    formik.touched.username && formik.errors.username
                      ? "is-invalid"
                      : formik.touched.username && !formik.errors.username
                      ? "is-valid"
                      : ""
                  }`}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="invalid-feedback d-flex align-items-center">
                    <i className="bi bi-exclamation-circle-fill me-2 text-danger"></i>
                    {formik.errors.username}
                  </div>
                ) : formik.touched.username && !formik.errors.username ? (
                  <i className="bi bi-check-circle-fill text-success"></i>
                ) : null}
              </Form.Group>

              <Form.Group className="formerp" controlId="formPassword">
                <Form.Label className="formlabel">Create Password</Form.Label>
                <div
                  className={`input-container ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : formik.touched.password && !formik.errors.password
                      ? "is-valid"
                      : ""
                  }`}
                ></div>
                <Form.Control
                  type="password"
                  placeholder="Create your password"
                  {...formik.getFieldProps("password")}
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : formik.touched.password && !formik.errors.password
                      ? "is-valid"
                      : ""
                  }`}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="invalid-feedback d-flex align-items-center">
                    <i className="bi bi-exclamation-circle-fill me-2 text-danger"></i>
                    {formik.errors.password}
                  </div>
                ) : formik.touched.password && !formik.errors.password ? (
                  <i className="bi bi-check-circle-fill text-success"></i>
                ) : null}
              </Form.Group>

              <Form.Group className="checkbtn" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check me out!"
                  {...formik.getFieldProps("termsChecked")}
                />
                {formik.touched.termsChecked && formik.errors.termsChecked && (
                  <div className="error-message">
                    {formik.errors.termsChecked}
                  </div>
                )}
              </Form.Group>

              <Button className="btnreg" variant="custom" type="submit">
                Get Started
              </Button>
              <div className="login-link">
                Already have an account? <a href="/login">Login</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration1;
