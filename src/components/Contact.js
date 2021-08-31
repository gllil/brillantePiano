import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { functions } from "../firebase/config";

const Contact = () => {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const contactMeForm = document.getElementById("contactMeForm");

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setMessage({ ...message, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const contactMe = functions.httpsCallable("contactMe");
    setLoading(true);

    contactMe(message)
      .then(() => {
        console.log("sent successfully");
        setMessage({});
        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
        contactMeForm.reset();
      })
      .catch((err) => console.error(err));
  };
  return (
    <Container className="mb-5 mt-5" id="contactMe">
      <Row className="text-center">
        <h2>Contact Me</h2>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form
            id="contactMeForm"
            onSubmit={handleFormSubmit}
            onChange={handleFormChange}
          >
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
            {loading ? (
              <Button disabled className="mt-3">
                <Spinner size="sm" animation="border" />
              </Button>
            ) : (
              <Button type="submit" className="mt-3">
                Submit
              </Button>
            )}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          {success && (
            <h4 style={{ color: "green" }}>
              Message has been sent successfull!
            </h4>
          )}
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
