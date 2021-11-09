import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { firestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";

const ManageMainPage = () => {
  const [form, setForm] = useState({});
  const [success, setSuccess] = useState(null);
  const mainPageRef = firestore.collection("mainPage");
  const { mainPageContent } = useFirestore("mainPage");
  const mainForm = document.getElementById("mainForm");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (form) {
      mainPageRef
        .doc("details")
        .set(form, { merge: true })
        .then(() => {
          setSuccess("Main Page Content has been updated successfully!");
          setForm({});
          mainForm.reset();
          setTimeout(() => setSuccess(null), 5000);
        });
    }
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container>
      <Row>
        <Col className="text-center m-5">
          <h4>Manage Main Page</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <em>Title</em>
          <h2>{mainPageContent.title}</h2>
          <em>Subtitle</em>
          <h6>{mainPageContent.subtitle}</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="text-center mt-5">
              <h4>Edit Main Page Form</h4>
            </Col>
          </Row>
          <Form
            id="mainForm"
            onSubmit={handleFormSubmit}
            onChange={handleFormChange}
          >
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subtitle</Form.Label>
              <Form.Control as="textarea" name="subtitle" />
            </Form.Group>
            <Row>
              <Col className="text-end">
                <Button type="submit" className="mt-3">
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col className="success mt-3 text-center">
              <p>{success}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageMainPage;
