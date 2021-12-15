import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { firestore, timestamp } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import TuitionCard from "./TuitionCard";
import priceImg from "../assets/images/price.jpg";
import badgeImg from "../assets/images/badge.jpg";
import subPriceImg from "../assets/images/subPrice.jpg";
import timeOfYearImg from "../assets/images/timeOfYear.jpg";

const ManageTuition = () => {
  const [cardForm, setCardForm] = useState({});
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [openImageModal, setOpenImageModal] = useState(false);
  const { tuitionItems } = useFirestore("tuition");
  const tuitionCollection = firestore.collection("tuition");

  const tuitionForm = document.getElementById("tuitionForm");

  const openExampleModal = (e, imageName) => {
    e.stopPropagation();
    e.preventDefault();
    switch (imageName) {
      case "price":
        setImageUrl(priceImg);
        break;
      case "badge":
        console.log(badgeImg);

        setImageUrl(badgeImg);
        break;
      case "subPrice":
        setImageUrl(subPriceImg);
        break;
      case "timeOfYear":
        setImageUrl(timeOfYearImg);
        break;
      default:
        setImageUrl(null);
    }
    setOpenImageModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const createdAt = timestamp();
    setCardForm({ ...cardForm, createdAt, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (cardForm) {
      tuitionCollection
        .add(cardForm)
        .then(() => {
          tuitionForm.reset();
          setSuccess("Tuition Card Has Been Updated Successfully");
          setTimeout(() => {
            setSuccess(null);
          }, 3000);
        })
        .catch((err) => {
          setError(err.message);
          setTimeout(() => {
            setError(null);
          }, 3000);
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
              <Modal
                size="xl"
                show={openImageModal}
                onHide={() => setOpenImageModal(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row className="justify-content-center align-items-center">
                    <Col className="exampleImgWrapper">
                      <img src={imageUrl} alt={imageUrl} width="100%" />
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
              <Form
                id="tuitionForm"
                onChange={handleFormChange}
                onSubmit={handleFormSubmit}
              >
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Card Badge Title</Form.Label>
                      <Form.Text>
                        <button
                          className="example"
                          onClick={(e) => openExampleModal(e, "badge")}
                        >
                          Example <i className="far fa-question-circle"></i>
                        </button>
                      </Form.Text>
                      <Form.Control name="badge" type="text" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Time of Year</Form.Label>
                    <Form.Text>
                      <button
                        className="example"
                        onClick={(e) => openExampleModal(e, "timeOfYear")}
                      >
                        Example <i className="far fa-question-circle"></i>
                      </button>
                    </Form.Text>
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
                      <Form.Text>
                        <button
                          className="example"
                          onClick={(e) => openExampleModal(e, "price")}
                        >
                          Example <i className="far fa-question-circle"></i>
                        </button>
                      </Form.Text>
                      <Form.Control name="price" type="text" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Sub Price</Form.Label>
                      <Form.Text>
                        <button
                          className="example"
                          onClick={(e) => openExampleModal(e, "subPrice")}
                        >
                          Example <i className="far fa-question-circle"></i>
                        </button>
                      </Form.Text>
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
                <Row>
                  <Col className="text-center">
                    {success && <p className="success">{success}</p>}
                    {error && <p className="error">{error}</p>}
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
              docId={items.id}
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
