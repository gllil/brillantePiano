import { Container, Row, Col } from "react-bootstrap";
import notFoundImage from "../assets/images/30.png";

const NotFound = () => {
  return (
    <Container className="shortPageContainer mt-5">
      <Row>
        <Col className="text-center mt-3">
          <h1>404 Error - Page Not Found</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={notFoundImage}
            alt="man searching with a magnifying glass"
            className="notFoundImage"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
