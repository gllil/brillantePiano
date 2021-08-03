import { Nav, Navbar } from "react-bootstrap";
import logoImg from "../assets/images/brillantePianoLogoImage.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Navbar className="justify-content-center">
      <Nav className="flex-column align-items-center">
        <Nav.Item>
          <h4>
            brillante <img width="30px" src={logoImg} alt="piano" /> piano
          </h4>
        </Nav.Item>
        <Nav.Item>
          <h5>Camille Weber M.M.</h5>
        </Nav.Item>
        <Nav.Item>
          <h5>
            <span>©</span> Copyright {currentYear}
          </h5>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Footer;
