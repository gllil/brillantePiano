import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoImg from "../assets/images/brillantePianoLogoImage.png";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" sticky="top">
      <Container>
        <Navbar.Brand className="logo-font" href="/">
          <h1>
            brillante{" "}
            <img
              alt="brillante piano logo"
              src={logoImg}
              width="50"
              className="d-inline-block align-top"
            />{" "}
            piano
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/tuition">Tuition</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/policy">Policy</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/faqs">FAQ's</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
