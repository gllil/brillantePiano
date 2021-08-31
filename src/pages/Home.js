import { Container, Row, Col, Button, Card } from "react-bootstrap";
import educationIcon from "../assets/icons/conference-education.png";
import inspirationIcon from "../assets/icons/inspiration.png";
import keyboardPianoIcon from "../assets/icons/keyboard-piano.png";
import musicFilesIcon from "../assets/icons/music-files.png";
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
          <Button className="mt-3" href="#contactMe">
            Get Started
          </Button>
        </Col>
        <Col className="text-center">
          <img src={waterColorPiano} width="400px" alt="water colors piano" />
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col xs={12} md={6} className="mt-2">
          <Card className="attributeCards">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center">
                  <img
                    src={educationIcon}
                    width="100px"
                    alt="hand shake icon"
                    className="cardIcon"
                  />
                </Col>
                <Col xs={12} md={8} className="mt-3">
                  <h4>Wide teaching experience</h4>
                  <p>
                    I took my first students in 2007 under the supervision of an
                    experienced teacher. Since then I have received formal
                    education in piano pedagogy from numerous organizations and
                    countless teaching experts.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <Card className="attributeCards">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center">
                  <img
                    src={musicFilesIcon}
                    width="100px"
                    alt="hand shake icon"
                    className="cardIcon"
                  />
                </Col>
                <Col xs={12} md={8} className="mt-3">
                  <h4>Diversity of literature</h4>
                  <p>
                    As a graduate student, I specialized in researching
                    underrepresented composers l. I strongly believe in giving
                    my students a variety of musical styles and genres and can
                    cater to any student's interests: jazz, international,
                    modernist, etc.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <Card className="attributeCards">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center">
                  <img
                    src={inspirationIcon}
                    width="100px"
                    alt="hand shake icon"
                    className="cardIcon"
                  />
                </Col>
                <Col xs={12} md={8} className="mt-3">
                  <h4>Focus on psychology</h4>
                  <p>
                    Both in and out of school, I extensively study learning
                    theories and psychology. I build my teaching style around
                    how the music and the brain interact and how to enjoy the
                    learning process.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <Card className="attributeCards">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center">
                  <img
                    src={keyboardPianoIcon}
                    width="100px"
                    alt="hand shake icon"
                    className="cardIcon"
                  />
                </Col>
                <Col xs={12} md={8} className="mt-3">
                  <h4>Walk the walk</h4>
                  <p>
                    I am not just a teacher, I'm an active pianist and
                    performer. I try out practicing methods and share the best
                    ones with my students; I test all the instructions I give to
                    them too! This helps us find the most effective, and most
                    fun, ways to practice.
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
