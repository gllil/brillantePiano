import { useState } from "react";
import { Badge, Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { firestore } from "../firebase/config";

const TuitionCard = ({
  docId,
  cardBadge,
  titleOne,
  titleTwo,
  subtitle,
  manage,
  live,
}) => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [form, setForm] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpen(true);
    setSuccess(null);
    setError(null);
  };
  const handleDeleteModal = (e) => {
    e.preventDefault();
    setOpenDelete(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    firestore
      .collection("tuition")
      .doc(id)
      .delete()
      .then(() => {
        setSuccess("Tuition Card Has Been Deleted Successfully");
        setTimeout(() => {
          setSuccess(null);
          setOpenDelete(false);
        }, 3000);
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setError(null);
          setOpen(false);
        }, 3000);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (form) {
      firestore
        .collection("tuition")
        .doc(docId)
        .set(form, { merge: true })
        .then(() => {
          setSuccess("Tuition Card Has Been Updated Successfully");
          setTimeout(() => {
            setSuccess(null);
            setOpen(false);
          }, 3000);
        })
        .catch((err) => {
          setError(err.message);
          setTimeout(() => {
            setError(null);
            setOpen(false);
          }, 3000);
        });
    }
  };

  return (
    <Col xs={12} sm={6} xl={3} className="mt-4">
      <Card className="tuitionCards">
        <h2 className="text-center badgeWrapper">
          <Badge pill>{cardBadge}</Badge>
        </h2>
        <Card.Body className="align-items-center">
          <Card.Title as="h3">{titleOne}</Card.Title>
          <Card.Title as="h4">{titleTwo}</Card.Title>
          <Card.Subtitle as="em">{subtitle}</Card.Subtitle>
          <Card.Text>
            {live && (
              <Button size="sm" className="mt-2" href="/#contactMe">
                Get Started
              </Button>
            )}
            {manage && (
              <>
                <Button size="sm" className="m-1" onClick={handleOpenModal}>
                  Edit
                </Button>
                <Button size="sm" className="m-1" onClick={handleDeleteModal}>
                  Delete
                </Button>
              </>
            )}
          </Card.Text>
          <Modal id="editForm" show={open} onHide={() => setOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Tuition Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onChange={handleFormChange}>
                <Form.Group>
                  <Form.Label>Card Badge Title</Form.Label>
                  <Form.Control
                    name="badge"
                    type="text"
                    defaultValue={cardBadge}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Time of Year</Form.Label>
                  <Form.Select name="timeOfYear" defaultValue={titleOne}>
                    <option>Academic Year</option>
                    <option>Summer Break</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    name="price"
                    type="text"
                    defaultValue={titleTwo}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Sub Price</Form.Label>
                  <Form.Control
                    name="subPrice"
                    type="text"
                    defaultValue={subtitle}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {success && <p className="success">{success}</p>}
              {error && <p className="error">{error}</p>}
              <Button onClick={handleFormSubmit}>Update</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </Modal.Footer>
          </Modal>
          <Modal show={openDelete} onHide={() => setOpenDelete(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <h5>Are you sure you want to delete?</h5>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              {success && <p className="success">{success}</p>}
              {error && <p className="error">{error}</p>}
              <Button onClick={(e) => handleDelete(e, docId)}>Yes</Button>
              <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TuitionCard;
