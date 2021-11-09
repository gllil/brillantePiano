import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { firestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import TuitionCard from "./TuitionCard";

const ManageTuition = () => {
  const [cardForm, setCardForm] = useState({});
  const { tuitionItems } = useFirestore("tuition");

  const tuitionCollection = firestore.collection("tuition");

  const tuitionForm = document.getElementById("tuitionForm");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCardForm({ ...cardForm, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (cardForm) {
      tuitionCollection.add(cardForm).then(() => {
        tuitionForm.reset();
      });
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col className="text-center">
              <h4>Add Tuition Card</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form
                id="tuitionForm"
                onChange={handleFormChange}
                onSubmit={handleFormSubmit}
              >
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Card Badge Title</Form.Label>
                      <Form.Control name="badge" type="text" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Time of Year</Form.Label>
                    <Form.Select name="timeOfYear" required>
                      <option></option>
                      <option>Academic Year</option>
                      <option>Summer Break</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Price</Form.Label>
                      <Form.Control name="price" type="text" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Sub Price</Form.Label>
                      <Form.Control name="subPrice" type="text" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-end">
                    <Button type="submit" className="mt-3">
                      Add Card
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="cardsWrapper justify-content-center mt-5">
        {tuitionItems &&
          tuitionItems.map((items) => (
            <TuitionCard
              key={items.id}
              cardBadge={items.badge}
              titleOne={items.timeOfYear}
              titleTwo={items.price}
              subtitle={items.subPrice}
              manage={true}
            />
          ))}
      </Row>
    </Container>
  );
};

export default ManageTuition;
