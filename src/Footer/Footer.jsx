import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  let arr = [1, 2, 3, 4, 5];
  props.getNumber(arr);

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="secondary">
        <Container>
          <Navbar.Brand href="#">Footer 2022</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
