import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const RightSideNav = () => {
  const { providerLogin, setUser, setErrorMessage } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary">
          {" "}
          <FaGoogle></FaGoogle> <span>Google Sign In</span>
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> <span>Github Sign In</span>
        </Button>
      </ButtonGroup>

      <div className="mt-3">
        <h5>Find us on </h5>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram></FaInstagram> Instagram{" "}
          </ListGroup.Item>
          <ListGroup.Item>Terms & Conditions</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-4">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
