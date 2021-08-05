import { Container, Row, Col, Button, Card } from "react-bootstrap";
import handShakeIcon from "../assets/icons/hand-shake.png";
import waterColorPiano from "../assets/images/piano3.png";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <Container className="mb-3">
      <Row className="mt-5">
        <Col xs={12} lg={5}>
          <h2>
            Music is meant to be enjoyed, and is enjoyed most when a student
            feels capable.
          </h2>
          <h6 className="mt-3">
            I teach technique, reading, composition, theory, and performance
            pieces so each student can progress and love what they do.
          </h6>
          <Button className="mt-3">Schedule a lesson</Button>
        </Col>
        <Col className="text-center">
          <img src={waterColorPiano} width="400px" alt="water colors piano" />
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col xs={12} md={6}>
          <Card className="attributeCards mt-3">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center">
                  <img
                    src={handShakeIcon}
                    width="100px"
                    alt="hand shake icon"
                    className="cardIcon"
                  />
                </Col>
                <Col xs={12} md={8}>
                  <h4>Title of Card</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nunc sapien, ultrices a turpis malesuada, blandit
                    laoreet erat. Cras non egestas velit.{" "}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="attributeCards mt-3">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center">
                  <img
                    src={handShakeIcon}
                    width="100px"
                    alt="hand shake icon"
                    className="cardIcon"
                  />
                </Col>
                <Col xs={12} md={8}>
                  <h4>Title of Card</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nunc sapien, ultrices a turpis malesuada, blandit
                    laoreet erat. Cras non egestas velit.{" "}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="attributeCards mt-3">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center">
                  <img
                    src={handShakeIcon}
                    width="100px"
                    alt="hand shake icon"
                    className="cardIcon"
                  />
                </Col>
                <Col xs={12} md={8}>
                  <h4>Title of Card</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nunc sapien, ultrices a turpis malesuada, blandit
                    laoreet erat. Cras non egestas velit.{" "}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="attributeCards mt-3">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center">
                  <img
                    src={handShakeIcon}
                    width="100px"
                    alt="hand shake icon"
                    className="cardIcon"
                  />
                </Col>
                <Col xs={12} md={8}>
                  <h4>Title of Card</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nunc sapien, ultrices a turpis malesuada, blandit
                    laoreet erat. Cras non egestas velit.{" "}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Contact />
      </Row>
    </Container>
  );
};

export default Home;
