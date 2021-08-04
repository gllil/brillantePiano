import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="mb-5 mt-5">
      <Row className="text-center">
        <h2>Contact Me</h2>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" name="phone" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" type="text" name="message" required />
            </Form.Group>
            <Button className="mt-3">Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <a
                href="mailto:camillerweber@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5>
                  <i className="far fa-envelope"></i> CamilleRWeber@gmail.com
                </h5>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col xs={12} className="text-center">
              <a href="tel:4357576530">
                <h5>
                  <i className="fas fa-phone"></i> (435) 757-6530
                </h5>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
