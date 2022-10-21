import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { login, setLoading } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
        setErrorMessage("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Please verify your email before login !");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Form onSubmit={handleSubmit} className="text-start">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>

      <Form.Text className="text-danger d-block mt-2">{errorMessage}</Form.Text>
    </Form>
  );
};

export default Login;
