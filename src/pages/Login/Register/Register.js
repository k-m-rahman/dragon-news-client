import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  // states
  const { signUp, updateUserProfile, verifyEmail } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [accepted, setAccepted] = useState(false);

  // navigation
  const navigate = useNavigate();

  // form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
        handleEmailVerification();
        handleProfile(name, photo);
        setErrorMessage("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };

  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };

  const handleProfile = (name, photo) => {
    const profile = { displayName: name, photoURL: photo };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        toast.success("Email verification sent!", { duration: 2000 });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit} className="text-start">
      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Photo</Form.Label>
        <Form.Control name="photo" type="text" placeholder="Enter photo url" />
      </Form.Group>
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

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleChecked}
          label={
            <small>
              Accept our <Link to="/terms">Terms & Conditions</Link>
            </small>
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>

      <Form.Text className="text-danger d-block mt-2">{errorMessage}</Form.Text>
    </Form>
  );
};

export default Register;
