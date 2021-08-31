import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import camilleImg from "../assets/images/aboutMeImage.jpg";
import youngCamille1 from "../assets/images/youngCamille1.jpeg";
import youngCamille2 from "../assets/images/youngCamille2.jpeg";

const About = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center m-5">
          <h2>Camille Jensen Weber</h2>
          <h4>A Little About Me</h4>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} lg={6}>
          <div className="aboutMeImagesWrapper">
            <Image src={camilleImg} fluid className="camilleImg" />
            <Image src={youngCamille1} fluid className="youngCamille1Img" />
            <Image src={youngCamille2} fluid className="youngCamille2Img" />
          </div>
        </Col>
        <Col xs={12} lg={6} className="mt-5 mb-5">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <i className="fas fa-music"></i> Teaching private piano since 2007
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-graduation-cap"></i> Bachelor of Music degree
              in Piano Performance, Masters of Music in Piano Performance and
              Pedagogy (Utah State University)
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-award"></i> Decorated in various competition
              awards as a teenager, such as the UMTA State Concerto Competition
              and university piano festivals
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-star"></i> Three-time soloist with orchestral
              concerto performances, 2011 through 2012
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-trophy"></i> Winner of the National
              Federation of Music Grand Cup
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-chalkboard-teacher"></i> Two-time presenter
              at Music Teachers National Association national conventions, 2020
              and 2021
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-university"></i> Utah State University
              Master's Researcher of the Year, 2021
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-users"></i> Member of National Federation of
              Music Clubs and Music Teachers National Association
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-3">
          <em>
            Camille's personal instructors have been from the German, Russian,
            and Japanese schools of teaching.
          </em>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h3 className="m-3">Performances</h3>
        </Col>
      </Row>
      <Row className="align-items-center mt-5 mb-5">
        <Col className="text-center " xs={12} lg={6}>
          <h4 className="m-5">2012 Concerto Performance</h4>
        </Col>
        <Col xs={12} lg={6}>
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/SWpQJFbDAjc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center mt-5 mb-5">
        <Col className="text-center" xs={12} lg={6}>
          <h4 className="m-5">2020 Solo Performance</h4>
        </Col>
        <Col xs={12} lg={6}>
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/elGgU6fysXY?start=3060"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center mt-5 mb-5">
        <Col className="text-center" xs={12} lg={6}>
          <h4 className="m-5">2021 Solo Performance</h4>
        </Col>
        <Col xs={12} lg={6}>
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/29Vvp48ng3Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
